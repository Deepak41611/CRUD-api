const controller = require("../controller/auth.controller");

module.exports = (app) => {
  app.post("/api/auth/login", controller.signin);
};
