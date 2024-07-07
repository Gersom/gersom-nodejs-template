const insertUsers = require("./insertUsers")

const insertData = async () => {
  await insertUsers()
}

module.exports = insertData