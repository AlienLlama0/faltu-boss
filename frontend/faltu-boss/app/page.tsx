import DashboardLayout from "@/components/layout/DashboardLayout";
import SummaryCard from "@/components/cards/SummaryCard";
import RoomCard from "@/components/rooms/RoomCard";

import PowerChart from "@/components/charts/PowerChart";
import { devices } from "@/components/data/devices";
import OfficeMap from "@/components/office/OfficeMap";
import AlertPanel from "@/components/alert/AlertPanel";
import { Cpu, Lightbulb, Power, TriangleAlert } from "lucide-react";

export default function HomePage() {
  const totalDevices = devices.length;
  const devicesOn = devices.filter((d) => d.status).length;
  const totalPower = devices.reduce((sum, d) => sum + d.power, 0);
  const alerts = 2;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-4xl font-bold text-white">Welcome Boss 👋</h1>
          <p className="text-zinc-400 mt-2">Monitor every room in real time.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <SummaryCard 
            title="Total Devices" 
            value={totalDevices} 
            icon={Cpu} 
            color="bg-blue-600" 
          />
          <SummaryCard 
            title="Devices ON" 
            value={devicesOn} 
            icon={Lightbulb} 
            color="bg-green-600" 
          />
          <SummaryCard 
            title="Power Usage" 
            value={`${totalPower}W`} 
            icon={Power} 
            color="bg-yellow-500" 
          />
          <SummaryCard 
            title="Active Alerts" 
            value={alerts} 
            icon={TriangleAlert} 
            color="bg-red-600" 
          />
        </div>

        {/* Room Cards */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Room Status</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RoomCard roomName="Drawing Room" devices={devices} />
            <RoomCard roomName="Work Room 1" devices={devices} />
            <RoomCard roomName="Work Room 2" devices={devices} />
          </div>
        </div>

        {/* Power Chart */}
        <div>
          <PowerChart />
        </div>


        {/* Office Map */}
        <div>
          <OfficeMap />
        </div>


        {/* Alerts Panel */}
        <div>
          <AlertPanel />
        </div>

        
      </div>
    </DashboardLayout>
  );
}