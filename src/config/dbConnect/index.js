const DB_ENGINE = process.env.DB_ENGINE
let dbConnect = {}

switch (DB_ENGINE) {
  case "mongodb":
    dbConnect = require("./mongodb")
    break
  case "postgresql":
    dbConnect = require("./postgresql")
    break
  default:
    throw new Error("Environment variable 'DB_ENGINE' is not valid.")
}

module.exports = dbConnect