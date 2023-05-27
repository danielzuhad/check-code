const db = require("./../models");
const Todo = db.Todo;

const findAll = async () => {
  return await Todo.findAll();
};

const findById = async (id) => {
  return await Todo.findByPk(id);
};

const create = async (todo) => {
  return await Todo.create(todo);
};

const updateById = async (id, todo) => {
  return await Todo.update(todo, { where: { id } });
};

const deleteById = async (id) => {
  return await Todo.delete({ where: { id } });
};

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
