const indexS = require("./users");
const indexX = require("./index");
const restaurantsX = require("./restaurants");

exports.routesInit = (app) => {
    app.use("/restaurants", restaurantsX)
    app.use("/users", indexS),
        app.use("/", indexX)
}