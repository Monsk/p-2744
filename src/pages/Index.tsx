import { Sidebar } from "@/components/dashboard/Sidebar";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { UnitStats } from "@/components/dashboard/UnitStats";
import { MonthlyFocus } from "@/components/dashboard/MonthlyFocus";
import { PriorityTasks } from "@/components/dashboard/PriorityTasks";
import { Calendar } from "@/components/dashboard/Calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Flu season mask policy</AlertTitle>
            <AlertDescription>
              All staff must wear masks from October 1, 2024 through March 31, 2025
            </AlertDescription>
          </Alert>

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Unit Dashboard</h1>
            <SearchBar />
          </div>

          <div className="grid gap-8">
            <UnitStats />
            
            <div className="grid gap-8 grid-cols-3">
              <MonthlyFocus />
              <Calendar />
            </div>

            <div className="grid gap-8 grid-cols-3">
              <div className="col-span-2">
                <PriorityTasks />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;