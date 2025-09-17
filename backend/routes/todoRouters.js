const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Define API routes and link to controller functions
router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
