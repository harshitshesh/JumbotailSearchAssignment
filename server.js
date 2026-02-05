
const express = require("express");
const { route } = require("./routes/searchroute");

require('dotenv').config();

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

app.use("/api", route)



app.listen(port, () => {
    console.log("server started...")
})