const DB_ENGINE = process.env.DB_ENGINE
let pathModel = ''

switch (DB_ENGINE) {
  case "mongodb":
    pathModel = 'mongoose'
    break
  case "postgresql":
    pathModel = 'sequelize'
    break
  default:
    throw new Error("Environment variable 'DB_ENGINE' is not valid.")
}

const models = {
  UserModel: require(`./${pathModel}/User`)
}

module.exports = models