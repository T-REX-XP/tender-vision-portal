
import { useState } from "react";
import { Search, Calendar, DollarSign, Building2, Filter, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

interface Tender {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  value: string;
  category: string;
  status: string;
  description: string;
  location: string;
}

const fetchTenders = async (): Promise<Tender[]> => {
  const response = await fetch('/gettenders');
  if (!response.ok) {
    throw new Error('Failed to fetch tenders');
  }
  return response.json();
};

const TenderCardSkeleton = () => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start mb-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
      </div>
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </CardHeader>
    <CardContent className="pt-0">
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </CardContent>
  </Card>
);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const { data: tenderData = [], isLoading, error } = useQuery({
    queryKey: ['tenders'],
    queryFn: fetchTenders,
  });

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

  // Get unique categories from actual data
  const actualCategories = ["all", ...new Set(tenderData.map(tender => tender.category))];
  const actualStatuses = ["all", ...new Set(tenderData.map(tender => tender.status))];

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
              <span>
                {isLoading ? (
                  <Skeleton className="h-4 w-16 bg-blue-400" />
                ) : (
                  `${tenderData.filter(t => t.status === "Open").length} Open Tenders`
                )}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>
                {isLoading ? (
                  <Skeleton className="h-4 w-20 bg-blue-400" />
                ) : (
                  `${tenderData.filter(t => t.status === "Closing Soon").length} Closing Soon`
                )}
              </span>
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
                disabled={isLoading}
              />
            </div>
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory} disabled={isLoading}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {actualCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus} disabled={isLoading}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {actualStatuses.map(status => (
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
            {isLoading ? (
              <Skeleton className="h-8 w-64" />
            ) : (
              `Available Tenders (${filteredTenders.length})`
            )}
          </h3>
        </div>

        {error && (
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">
              <Building2 className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading tenders</h3>
            <p className="text-gray-600">Please try again later</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Show 6 skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <TenderCardSkeleton key={index} />
            ))
          ) : (
            filteredTenders.map((tender) => (
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
            ))
          )}
        </div>

        {!isLoading && !error && filteredTenders.length === 0 && (
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
