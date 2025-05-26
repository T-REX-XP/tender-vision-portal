
import { Building2, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-blue-800 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-white" />
            <h1 className="text-xl font-bold text-white">TenderPortal</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="index.html" className="text-blue-100 hover:text-white font-medium">
              Home
            </a>
            <a href="#" className="text-white font-medium border-b-2 border-white">
              Browse Tenders
            </a>
            <a href="#" className="text-blue-100 hover:text-white font-medium">
              My Applications
            </a>
            <a href="#" className="text-blue-100 hover:text-white font-medium">
              Help
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
