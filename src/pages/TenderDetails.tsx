
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { TenderDetailsSection } from "@/components/TenderDetailsSection";
import { BidSubmissionForm } from "@/components/BidSubmissionForm";
import { CommunicationArea } from "@/components/CommunicationArea";
import { SubmissionActions } from "@/components/SubmissionActions";

interface TenderDetails {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: string;
  complexityLevel: string;
  documents: { name: string; url: string }[];
  requirements: { id: number; question: string; type: 'text' | 'dropdown'; options?: string[] }[];
}

interface BidData {
  id?: number;
  generalDescription: string;
  questionnaire: { [key: number]: string };
  lineItems: { id: string; name: string; quantity: number; unitPrice: number }[];
  attachments: File[];
  status: 'draft' | 'submitted';
}

const fetchTenderDetails = async (id: string): Promise<TenderDetails> => {
  const response = await fetch(`/api/tenders/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tender details');
  }
  return response.json();
};

const fetchBidData = async (tenderId: string): Promise<BidData | null> => {
  const response = await fetch(`/api/bids/tender/${tenderId}`);
  if (response.status === 404) {
    return null; // No existing bid
  }
  if (!response.ok) {
    throw new Error('Failed to fetch bid data');
  }
  return response.json();
};

const TenderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [bidData, setBidData] = useState<BidData>({
    generalDescription: '',
    questionnaire: {},
    lineItems: [],
    attachments: [],
    status: 'draft'
  });

  const { data: tenderDetails, isLoading: tenderLoading } = useQuery({
    queryKey: ['tender', id],
    queryFn: () => fetchTenderDetails(id!),
    enabled: !!id
  });

  const { data: existingBid, isLoading: bidLoading } = useQuery({
    queryKey: ['bid', id],
    queryFn: () => fetchBidData(id!),
    enabled: !!id
  });

  // Update bidData when existing bid is loaded
  useEffect(() => {
    if (existingBid) {
      setBidData(existingBid);
    }
  }, [existingBid]);

  const isEditable = bidData.status === 'draft' && 
    tenderDetails && 
    new Date(tenderDetails.deadline) > new Date();

  const handleBidUpdate = (updatedBid: Partial<BidData>) => {
    setBidData(prev => ({ ...prev, ...updatedBid }));
  };

  const handleSubmitBid = async () => {
    const response = await fetch(`/api/bids`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...bidData, tenderId: id, status: 'submitted' })
    });
    
    if (response.ok) {
      setBidData(prev => ({ ...prev, status: 'submitted' }));
    }
  };

  if (tenderLoading || bidLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">Loading tender details...</div>
        </div>
      </div>
    );
  }

  if (!tenderDetails) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-red-600">Tender not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <TenderDetailsSection tender={tenderDetails} />
        
        <BidSubmissionForm
          tender={tenderDetails}
          bidData={bidData}
          isEditable={isEditable}
          onUpdate={handleBidUpdate}
        />
        
        <CommunicationArea tenderId={id!} />
        
        <SubmissionActions
          isEditable={isEditable}
          onSubmit={handleSubmitBid}
          bidStatus={bidData.status}
        />
      </div>
    </div>
  );
};

export default TenderDetails;
