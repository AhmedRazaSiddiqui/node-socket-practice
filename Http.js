import http from "http";

export default {
  Init: (app) => {
    console.log("Server Started");
    let server = http.createServer(app);
    server.listen(8000, () => {
      console.log(`Socket.IO server running at http://localhost:${8000}/`);
    });
    return server;
  },
};
