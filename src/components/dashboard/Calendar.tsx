import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Event {
  time: string;
  title: string;
  duration: string;
}

const events: Event[] = [
  {
    time: "09:30",
    title: "Daily huddle",
    duration: "09:30-09:45"
  },
  {
    time: "12:00",
    title: "Patient rounds",
    duration: "12:00-14:00"
  },
  {
    time: "15:30",
    title: "Staff meeting",
    duration: "15:30-16:00"
  }
];

export function Calendar() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Today</CardTitle>
          <p className="text-sm text-muted-foreground">March 23, 2025</p>
        </div>
        <Button variant="outline" size="icon">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-16 text-sm text-muted-foreground">
                {event.time}
              </div>
              <div className="flex-1 rounded-lg bg-secondary p-2">
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}