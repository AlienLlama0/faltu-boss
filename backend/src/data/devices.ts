export interface device {
  id: number;
  room: "drawing-room-1" | "working-room-1" | "working-room-2";
  name: string;
  type: "light" | "fan";
  status: boolean;
  wattage: number;
  lastChanged: Date;
}

export const devices: device[] = [
  {
    id: 1,
    room: "drawing-room-1",
    name: "Fan 1",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 2,
    room: "drawing-room-1",
    name: "Fan 2",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 3,
    room: "drawing-room-1",
    name: "Light 1",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 4,
    room: "drawing-room-1",
    name: "Light 2",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 5,
    room: "drawing-room-1",
    name: "Light 3",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },

  {
    id: 6,
    room: "working-room-1",
    name: "Fan 1",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 7,
    room: "working-room-1",
    name: "Fan 2",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 8,
    room: "working-room-1",
    name: "Light 1",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 9,
    room: "working-room-1",
    name: "Light 2",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 10,
    room: "working-room-1",
    name: "Light 3",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },

  {
    id: 11,
    room: "working-room-2",
    name: "Fan 1",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 12,
    room: "working-room-2",
    name: "Fan 2",
    type: "fan",
    status: false,
    wattage: 60,
    lastChanged: new Date()
  },
  {
    id: 13,
    room: "working-room-2",
    name: "Light 1",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 14,
    room: "working-room-2",
    name: "Light 2",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
  {
    id: 15,
    room: "working-room-2",
    name: "Light 3",
    type: "light",
    status: false,
    wattage: 15,
    lastChanged: new Date()
  },
]