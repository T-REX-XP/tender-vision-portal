
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { FiltersSection } from "@/components/FiltersSection";
import { TenderGrid } from "@/components/TenderGrid";
import { DEBUG_MODE, mockTenders, mockCategories } from "@/config/debug";
import ITender from "@/types/itender";

const fetchTenders = async (): Promise<ITender[]> => {
  // Return mock data if in debug mode
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock tender data");
    return Promise.resolve(mockTenders);
  }
  
  const response = await fetch('/gettenders');
  if (!response.ok) {
    throw new Error('Failed to fetch tenders');
  }
  return response.json();
};

const fetchCategories = async (): Promise<string[]> => {
  // Return mock data if in debug mode
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock categories data");
    return Promise.resolve(mockCategories);
  }
  
  const response = await fetch('/getcategories');
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

const Index = () => {
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
