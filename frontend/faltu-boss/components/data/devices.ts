
export interface Device {
  id: number;
  room: string
  name: string;
  type: "light" | "fan";
  status: boolean;
  power: number;
  lastChanged:string;
}


export const devices: Device[]= [
  // Drawing Room

  {
    id: 1,
    room: "Drawing Room",
    name: "Fan 1",
    type: "fan",
    status: true,
    power: 60,
    lastChanged: "10:20 AM",
  },

  {
    id: 2,
    room: "Drawing Room",
    name: "Fan 2",
    type: "fan",
    status: false,
    power: 0,
    lastChanged: "10:05 AM",
  },

  {
    id: 3,
    room: "Drawing Room",
    name: "Light 1",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:18 AM",
  },

  {
    id: 4,
    room: "Drawing Room",
    name: "Light 2",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:00 AM",
  },

  {
    id: 5,
    room: "Drawing Room",
    name: "Light 3",
    type: "light",
    status: false,
    power: 0,
    lastChanged: "09:55 AM",
  },

  // Work Room 1

  {
    id: 6,
    room: "Work Room 1",
    name: "Fan 1",
    type: "fan",
    status: true,
    power: 60,
    lastChanged: "10:15 AM",
  },

  {
    id: 7,
    room: "Work Room 1",
    name: "Fan 2",
    type: "fan",
    status: true,
    power: 60,
    lastChanged: "10:12 AM",
  },

  {
    id: 8,
    room: "Work Room 1",
    name: "Light 1",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:14 AM",
  },

  {
    id: 9,
    room: "Work Room 1",
    name: "Light 2",
    type: "light",
    status: false,
    power: 0,
    lastChanged: "09:40 AM",
  },

  {
    id: 10,
    room: "Work Room 1",
    name: "Light 3",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:10 AM",
  },

  // Work Room 2

  {
    id: 11,
    room: "Work Room 2",
    name: "Fan 1",
    type: "fan",
    status: false,
    power: 0,
    lastChanged: "09:55 AM",
  },

  {
    id: 12,
    room: "Work Room 2",
    name: "Fan 2",
    type: "fan",
    status: true,
    power: 60,
    lastChanged: "10:21 AM",
  },

  {
    id: 13,
    room: "Work Room 2",
    name: "Light 1",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:22 AM",
  },

  {
    id: 14,
    room: "Work Room 2",
    name: "Light 2",
    type: "light",
    status: true,
    power: 15,
    lastChanged: "10:23 AM",
  },

  {
    id: 15,
    room: "Work Room 2",
    name: "Light 3",
    type: "light",
    status: false,
    power: 0,
    lastChanged: "09:30 AM",
  },
];