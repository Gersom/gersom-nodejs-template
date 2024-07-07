const mongoose = require("mongoose")
const { buildURI } = require("@utils/buildDBUri")

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = process.env.DB_URI 

const connectMongoDB = async () => {
  const DB_URI = buildURI({uri, database, username, password})
  const options = {}
  
  try {
    await mongoose.connect(DB_URI, options)      
    console.log('\n*** Connection to MongoDB established ***\n')
  } catch (err) {
    console.error('*** Error connecting to MongoDB ***\n', err)
    process.exit(1);
  }
}

module.exports = { connectDB: connectMongoDB }