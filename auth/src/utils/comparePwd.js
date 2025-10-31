const bcrypt = require("bcrypt");

const comparePwd = async (pwdData, pwdHash) => {
  return await bcrypt.compare(pwdData, pwdHash);
};

module.exports = { comparePwd };
