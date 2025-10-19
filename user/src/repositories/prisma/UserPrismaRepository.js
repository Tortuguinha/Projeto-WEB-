const {prisma} = require("../../lib/prisma");

class UserprismaRepositories{
    async save (data) {
        const user = await prisma.user.create({
            data,
        });
        return user;
    }
    async findByCPF (value) {
        const user = await prisma.user.findUnique({
            where: {
                cpf: value,
            },
            select: {
                name: true,
                email: true,
            },
        });
        return user;
    }
}

class UserPrismaFactory {
    createRepository() {
        return new UserprismaRepositories();
    }
}

module.exports = {
    UserPrismaFactory,
};