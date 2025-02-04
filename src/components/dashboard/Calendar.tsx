import { Card, CardContent } from "@/components/ui/card";
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
    <div className="bg-white p-6 rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-warm-gray-600">Today</h2>
          <p className="text-sm text-warm-gray-500">March 23, 2025</p>
        </div>
        <Button variant="outline" size="icon" className="border-warm-gray-200">
          <ChevronDown className="h-4 w-4 text-warm-gray-400" />
        </Button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-16 text-sm text-warm-gray-400">
              {event.time}
            </div>
            <div className="flex-1 rounded-lg bg-warm-gray-100 p-2">
              <h4 className="font-medium text-warm-gray-600">{event.title}</h4>
              <p className="text-sm text-warm-gray-500">{event.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}