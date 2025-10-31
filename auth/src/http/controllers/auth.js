const { authSchema } = require("../schemas/AuthSchema")

async function AuthController(req, res) {
  try {
    const { email, password } = authSchema.parse(req.body);

    

  } catch (err) {
    res.status(500).json({
      error: err,
      message: "Internal Server Error",
    });
  }
}

module.exports = { AuthController };
