const { Router } = require("express");
const { RegisterController } = require("./register");

const router = Router();

router.post("/", RegisterController);

router.get("/test", (req, res) => {
  res.send("Employee is working!");
});

module.exports = {
  UserRoutes: router,
};
