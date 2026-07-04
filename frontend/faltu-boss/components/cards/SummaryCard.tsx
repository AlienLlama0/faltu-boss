import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export default function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
}: SummaryCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer">

      <CardContent className="p-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-zinc-400 text-sm">

              {title}

            </p>

            <h2 className="text-3xl font-bold text-white mt-2">

              {value}

            </h2>

          </div>

          <div
            className={`rounded-full p-4 ${color}`}
          >

            <Icon className="text-white" size={28} />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}