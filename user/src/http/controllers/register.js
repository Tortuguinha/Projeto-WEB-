const { registerSchema } = require('../schemas/RegisterSchemas');
const {UserPrismaFactory} = require("../../repositories/prisma/UserPrismaRepository");
const {MakeRegister} = require("../../user-cases/factories/makeRegister");

async function RegisterController(req, res){
    try {
        const { name, cpf, email, password, confirmPassword } = registerSchema.parse(req.body);

        const userFactory = new UserPrismaFactory();
        const makeRegister = MakeRegister(userFactory);

        await registerFactory.execute({
            name,
            cpf,
            email,
            password,
        });
        
        res.status(200).json({
            message: "User registration successful!",
        });
    } catch (err) {
        res.status(500).json({
            message: "Registration failed!",
        });
    }
}
module.exports = {RegisterController};