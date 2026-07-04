"use client";

import { useState } from "react";

const rooms = [
  { id: 1, name: "Drawing Room", x: 15, y: 20, status: "good" },
  { id: 2, name: "Work Room 1", x: 65, y: 35, status: "good" },
  { id: 3, name: "Work Room 2", x: 65, y: 65, status: "warning" },
  { id: 4, name: "Meeting Room", x: 20, y: 70, status: "good" },
];

export default function OfficeMap() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Office Layout</h2>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-zinc-400">Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-zinc-400">Warning</span>
          </div>
        </div>
      </div>

      <div className="relative bg-zinc-950 border border-zinc-700 rounded-xl h-[420px] overflow-hidden">
        {/* Floor Plan Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Rooms */}
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`absolute w-28 h-20 border-2 rounded-xl flex items-center justify-center text-center cursor-pointer transition-all hover:scale-105 ${
              room.status === "good"
                ? "border-green-500 bg-green-500/10"
                : "border-yellow-500 bg-yellow-500/10"
            }`}
            style={{
              left: `${room.x}%`,
              top: `${room.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setSelectedRoom(room.name)}
          >
            <div>
              <p className="text-white text-sm font-medium">{room.name}</p>
              <p className="text-xs text-zinc-400 mt-1">
                {room.status === "good" ? "✅ All Good" : "⚠️ Check Power"}
              </p>
            </div>
          </div>
        ))}

        {/* Legend / Info */}
        {selectedRoom && (
          <div className="absolute bottom-4 right-4 bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-xl">
            <p className="text-white font-medium">Selected: {selectedRoom}</p>
            <p className="text-sm text-zinc-400 mt-1">Click on any room to select</p>
          </div>
        )}
      </div>
    </div>
  );
}