const { registerSchema } = require('../schemas/RegisterSchemas');

function RegisterController(req, res){
    try {
        const { name, cpf, email, password, confirmPassword } = registerSchema.parse(req.body);
        res.status(200).json({
            message: "User registration successful!",
        });
    } catch (err) {
        res.status(500).json({
            message: "Registration failed!",
        });
    }
}
module.exports = {
    RegisterController,
};