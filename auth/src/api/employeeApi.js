const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost/employee",
});

const findEmail = async (email) => {
  try {
    const res = await api.get("/find-email", {
      params: { email },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (err) {
    console.error("Erro ao buscar e-mail no serviço employee:", err.message);
    throw err;
  }
};

module.exports = { findEmail };
