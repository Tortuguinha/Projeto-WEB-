const express = require("express");
const app = express();
const {UserRoutes} = require("./http/controllers/routes");
const { use } = require("react");

app.use("/api", UserRoutes);

app.use(req, res, next => {
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