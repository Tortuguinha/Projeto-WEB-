const express = require("express");
const app = express();
const {UserRoutes} = require("./http/controllers/routes");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api", UserRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal Server Error",
    });
});

module.exports = {
    AppServer: app,
};