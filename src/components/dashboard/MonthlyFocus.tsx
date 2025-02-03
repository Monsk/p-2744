import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

export function MonthlyFocus() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-lg font-medium">Monthly unit focus</CardTitle>
          <p className="text-sm text-muted-foreground">Fall prevention</p>
        </div>
        <Target className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Current fall rate</h4>
            <p className="text-2xl font-bold">
              1.3 falls{" "}
              <span className="text-sm text-muted-foreground">
                / 1000 patient days
              </span>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Minimizing the risks associated with falls enhances patient outcomes by x%.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}