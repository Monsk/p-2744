import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center gap-4 w-full max-w-md">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search patients, tasks, staff..."
          className="pl-10 pr-4 py-2 w-full bg-white border-warm-gray-200 text-warm-gray-500 placeholder:text-warm-gray-400"
        />
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray-400" />
      </div>
    </div>
  );
}