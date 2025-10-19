const {hashPwd} = require("../utils/hashPwd")

class RegisterUseCase {
    #userPrismaRepository

    constructor(userPrismaRepository) {
        this.#userPrismaRepository = userPrismaRepository
    }

    async execute(data) {
        const userAlreadyExists = this.#userPrismaRepository.findByCPF(data.cpf);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const hashedPwd = await hashPwd(data.password);
        const user = await this.#userPrismaRepository.save({
            ...data,
            password: hashedPwd,
        });
        return {user};
    }
}

module.exports = {
    RegisterUseCase,
};