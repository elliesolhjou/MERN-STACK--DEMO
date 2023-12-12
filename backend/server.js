///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// initialize .env variables
require("dotenv").config();
// start the mongoose db connection
require("./config/db.connection.js")
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;
// import express
const express = require("express");
const cors = require ("cors")
const morgan = require ("morgan")



const peopleRouter = require("./routes/people.js")

// create application object
const app = express();

///////////////////////////////
// MOUNT MIDDLEWARES
////////////////////////////////
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use("/people", peopleRouter)
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
