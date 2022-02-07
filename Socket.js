export default (io) => {
  io.on("connection", (socket) => {
    console.log(
      "Socket Connected ----------------------------->>>>>>>>>>>>>>>>>>>-->>>",
      socket.id
    );
    socket.on("disconnect", async () => {
      console.log(
        "Socket Disconnected ----------------------------->>>>>>>>>>>>>>>>>>>-->>>",
        socket.id
      );
    });
  });
};
