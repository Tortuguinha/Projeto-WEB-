const { Router } = require("express");
const { AuthController } = require("./auth");
const { verifyJwt } = require("../middlewares/jwt/verifyJwt")

const router = Router();

router.post("/login", AuthController);

router.get("/test", (req, res) => {
  res.send("Auth is working!");
});

module.exports = {
  AuthRoutes: router,
};
