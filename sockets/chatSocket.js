module.exports = function(io) {
    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);
  
      socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
      });
  
      socket.on("sendMessage", ({ roomId, message }) => {
        io.to(roomId).emit("receiveMessage", message);
      });
  
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  };
  