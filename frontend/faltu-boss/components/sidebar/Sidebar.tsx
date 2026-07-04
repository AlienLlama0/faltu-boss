"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  Zap,
  TriangleAlert,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Rooms",
    href: "/rooms",
    icon: Building2,
  },
  {
    title: "Power",
    href: "/power",
    icon: Zap,
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: TriangleAlert,
  },
  {
    title: "Settings",
    href: "#",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 min-h-screen">

      <div className="p-6">

        <h1 className="text-2xl font-bold text-white">

          ⚡ Office Monitor

        </h1>

      </div>

      <nav className="px-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );
        })}

      </nav>

    </aside>
  );
}