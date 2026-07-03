import express from "express";
import cors from "cors";
import http from "http";
import { devices, type device } from "./data/devices";
import { startSimulation } from "./simulation/simulation";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server)

app.use(cors());
app.use(express.json());

startSimulation();

app.get("/", (_, res) => {
  res.send("Backend is running");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get("/devices", (_, res) => {
    res.json(devices)
})

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});