
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BidData } from "@/types/tender";
import { fetchBidData, submitBid } from "@/utils/tenderApi";
import { DEBUG_MODE } from "@/config/debug";

export const useBidManagement = (tenderId: string) => {
  const [bidData, setBidData] = useState<BidData>({
    generalDescription: '',
    questionnaire: {},
    lineItems: [],
    attachments: [],
    status: 'draft'
  });

  const { data: existingBid, isLoading: bidLoading } = useQuery({
    queryKey: ['bid', tenderId],
    queryFn: () => fetchBidData(tenderId),
    enabled: !!tenderId
  });

  // Update bidData when existing bid is loaded
  useEffect(() => {
    if (existingBid) {
      setBidData(existingBid);
    }
  }, [existingBid]);

  const handleBidUpdate = (updatedBid: Partial<BidData>) => {
    setBidData(prev => ({ ...prev, ...updatedBid }));
  };

  const handleSubmitBid = async () => {
    await submitBid(bidData, tenderId);
    setBidData(prev => ({ ...prev, status: 'submitted' }));
  };

  return {
    bidData,
    bidLoading,
    handleBidUpdate,
    handleSubmitBid
  };
};
