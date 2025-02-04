import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, User } from "lucide-react";

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
    <Card>
      <CardHeader>
        <CardTitle>Priorities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <Badge variant={task.priority === "HIGH" ? "destructive" : "secondary"}>
                {task.priority}
              </Badge>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-muted-foreground">{task.description}</p>
            {task.action && (
              <Button variant="outline" size="sm" className="w-full mt-2">
                {task.action}
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}