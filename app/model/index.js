const mongoose = require('mongoose')

db = {}
db.mongoose = mongoose

db.user = require("./user.model");

module.exports = db