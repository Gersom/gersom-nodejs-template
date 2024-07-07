const { dbConnect } = require("@config/dbConnect");
const insertData = require("@services/database");

const host = process.env.HOST || 'http://localhost'
const port = process.env.PORT
let path = ''

if (port) path = `${host}:${port}`
else path = host

const message = 'Your server is ready'
const allMessage = `\n${message}:\n=> ${path}\n`

// LISTEN
const listen = (app) => {
  app.listen(port, async () => {
    console.log(allMessage)
    // Database conexion
    await dbConnect();

    // Insert into Database.
    await insertData();
  })
}

module.exports = listen