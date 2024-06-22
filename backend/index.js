const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const user = require("./routes/authentication")
require("dotenv").config()

const app = express()
const port = process.env.PORT

mongoose.connect("mongodb://localhost/fasco")
.then(() => {
    console.log("connected to database");

    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    })
})
.catch((err) => {
    console.log("unable to connect to database");
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/auth', user)