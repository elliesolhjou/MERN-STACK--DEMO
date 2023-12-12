const mongoose = require('mongoose')

// pull DATABASE from .env
const {DATABASE_URI} = process.env


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.set('strictQuery', true)
mongoose.connect(DATABASE_URI)


// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to mongoose"))
    .on("error", (error)=> console.log(error))