import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";

import HttpServer from "./HttpServer.js";
import Socket from "./Socket.js";

const app = express();
app.use(express.json());
app.use(cors()); // Allow CORS

const server = HttpServer.Init(app); // Start Server
const io = new SocketServer(server, { cors: { origin: "*" } }); // Socket Server
Socket(io); // Socket Listeners
