const { comparePwd } = require("../utils/comparePwd");

class AuthUseCase {
  #userPrismaRepository;

  constructor(userPrismaRepository) {
    this.#userPrismaRepository = userPrismaRepository;
  }

  async exec(data) {
    const user = await this.#userPrismaRepository.findByCPF(data.cpf);

    if (!user) {
      throw new Error("O usuário não existe");
    }

    const password_is_match = await comparePwd(data.password, user.password);

    if (!password_is_match) {
      throw new Error("Senhas não coincidem");
    }

    return { user };
  }
}

module.exports = {
  AuthUseCase,
};
