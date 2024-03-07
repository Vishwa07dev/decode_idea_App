/**
 * Start the server
 */
const express = require('express')

const app = express()

//Stitching the route here
require("./routes/idea.routes")(app)


app.listen(8000, ()=>{
    console.log("App started on the port num ", 8000)
})

