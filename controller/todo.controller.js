const todoRepository = require("./../repository/todo.repository");

const findAllTodo = async (req, res) => {
  try {
    const todos = await todoRepository.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findByIdTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoRepository.findById(id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await todoRepository.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateByIdTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoRepository.updateById(id, req.body);

    if (todo[0] === 1) {
      res.json({ todo, message: "Todo updated successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteByIdTodo = async (id) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoRepository.deleteById(id);

    if (deletedTodo === 1) {
      res.json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAllTodo,
  findByIdTodo,
  createTodo,
  updateByIdTodo,
  deleteByIdTodo,
};
