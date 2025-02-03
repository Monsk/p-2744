import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap } from "lucide-react";

export function MonthlyFocus() {
  return (
    <div className="bg-white p-6 rounded-xl space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-warm-gray-600">Monthly unit focus</h2>
          <p className="text-warm-gray-500">Fall prevention</p>
        </div>
        <div className="p-3 bg-warm-gray-100 rounded-lg">
          <Target className="h-6 w-6 text-warm-gray-500" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-warm-gray-500">Current fall rate</h4>
          <p className="text-2xl font-bold text-warm-gray-600">
            1.3 falls{" "}
            <span className="text-sm font-normal text-warm-gray-400">
              / 1000 patient days
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-warm-gray-500 text-sm">
          <Zap className="h-4 w-4" />
          <p>
            Minimizing the risks associated with falls enhances patient outcomes by x%.
          </p>
        </div>
      </div>
    </div>
  );
}