const {Router} = require("express")
const { RegisterController } = require("./register");
const router = Router();

router.post("/user", RegisterController);

module.exports = {
    UserRoutes: router,
};