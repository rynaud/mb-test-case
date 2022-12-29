import express, { Request, Response } from "express";
import http from "http";
import socketio, { Server, Socket } from "socket.io";

const app: express.Application = express();
const server = http.createServer(app);
const port: number = 8000;
const io: Server = new Server(server, {
  cors: {
    origin: "*",
  },
});

interface UserType {
  username: String;
  message: String;
}

io.on("connection", (socket: Socket) => {
  socket.on("chat", (user: UserType) => {
    socket.broadcast.emit("listener", user);
  });

  socket.on("echo", (user: UserType) => {
    user.username += " (ECHO)";
    socket.emit("listener", user);
  });
});

server.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
