"use client";

import { type Device } from "@/components/data/devices";           // ← এটা ঠিক করা হয়েছে
import { Lightbulb, Fan} from "lucide-react";

interface RoomCardProps {
  roomName: string;
  devices: Device[];
}

export default function RoomCard({ roomName, devices }: RoomCardProps) {
  const roomDevices = devices.filter((d) => d.room === roomName);
  const onCount = roomDevices.filter((d) => d.status).length;

  const getIcon = (type: string) => {
    if (type === "fan") return Fan;

    return Lightbulb;
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{roomName}</h3>
        <div className="text-sm text-zinc-400">
          {onCount}/{roomDevices.length} ON
        </div>
      </div>

      <div className="space-y-3">
        {roomDevices.map((device) => {
          const Icon = getIcon(device.type);
          return (
            <div
              key={device.id}
              className="flex items-center justify-between bg-zinc-950 rounded-xl p-4 border border-zinc-800"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${device.status ? "bg-green-500/20" : "bg-zinc-800"}`}>
                  <Icon size={20} className={device.status ? "text-green-400" : "text-zinc-500"} />
                </div>
                <div>
                  <p className="text-white font-medium">{device.name}</p>
                  <p className="text-xs text-zinc-500">{device.power}W • {device.lastChanged}</p>
                </div>
              </div>

              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  device.status ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {device.status ? "ON" : "OFF"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}