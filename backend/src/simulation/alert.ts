import { devices } from "../data/devices";
import { getSimulatedTime, isOfficeHour } from "../simulation/simulationClock";

export interface Alert {
    type: "after-hours";
    room: string;
    message: string;
    devices: {
        name: string;
        wattage: number;
    }[];
    time: Date;
}

export function checkAfterHours(): Alert[] {
    if (isOfficeHour()) return [];

    const alerts: Alert[] = [];

    const roomMap = new Map<string, typeof devices>();

    for (const device of devices) {
        if (!device.status) continue;

        if (!roomMap.has(device.room)) {
            roomMap.set(device.room, []);
        }

        roomMap.get(device.room)!.push(device);
    }

    for (const [room, activeDevices] of roomMap) {
        alerts.push({
            type: "after-hours",
            room,
            message: `${room} still has ${activeDevices.length} device(s) ON after office hours.`,
            devices: activeDevices.map(d => ({
                name: d.name,
                wattage: d.wattage,
            })),
            time: new Date(getSimulatedTime()),
        });
    }

    return alerts;
}