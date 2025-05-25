
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenderDetails from './pages/TenderDetails.tsx'
import './index.css'

const queryClient = new QueryClient();

// Extract ID from current URL path for standalone tender details page
const StandaloneTenderDetails = () => {
  const pathSegments = window.location.pathname.split('/');
  const id = pathSegments[pathSegments.length - 1];
  
  // Pass the ID as a prop or set it in a way the component can access
  return <TenderDetails />;
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/tenders/:id" element={<TenderDetails />} />
        <Route path="*" element={<TenderDetails />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
