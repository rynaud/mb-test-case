import express, { Request, Response } from "express";
import http from "http";
import socketio, { Socket } from "socket.io";

const app: express.Application = express();
const server = http.createServer(app);
const port: number = 3000;
const io = new socketio.Server(server);

io.on("connection", (socket: Socket) => {
  console.log(socket);
});

server.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
