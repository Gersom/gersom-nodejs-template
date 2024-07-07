const DB_ENGINE = process.env.DB_ENGINE
let configDB = {}
switch (DB_ENGINE) {
  case "mongodb":
    configDB = require("./mongodb")
    break
  case "postgresql":
    configDB = require("./postgresql")
    break
  default:
    throw new Error("Environment variable 'DB_ENGINE' is not valid.")
}

module.exports = configDB