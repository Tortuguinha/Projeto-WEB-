const { prisma } = require("../../lib/prisma");

class UserPrismaRepository {
  async save(data) {
    try {
      const user = await prisma.employee.create({
        data,
      });

      return user;
    } catch (err) {
      console.error(err);
    }
  }

  async findByCPF(value) {
    try {
      const user = await prisma.employee.findUnique({
        where: {
          cpf: value,
        },
      });

      return user;
    } catch (err) {
      console.error(err);
    }
  }
}

class UserPrismaFactory {
  createRepository() {
    return new UserPrismaRepository();
  }
}

module.exports = { UserPrismaFactory };
