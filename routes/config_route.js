const indexS = require("./users");
const indexX = require("./index");

exports.routesInit = (app) => {
    app.use("/users", indexS),
        app.use("/index", indexX)
}