const express = require("express")
const { searchdata } = require("../controllers/searchquery")
const route = express.Router()


route.get("/search",searchdata)

module.exports = {route}