
export interface TenderDetails {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: string;
  complexityLevel: string;
  documents: { name: string; url: string }[];
  requirements: { id: number; question: string; type: 'text' | 'dropdown'; options?: string[] }[];
}

export interface BidData {
  id?: number;
  generalDescription: string;
  questionnaire: { [key: number]: string };
  lineItems: { id: string; name: string; quantity: number; unitPrice: number }[];
  attachments: File[];
  status: 'draft' | 'submitted';
}
