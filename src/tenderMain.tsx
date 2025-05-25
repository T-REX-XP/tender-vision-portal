
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing.tsx'
import TenderList from './pages/TenderList.tsx'
import TenderDetails from './pages/TenderDetails.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tenders" element={<TenderList />} />
        <Route path="/tenders/:id" element={<TenderDetails />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
