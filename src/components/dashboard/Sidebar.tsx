import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, href, isActive }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
      isActive
        ? "bg-sidebar-accent text-sidebar-accent-foreground"
        : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
    )}
  >
    <img src={icon} alt="" className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar p-4 border-r border-sidebar-border h-screen">
      <nav className="space-y-2">
        <NavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9726ac5182564d25adb3f89a915b268b0ddc844a18f4789d62987546801b3224"
          label="Dashboard"
          href="/"
          isActive
        />
        <NavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/044aa602ddccda536545a6492b0b1e74ca204cd054139355e8d32fcc78490dbb"
          label="Patients"
          href="/patients"
        />
        <NavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/79c57a2a78823c1e957080066e9409f00bdb49005ef6d35b1af057d911a8b7b3"
          label="Staff"
          href="/staff"
        />
        <NavItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa658de443a1317a70d1aff998eba70792350b457936067049e1f9dec9e9d4b5"
          label="Calendar"
          href="/calendar"
        />
      </nav>
    </aside>
  );
}