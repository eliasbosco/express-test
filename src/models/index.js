const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.User = require("./user");

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;