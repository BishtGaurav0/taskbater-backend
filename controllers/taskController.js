const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, tags, skillOffered } = req.body;

    // Remove postedBy completely — don't assign it here
    const task = await Task.create({ title, description, tags, skillOffered });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    // Remove populate of postedBy if you removed postedBy from schema
    // If postedBy field is still in schema, you can keep it, otherwise remove populate
    const tasks = await Task.find()/*.populate("postedBy", "username skills karma")*/;
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    // Same note as above for populate
    const task = await Task.findById(req.params.id)/*.populate("postedBy")*/;
    res.json(task);
  } catch (err) {
    res.status(404).json({ error: "Task not found" });
  }
};
