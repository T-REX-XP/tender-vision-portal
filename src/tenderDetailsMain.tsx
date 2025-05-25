
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import TenderDetails from './pages/TenderDetails.tsx'
import './index.css'

const queryClient = new QueryClient();

// Component to extract ID from query string and pass to TenderDetails
const StandaloneTenderDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  // If no ID is provided, show error
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Missing Tender ID</h1>
          <p className="text-gray-600">Please provide a tender ID in the URL query parameter.</p>
        </div>
      </div>
    );
  }
  
  return <TenderDetails />;
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/tender-details" element={<StandaloneTenderDetails />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
