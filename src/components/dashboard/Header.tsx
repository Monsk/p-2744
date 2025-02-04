import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 border-b border-warm-gray-200 bg-white flex items-center px-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-warm-gray-600">Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-warm-gray-50 to-warm-gray-100 p-6 no-underline outline-none focus:shadow-md"
                      to="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-warm-gray-600">
                        Dashboard Overview
                      </div>
                      <p className="text-sm leading-tight text-warm-gray-500">
                        Get a quick overview of your unit's performance and key metrics
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-warm-gray-600">Analytics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-warm-gray-50 to-warm-gray-100 p-6 no-underline outline-none focus:shadow-md"
                      to="/analytics"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-warm-gray-600">
                        Performance Analytics
                      </div>
                      <p className="text-sm leading-tight text-warm-gray-500">
                        Detailed insights and statistics about your unit's operations
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-warm-gray-600">Reports</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-warm-gray-50 to-warm-gray-100 p-6 no-underline outline-none focus:shadow-md"
                      to="/reports"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-warm-gray-600">
                        Unit Reports
                      </div>
                      <p className="text-sm leading-tight text-warm-gray-500">
                        Generate and view detailed reports about your unit
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;