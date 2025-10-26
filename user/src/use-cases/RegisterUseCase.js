const { hashPwd } = require("../utils/hashPwd");

class RegisterUseCase {
  #userPrismaRepository;

  constructor(userPrismaRepository) {
    this.#userPrismaRepository = userPrismaRepository;
  }

  async exec(data) {
    const userAlreadyExists = await this.#userPrismaRepository.findByCPF(
      data.cpf
    );

    if (userAlreadyExists) {
      throw new Error("O usuário já existe");
    }

    console.log(userAlreadyExists);

    const hashedPwd = await hashPwd(data.password);

    const user = await this.#userPrismaRepository.save({
      ...data,
      password: hashedPwd,
    });

    return { user };
  }
}

module.exports = {
  RegisterUseCase,
};
