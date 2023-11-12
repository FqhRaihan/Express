const express = require ('express');
const route = express.Router()
const todoRoutes = require("./todo-route")


app.get("/", (req,res) => {
    res.json({
        message: "selamat datang di server"
    })
})

route.use("/todos",todoRoutes)

module.exports = route