const cors = require("cors");
const http = require("node:http");
const { AppServer } = require("./app");
const PORT = 4000;

AppServer.use(
    cors({
        origin: "*"
    })
);

const server = http.createServer(AppServer);
server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});