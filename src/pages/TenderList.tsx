
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FiltersSection } from "@/components/FiltersSection";
import { TenderGrid } from "@/components/TenderGrid";

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
  const response = await fetch('https://coop-tenders.powerappsportals.com/gettenders');
  if (!response.ok) {
    throw new Error('Failed to fetch tenders');
  }
  return response.json();
};

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

  // Get unique categories and statuses from actual data
  const actualCategories = ["all", ...new Set(tenderData.map(tender => tender.category))];
  const actualStatuses = ["all", ...new Set(tenderData.map(tender => tender.status))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
