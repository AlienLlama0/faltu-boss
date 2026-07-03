import { devices } from "../data/devices";
import { type Room } from "../data/rooms";

function roomDevices(room: Room) {
    return devices.filter(d => d.room === room);
}

function randomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]!;
}

export function personEntered(room: Room) {
    const list = roomDevices(room);
    const lights = list.filter(d => d.type === "light");
    const fans = list.filter(d => d.type === "fan");

    const chance = Math.random();

    if (chance < 0.5) {
        const light = randomItem(lights);
        light.status = true;
        light.lastChanged = new Date();

        console.log(`${room}: ${light.name} ON`);
    } else if (chance < 0.8) {
        const light = randomItem(lights);
        const fan = randomItem(fans);

        light.status = true;
        fan.status = true;

        light.lastChanged = new Date();
        fan.lastChanged = new Date();

        console.log(`${room}: ${light.name} ON`);
        console.log(`${room}: ${fan.name} ON`);
    } else {
        const fan = randomItem(fans);

        fan.status = true;
        fan.lastChanged = new Date();

        console.log(`${room}: ${fan.name} ON`);
    }
}

export function personLeft(room: Room) {
    const list = roomDevices(room);

    const chance = Math.random();

    if (chance < 0.7) {
        for (const device of list) {
            device.status = false;
            device.lastChanged = new Date();
        }

        console.log(`${room}: Everyone left. All devices OFF`);
    } else {
        for (const device of list) {
            device.status = false;
            device.lastChanged = new Date();
        }

        const forgotten = randomItem(list);

        forgotten.status = true;
        forgotten.lastChanged = new Date();

        console.log(`${room}: Forgot ${forgotten.name}`);
    }
}

export function idle(room: Room) {
    const chance = Math.random();

    if (chance < 0.8) {
        console.log(`${room}: Nothing happened`);
        return;
    }

    const list = roomDevices(room);
    const device = randomItem(list);

    device.status = !device.status;
    device.lastChanged = new Date();

    console.log(
        `${room}: ${device.name} ${device.status ? "ON" : "OFF"}`
    );
}