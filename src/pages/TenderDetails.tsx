
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TenderDetailsSection } from "@/components/TenderDetailsSection";
import { BidSubmissionForm } from "@/components/BidSubmissionForm";
import { CommunicationArea } from "@/components/CommunicationArea";
import { SubmissionActions } from "@/components/SubmissionActions";
import { TenderDetailsPlaceholder } from "@/components/TenderDetailsPlaceholder";
import { TenderNotFound } from "@/components/TenderNotFound";
import { fetchTenderDetails } from "@/utils/tenderApi";
import { useBidManagement } from "@/hooks/useBidManagement";

const TenderDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  const { data: tenderDetails, isLoading: tenderLoading, error: tenderError } = useQuery({
    queryKey: ['tender', id],
    queryFn: () => fetchTenderDetails(id!),
    enabled: !!id,
    retry: false
  });

  const { bidData, bidLoading, handleBidUpdate, handleSubmitBid } = useBidManagement(id!);

  const isEditable = bidData.status === 'draft' && 
    tenderDetails && 
    new Date(tenderDetails.deadline) > new Date();

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
