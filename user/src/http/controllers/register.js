const { registerSchema } = require("../schemas/RegisterSchema");
const {
  UserPrismaFactory,
} = require("../../repositories/prisma/UserPrismaRepository");

const { MakeRegister } = require("../../use-cases/factories/makeRegister");

async function RegisterController(req, res) {
  try {
    const { name, cpf, email, password } = registerSchema.parse(req.body);

    const userFactory = new UserPrismaFactory();
    const registerFactory = MakeRegister(userFactory);

    await registerFactory.exec({
      name,
      cpf,
      email,
      password,
    });

    res.status(200).json({
      message: "Usuário criado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "Internal Server Error",
    });
  }
}

module.exports = { RegisterController };
