
import { useState } from "react";
import { Search, Calendar, DollarSign, Building2, Filter, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const tenderData = [
  {
    id: 1,
    title: "IT Infrastructure Modernization Project",
    organization: "Department of Digital Services",
    deadline: "2025-06-15",
    value: "$2,500,000",
    category: "Technology",
    status: "Open",
    description: "Complete overhaul of legacy systems and cloud migration for improved efficiency and security.",
    location: "Washington, DC"
  },
  {
    id: 2,
    title: "Highway Maintenance Services",
    organization: "State Transportation Authority",
    deadline: "2025-06-20",
    value: "$1,800,000",
    category: "Infrastructure",
    status: "Open",
    description: "Annual maintenance contract for state highway system including repairs and snow removal.",
    location: "Statewide"
  },
  {
    id: 3,
    title: "Medical Equipment Supply Contract",
    organization: "Regional Health Network",
    deadline: "2025-06-10",
    value: "$3,200,000",
    category: "Healthcare",
    status: "Closing Soon",
    description: "Supply of medical equipment and devices for multiple hospital locations.",
    location: "Regional"
  },
  {
    id: 4,
    title: "Educational Software Platform",
    organization: "City School District",
    deadline: "2025-07-01",
    value: "$950,000",
    category: "Education",
    status: "Open",
    description: "Development and deployment of comprehensive learning management system.",
    location: "Metro Area"
  },
  {
    id: 5,
    title: "Renewable Energy Installation",
    organization: "Municipal Energy Department",
    deadline: "2025-06-25",
    value: "$4,100,000",
    category: "Energy",
    status: "Open",
    description: "Solar panel installation across municipal buildings with maintenance contract.",
    location: "City-wide"
  },
  {
    id: 6,
    title: "Security Services Contract",
    organization: "Federal Building Authority",
    deadline: "2025-06-08",
    value: "$1,200,000",
    category: "Security",
    status: "Closing Soon",
    description: "Comprehensive security services for federal facilities including personnel and systems.",
    location: "Multiple Sites"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredTenders = tenderData.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tender.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || tender.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 border-green-200";
      case "Closing Soon":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const categories = ["all", "Technology", "Infrastructure", "Healthcare", "Education", "Energy", "Security"];
  const statuses = ["all", "Open", "Closing Soon"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">TenderPortal</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Browse Tenders</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">My Applications</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Help</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Business Opportunities</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access thousands of tender opportunities from government agencies and organizations. 
            Find the perfect contracts for your business.
          </p>
          <div className="flex justify-center text-sm text-blue-100 space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{tenderData.filter(t => t.status === "Open").length} Open Tenders</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>{tenderData.filter(t => t.status === "Closing Soon").length} Closing Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search tenders or organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === "all" ? "All Status" : status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tenders Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Available Tenders ({filteredTenders.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenders.map((tender) => (
            <Card key={tender.id} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getStatusColor(tender.status)}>
                    {tender.status}
                  </Badge>
                  <Badge variant="outline">{tender.category}</Badge>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 leading-tight">
                  {tender.title}
                </h4>
                <p className="text-sm text-gray-600 font-medium">{tender.organization}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {tender.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{tender.value}</span>
                    </div>
                    <span className="text-gray-500">{tender.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-red-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Deadline: {new Date(tender.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTenders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tenders found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
