import { SearchBar } from "@/components/dashboard/SearchBar";
import { UnitStats } from "@/components/dashboard/UnitStats";
import { MonthlyFocus } from "@/components/dashboard/MonthlyFocus";
import { PriorityTasks } from "@/components/dashboard/PriorityTasks";
import { Calendar } from "@/components/dashboard/Calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/dashboard/Header";

const Index = () => {
  return (
    <div className="flex h-screen bg-warm-gray-50">
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-8 space-y-6">
          <Alert className="bg-alert-bg border-0 rounded-lg">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-warm-gray-500" />
                <div>
                  <AlertTitle className="text-warm-gray-600 font-medium">Flu season mask policy</AlertTitle>
                  <AlertDescription className="text-warm-gray-500">
                    All staff must wear masks from October 1, 2024 through March 31, 2025
                  </AlertDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4 text-warm-gray-400" />
              </Button>
            </div>
          </Alert>

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-warm-gray-600">Unit</h1>
            <SearchBar />
          </div>

          <div className="grid gap-6">
            <UnitStats />
            
            <div className="grid gap-6 grid-cols-3">
              <div className="col-span-2">
                <MonthlyFocus />
              </div>
              <Calendar />
            </div>

            <div className="grid gap-6 grid-cols-3">
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