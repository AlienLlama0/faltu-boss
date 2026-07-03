import { rooms, type Room } from "../data/rooms";
import { events, type Event } from "../data/events";
import { getOfficeState } from "../data/office";

import { checkAfterHours, type Alert } from "./alert";
import { tickTime, formatTime, isOfficeHour } from "./simulationClock";
import { personEntered, personLeft, idle } from "./events";
import type { Server } from "socket.io";

export function startSimulation(io: Server) {
    setInterval(() => {
        let currentTime = tickTime();

        console.log(`\n===== ${formatTime()} =====`);

        if (isOfficeHour()) {
            const room = rooms[Math.floor(Math.random() * rooms.length)]!;
            const event = events[Math.floor(Math.random() * events.length)]!;

            handleEvent(room, event);
            io.emit("office:update", getOfficeState());
        } else {
            const alerts = checkAfterHours();

            if (alerts.length === 0) {
                console.log("Office closed. All devices are OFF.");
            } else {
                for (const alert of alerts) {
                    console.log(alert.message);

                    for (const device of alert.devices) {
                        console.log(`   • ${device.name} (${device.wattage}W)`);
                    }
                }
            }
        }

    }, 5000);
}

function handleEvent(room: Room, event: Event) {
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