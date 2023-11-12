const express = require ('express');
const route = express.Router()

app.get("/todos", (req,res) => {
    res.status(200).json({
        message: "berhasi mendapat data todos",
        data: todos
    })
})

route.get("/", () =>{}),
route.get("/:id", () =>{}),
route.post("/", () =>{}),
route.put("/:id", () =>{}),
route.delete("/:id", () =>{}),


module.exports = route