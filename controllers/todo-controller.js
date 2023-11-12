const Todos = require("../models/Todos")
module.exports = {
    getAllTodo: (req,res) => {
        res.json({
            massage: "berhasil mendapatkan data todos",
            data: Todos
        })
    },
    getTodoById: (req, res) => {

    },
    addTodoById: (req, res) => {

    },
    editTodoById: (req, res) => {

    },
    deleteTodoById: (req, res) => {

    },
    
}