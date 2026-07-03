import { devices } from "../data/devices";
import { rooms, type room } from "../data/rooms";
import { events, type event } from "../data/events";
import {
  personEntered,
  personLeft,
  idle,
} from "./events";

export function startSimulation() {
  setInterval(() => {
    const room = rooms[Math.floor(Math.random() * rooms.length)]!;
    const event = events[Math.floor(Math.random() * events.length)]!;

    handleEvent(room, event);
  }, 5000);
}

function handleEvent(room: room, event: event) {
  switch (event) {
    case "person_entered":
      personEntered(room);
      break;

    case "person_left":
      personLeft(room);
      break;

    case "idle":
      idle(room);
      break;
  }
}