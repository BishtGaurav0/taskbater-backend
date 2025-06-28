const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, tags, skillOffered, postedBy } = req.body;
    const task = await Task.create({ title, description, tags, skillOffered, postedBy });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("postedBy", "username skills karma");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("postedBy");
    res.json(task);
  } catch (err) {
    res.status(404).json({ error: "Task not found" });
  }
};
