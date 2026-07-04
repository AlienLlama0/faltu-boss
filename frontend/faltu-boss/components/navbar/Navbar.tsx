"use client";

import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">

      <div>

        <h2 className="text-xl font-semibold text-white">

          Office Monitoring Dashboard

        </h2>

      </div>

      <div className="flex items-center gap-5">

        <Bell
          className="text-zinc-300 cursor-pointer"
          size={22}
        />

        <UserCircle
          className="text-zinc-300 cursor-pointer"
          size={30}
        />

      </div>

    </header>
  );
}