import express from "express";
import cors from "cors";
import http from "http";
import { devices } from "./data/devices";
import { startSimulation } from "./simulation/simulation";
import { Server } from "socket.io";
import { getOfficeState } from "./data/office";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(cors());
app.use(express.json());

startSimulation(io);

app.get("/", (_, res) => {
  res.send("Backend is running");
});


app.get("/devices", (_, res) => {
    res.json(devices)
})

app.get("/office", (_, res) => {
    res.json(getOfficeState());
})

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});