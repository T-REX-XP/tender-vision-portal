
import { DEBUG_MODE, mockTenderDetails } from "@/config/debug";
import { TenderDetails, BidData } from "@/types/tender";

export const fetchTenderDetails = async (id: string): Promise<TenderDetails> => {
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

export const fetchBidData = async (tenderId: string): Promise<BidData | null> => {
  // Return null for mock data (no existing bids in debug mode)
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - no existing bid data");
    return Promise.resolve(null);
  }
  
  const response = await fetch(`/api/bids/tender/${tenderId}`);
  if (response.status === 404) {
    return null; // No existing bid
  }
  if (!response.ok) {
    throw new Error('Failed to fetch bid data');
  }
  return response.json();
};

export const submitBid = async (bidData: BidData, tenderId: string): Promise<void> => {
  if (DEBUG_MODE) {
    console.log("Debug mode - simulating bid submission");
    return Promise.resolve();
  }
  
  const response = await fetch(`/api/bids`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...bidData, tenderId, status: 'submitted' })
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit bid');
  }
};
