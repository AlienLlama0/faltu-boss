import { devices } from "../data/devices";

export function calculatePower() {
    const usage = {
        "drawing-room-1": 0,
        "working-room-1": 0,
        "working-room-2": 0,
    };

    let total = 0;

    for (const device of devices) {
        if (!device.status) continue;

        usage[device.room] += device.wattage;
        total += device.wattage;
    }

    return {
        total,
        rooms: usage,
    };
}