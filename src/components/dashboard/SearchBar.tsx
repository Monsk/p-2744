import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center gap-4 w-full max-w-2xl">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search patients, tasks, staff..."
          className="pl-4 pr-10 py-2 w-full"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}