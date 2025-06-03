import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TenderDetailsSection } from "@/components/TenderDetailsSection";
import { BidSubmissionForm } from "@/components/BidSubmissionForm";
import { CommunicationArea } from "@/components/CommunicationArea";
import { SubmissionActions } from "@/components/SubmissionActions";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { DEBUG_MODE, mockTenderDetails } from "@/config/debug";

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
  // Return mock data if in debug mode
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock tender details data");
    const mockDetail = mockTenderDetails.find(t => t.id === parseInt(id));
    if (mockDetail) {
      return Promise.resolve(mockDetail);
    }
    throw new Error(`Tender with ID ${id} not found in mock data`);
  }
  
  const response = await fetch(`/api/tenders/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Tender with ID ${id} not found`);
    }
    throw new Error('Failed to fetch tender details');
  }
  return response.json();
};

const fetchBidData = async (tenderId: string): Promise<BidData | null> => {
  // Return null for mock data (no existing bids in debug mode)
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - no existing bid data");
    return Promise.resolve(null);
  }
  
  const response = await fetch(`/getbiddetails?tenderId=${tenderId}`);
  if (response.status === 404) {
    return null; // No existing bid
  }
  if (!response.ok) {
    throw new Error('Failed to fetch bid data');
  }
  return response.json();
};

const TenderDetailsPlaceholder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-6" />
          <Skeleton className="h-6 w-32 mb-4" />
          <Skeleton className="h-4 w-48" />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-32 w-full mb-4" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};

const TenderNotFound = ({ tenderId }: { tenderId: string }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-400 text-3xl">?</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Tender Not Found</h1>
            <p className="text-gray-600 mb-6">
              The tender with ID "{tenderId}" could not be found or may have been removed.
            </p>
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="mr-4"
            >
              Go Back
            </Button>
            <Button asChild>
              <a href="/tenders">Browse All Tenders</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TenderDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  const [bidData, setBidData] = useState<BidData>({
    generalDescription: 'We are pleased to submit our comprehensive proposal for this project. Our team brings over 15 years of experience in delivering high-quality solutions that meet and exceed client expectations. We have carefully reviewed all requirements and are confident in our ability to deliver exceptional results within the specified timeframe.',
    questionnaire: {
      1: 'Our company has 15+ years of experience in this field with a proven track record of successful project delivery.',
      2: 'ISO 9001:2015 certified with additional certifications in project management and quality assurance.',
      3: 'We can complete this project within 8-12 weeks depending on final specifications and requirements.'
    },
    lineItems: [
      {
        id: '1',
        name: 'Project Management & Planning',
        quantity: 1,
        unitPrice: 15000
      },
      {
        id: '2',
        name: 'Development & Implementation',
        quantity: 120,
        unitPrice: 85
      },
      {
        id: '3',
        name: 'Testing & Quality Assurance',
        quantity: 40,
        unitPrice: 75
      },
      {
        id: '4',
        name: 'Documentation & Training',
        quantity: 1,
        unitPrice: 5000
      }
    ],
    attachments: [],
    status: 'draft'
  });

  const { data: tenderDetails, isLoading: tenderLoading, error: tenderError } = useQuery({
    queryKey: ['tender', id],
    queryFn: () => fetchTenderDetails(id!),
    enabled: !!id,
    retry: false
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
    if (DEBUG_MODE) {
      console.log("Debug mode - simulating bid submission");
      setBidData(prev => ({ ...prev, status: 'submitted' }));
      return;
    }
    
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
    return <TenderDetailsPlaceholder />;
  }

  if (tenderError || !tenderDetails) {
    return <TenderNotFound tenderId={id || 'unknown'} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
