const { Router } = require("express");
const { RegisterController } = require("./register");

const router = Router();

router.post("/", RegisterController);

router.get("/test", (req, res) => {
  res.send("User is working!");
});

module.exports = {
  UserRoutes: router,
};
