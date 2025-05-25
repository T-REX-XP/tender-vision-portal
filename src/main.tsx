
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Landing from './pages/Landing.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {/* <BrowserRouter> */}
      {/* <Landing /> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tenders" element={<TenderList />} />
          <Route path="/tenders/:id" element={<TenderDetails />} />
        </Routes>
      </BrowserRouter>
    {/* </BrowserRouter> */}
  </QueryClientProvider>
);
