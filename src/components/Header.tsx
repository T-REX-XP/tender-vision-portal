
import { Building2, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">TenderPortal</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="index.html" className="text-gray-500 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600">
              Browse Tenders
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 font-medium">
              My Applications
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 font-medium">
              Help
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
