import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";

import routes from "./Routes.js";
import HttpServer from "./Http.js";
import Socket from "./Socket.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

const http = HttpServer.Init(app); // Start Server
const io = new SocketServer(http, { cors: { origin: "*" } }); // Socket Server
Socket(io); // Socket Listeners
