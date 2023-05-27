const express = require("express");
const router = express.Router();
const todoController = require("./../controller/todo.controller");

router.post("/", todoController.createTodo);
router.get("/", todoController.findAllTodo);
router.get("/:id", todoController.findByIdTodo);
router.put("/:id", todoController.updateByIdTodo);
router.delete("/:id", todoController.deleteByIdTodo);

module.exports = router;
