const Todos = require("../models/Todos");
module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      massage: "berhasil mendapatkan data todos",
      data: Todos,
    });
  },
  getTodoById: (req, res) => {
    const { id } = req.params;
    const todo = Todos.find((todo) => todo.id == id);

    res.json({
      massage: "berhasil mendapatkan todo by Id",
      data: todo,
    });
  },
  addTodoById: (req, res) => {
    const data = req.body;

    const newTodo = {
      id: Todos[Todos.length - 1].id + 1,
      value: data.value,
    };
    Todos.push(newTodo);

    res.status(201).json({
      massage: " berhasil menambahakan todo baru",
    });
  },
  editTodoById: (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    
    const index = Todos.findIndex((todo) => todo.id == id);

    if (index !== -1) {
      
      Todos[index].value = updatedData.value;

      res.json({
        message: "Berhasil mengedit todo by Id",
        data: Todos[index],
      });
    } else {
      res.status(404).json({
        message: "Todo not found",
      });
    }
  },
  deleteTodoById: (req, res) => {},
};
