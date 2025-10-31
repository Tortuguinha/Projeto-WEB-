const express = require("express");
const app = express();
const { AuthRoutes } = require("./http/controllers/routes");
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "HEAD", "POST", "PATCH", "PUT", "DELETE"]
}))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", AuthRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Rota não encontrada",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("Algo deu errado!");
});

module.exports = {
  AppServer: app,
};
