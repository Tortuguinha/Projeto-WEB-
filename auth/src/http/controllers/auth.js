async function AuthController(req, res) {
  try {
    const { name, cpf, email, password } = registerSchema.parse(req.body);
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "Internal Server Error",
    });
  }
}

module.exports = { AuthController };
