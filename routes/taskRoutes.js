const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);

module.exports = router;
