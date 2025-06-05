
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FiltersSection } from "@/components/FiltersSection";
import { TenderGrid } from "@/components/TenderGrid";
import { fetchTenders, fetchCategories } from "@/hooks/use-tender-data";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const { data: tenderData = [], isLoading: tendersLoading, error } = useQuery({
    queryKey: ['tenders'],
    queryFn: fetchTenders,
  });

  const { data: categoriesData = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Handle URL category parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoriesData.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, categoriesData]);

  const isLoading = tendersLoading || categoriesLoading;

  const filteredTenders = tenderData.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tender.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || tender.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Build categories list from fetched data
  const actualCategories = ["all", ...categoriesData];
  const actualStatuses = ["all", ...new Set(tenderData.map(tender => tender.status))];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection tenderData={tenderData} isLoading={isLoading} />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
      
      <FiltersSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        actualCategories={actualCategories}
        actualStatuses={actualStatuses}
        isLoading={isLoading}
      />
      <TenderGrid
        filteredTenders={filteredTenders}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Index;
