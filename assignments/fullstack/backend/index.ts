import express, { Request, Response } from "express";
import http from "http";
import socketio, { Socket } from "socket.io";

const app: express.Application = express();
const server = http.createServer(app);
const port: number = 3000;
const io = new socketio.Server(server);

app.get("/", (_req: Request, _res: Response) => {
  console.log(_req.body);
  _res.send("TypeScript With Express");
});

io.on("connection", (socket: Socket) => {
  console.log("connected");
});

server.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
