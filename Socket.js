export default (io) => {
  io.on("connection", (socket) => {
    console.log(
      "Socket Connected ----------------------------->>>>>>>>>>>>>>>>>>>-->>>",
      socket.id
    );
  });
};
