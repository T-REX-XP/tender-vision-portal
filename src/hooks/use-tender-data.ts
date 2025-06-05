import { useQuery } from "@tanstack/react-query";
import ITender from "@/types/ITender";
import { DEBUG_MODE, mockTenders, mockCategories } from "@/config/debug";

export const fetchTenders = async (): Promise<ITender[]> => {
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

export const fetchCategories = async (): Promise<string[]> => {
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

// Optional: Custom hooks wrapping useQuery, if preferred for cleaner component code
export const useTendersQuery = () => {
  return useQuery({
    queryKey: ['tenders'],
    queryFn: fetchTenders,
  });
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
