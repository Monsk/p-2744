import { Card, CardContent } from "@/components/ui/card";
import { Users, UserCheck, ClipboardList } from "lucide-react";

export function UnitStats() {
  return (
    <div className="grid gap-6 grid-cols-3">
      <div className="flex items-center gap-4 bg-white p-6 rounded-xl">
        <div className="p-3 bg-warm-gray-100 rounded-lg">
          <Users className="h-6 w-6 text-warm-gray-500" />
        </div>
        <div>
          <div className="text-stat font-semibold text-warm-gray-600">32</div>
          <p className="text-sm text-warm-gray-500">patients</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-white p-6 rounded-xl">
        <div className="p-3 bg-warm-gray-100 rounded-lg">
          <UserCheck className="h-6 w-6 text-warm-gray-500" />
        </div>
        <div>
          <div className="text-stat font-semibold text-warm-gray-600">12</div>
          <p className="text-sm text-warm-gray-500">on duty staff</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-white p-6 rounded-xl">
        <div className="p-3 bg-warm-gray-100 rounded-lg">
          <ClipboardList className="h-6 w-6 text-warm-gray-500" />
        </div>
        <div>
          <div className="text-stat font-semibold text-warm-gray-600">8</div>
          <p className="text-sm text-warm-gray-500">pending tasks</p>
        </div>
      </div>
    </div>
  );
}