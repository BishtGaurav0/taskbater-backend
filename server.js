const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/trades", tradeRoutes);

// WebSocket setup
require("./sockets/chatSocket")(io);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(5000, () => console.log("Server running on port 5000"));
    console.log("✅ MongoDB connected successfully");
  })
  .catch(err => console.error("❌ MongoDB connection error:",err));
