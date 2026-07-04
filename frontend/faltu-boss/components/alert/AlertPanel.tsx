"use client";

import { TriangleAlert, Clock } from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "High Power Usage",
    room: "Work Room 1",
    message: "AC 1 is consuming more than 1.2kW",
    time: "2 min ago",
    severity: "high",
  },
  {
    id: 2,
    title: "Device Offline",
    room: "Drawing Room",
    message: "Fan 2 is not responding",
    time: "15 min ago",
    severity: "medium",
  },
];

export default function AlertPanel() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <TriangleAlert className="text-red-400" size={24} />
          Active Alerts
        </h2>
        <span className="text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
          {alerts.length} Issues
        </span>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-zinc-700 bg-zinc-950 rounded-xl p-5 hover:border-red-500/50 transition-colors"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-white">{alert.title}</p>
                <p className="text-sm text-zinc-400 mt-1">{alert.room}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-zinc-500">
                  <Clock size={14} />
                  {alert.time}
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm text-zinc-300">{alert.message}</p>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition">
                Resolve
              </button>
              <button className="px-4 py-2 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-sm rounded-lg transition">
                Ignore
              </button>
            </div>
          </div>
        ))}
      </div>

      {alerts.length === 0 && (
        <p className="text-center text-zinc-500 py-8">No active alerts 🎉</p>
      )}
    </div>
  );
}