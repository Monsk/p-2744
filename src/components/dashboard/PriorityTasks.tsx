import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

interface Task {
  priority: "HIGH" | "MEDIUM";
  title: string;
  description: string;
  action?: string;
}

const tasks: Task[] = [
  {
    priority: "HIGH",
    title: "Review staff schedule",
    description: "Address 2 open shifts for tomorrow night",
    action: "Fill 2 RN shifts"
  },
  {
    priority: "HIGH",
    title: "Daily huddle",
    description: "Review unit metrics and staff updates",
    action: "View agenda"
  },
  {
    priority: "MEDIUM",
    title: "Patient rounding",
    description: "3 patients flagged for follow up today"
  }
];

export function PriorityTasks() {
  return (
    <div className="bg-white p-6 rounded-xl space-y-4">
      <h2 className="text-lg font-semibold text-warm-gray-600">Priorities</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border border-warm-gray-200 rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <Badge 
                variant={task.priority === "HIGH" ? "destructive" : "secondary"}
                className={task.priority === "HIGH" 
                  ? "bg-red-50 text-red-600 hover:bg-red-50" 
                  : "bg-warm-gray-100 text-warm-gray-600 hover:bg-warm-gray-100"}
              >
                {task.priority}
              </Badge>
              <ChevronRight className="h-4 w-4 text-warm-gray-400" />
            </div>
            <h3 className="font-medium text-warm-gray-600">{task.title}</h3>
            <p className="text-sm text-warm-gray-500">{task.description}</p>
            {task.action && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2 text-accent-orange border-accent-orange hover:bg-orange-50"
              >
                {task.action}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}