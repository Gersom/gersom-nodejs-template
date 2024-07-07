require('dotenv').config()
const mongoose = require("mongoose")
const { buildURI } = require("@utils/dbBuildURI")

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = process.env.DB_URI 

const mongoConnect = async () => {
  const DB_URI = buildURI({uri, database, username, password})
  const options = {}
  
  try {
    await mongoose.connect(DB_URI, options)      
    console.log('*** MONGO DB CONNECTED. ***\n')
  } catch (error) {
    console.log('*** MONGO DB CONEXION ERROR ***\n')
    console.log(error.message)
  }
}

module.exports = { dbConnect: mongoConnect }