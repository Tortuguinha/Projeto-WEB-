const { prisma } = require("../../lib/prisma");

class JWTPrismaRepository {
  async remove() {
    
  }

  async store(data) {
    try {
      const user = await prisma.authSession.create({
        data: {
          refreshToken: data.refreshToken,
          expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          employee: {
            connect: {
              id: data.id,
            },
          },
        },
      });

      return user || null;
    } catch (err) {
      console.error(err);
    }
  }

  async findByEmail(value) {
    try {
      const user = await prisma.loginAttempt.findUnique({
          
      })

      return user;
    } catch (err) {
      console.error(err);
    }
  }
}

class UserPrismaFactory {
  createRepository() {
    return new JWTPrismaRepository();
  }
}

module.exports = { UserPrismaFactory };
