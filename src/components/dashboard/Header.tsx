import { Link } from "react-router-dom";
import { LayoutDashboard, Users, UserRound, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 border-b border-warm-gray-200 bg-white flex items-center justify-between px-8">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-accent-orange text-2xl font-bold">
          a
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-warm-gray-600 hover:text-warm-gray-900"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          
          <Link 
            to="/patients" 
            className="flex items-center gap-2 text-warm-gray-600 hover:text-warm-gray-900"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Patients</span>
          </Link>
          
          <Link 
            to="/staff" 
            className="flex items-center gap-2 text-warm-gray-600 hover:text-warm-gray-900"
          >
            <UserRound className="w-5 h-5" />
            <span className="text-sm font-medium">Staff</span>
          </Link>
          
          <Link 
            to="/calendar" 
            className="flex items-center gap-2 text-warm-gray-600 hover:text-warm-gray-900"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Calendar</span>
          </Link>
        </nav>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search patients, tasks, staff..."
          className="w-64 px-4 py-2 text-sm bg-warm-gray-50 border border-warm-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-warm-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;