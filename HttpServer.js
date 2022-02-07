import http from "http";

export default {
  Init: (app) => {
    let server;
    server = http.createServer(app);
    server.listen(6000, () => {
      console.log(`Server Started on PORT ${6000}`);
    });
    return server;
  },
};
