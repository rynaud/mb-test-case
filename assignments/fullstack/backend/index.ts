// Import the express in typescript file
import express, { Request, Response } from "express";

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get("/", (_req: Request, _res: Response) => {
  console.log(_req.body);
  _res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
