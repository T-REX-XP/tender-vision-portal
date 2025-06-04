
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Send } from "lucide-react";
import { DEBUG_MODE } from "@/config/debug";

interface QAItem {
  id: string;
  question: string;
  answer?: string;
  createdAt: string;
  answeredAt?: string;
}

interface Clarification {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface BidCorrespondence {
  id: string;
  type: "question" | "response" | "clarification";
  from: string;
  to: string;
  subject: string;
  content: string;
  createdAt: string;
  attachments?: { name: string; url: string }[];
}

interface CommunicationAreaProps {
  tenderId: string;
}

const mockBidCorrespondence: BidCorrespondence[] = [
  {
    id: "1",
    type: "question",
    from: "Procurement Officer",
    to: "Your Company",
    subject: "Clarification Required on Technical Specifications",
    content: "We need clarification on the technical specifications mentioned in section 3.2 of your proposal. Could you please provide more details about the proposed database architecture and scalability requirements?",
    createdAt: "2024-06-01T10:30:00Z",
    attachments: [
      { name: "technical_requirements.pdf", url: "/documents/tech_req.pdf" }
    ]
  },
  {
    id: "2",
    type: "response",
    from: "Your Company",
    to: "Procurement Officer",
    subject: "Re: Clarification Required on Technical Specifications",
    content: "Thank you for your inquiry. Regarding the database architecture, we propose using a microservices-based approach with PostgreSQL as the primary database. The system will be designed to handle up to 100,000 concurrent users with horizontal scaling capabilities through containerization using Docker and Kubernetes orchestration.",
    createdAt: "2024-06-01T14:15:00Z",
    attachments: [
      { name: "database_architecture_diagram.pdf", url: "/documents/db_arch.pdf" },
      { name: "scalability_plan.docx", url: "/documents/scalability.docx" }
    ]
  },
  {
    id: "3",
    type: "clarification",
    from: "Procurement Officer",
    to: "Your Company",
    subject: "Additional Requirements for Security Compliance",
    content: "Following our internal review, we require additional information about your proposed security measures. Please provide details on data encryption standards, access control mechanisms, and compliance with ISO 27001 standards.",
    createdAt: "2024-06-02T09:45:00Z"
  },
  {
    id: "4",
    type: "response",
    from: "Your Company", 
    to: "Procurement Officer",
    subject: "Re: Additional Requirements for Security Compliance",
    content: "We are fully committed to meeting the highest security standards. Our solution implements AES-256 encryption for data at rest and TLS 1.3 for data in transit. We follow role-based access control (RBAC) principles and maintain ISO 27001:2013 certification. All security measures are regularly audited by third-party security firms.",
    createdAt: "2024-06-02T16:20:00Z",
    attachments: [
      { name: "iso_27001_certificate.pdf", url: "/documents/iso_cert.pdf" },
      { name: "security_audit_report.pdf", url: "/documents/security_audit.pdf" }
    ]
  }
];

const fetchPrivateQA = async (tenderId: string): Promise<QAItem[]> => {
  const response = await fetch(`/api/tenders/${tenderId}/qa`);
  if (!response.ok) throw new Error('Failed to fetch Q&A');
  return response.json();
};

const fetchPublicClarifications = async (tenderId: string): Promise<Clarification[]> => {
  const response = await fetch(`/api/tenders/${tenderId}/clarifications`);
  if (!response.ok) throw new Error('Failed to fetch clarifications');
  return response.json();
};

const fetchBidCorrespondence = async (bidId: string): Promise<BidCorrespondence[]> => {
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock bid correspondence data");
    return Promise.resolve(mockBidCorrespondence);
  }
  
  const response = await fetch(`/getbidcorrespondence/?id=${bidId}`);
  if (!response.ok) throw new Error('Failed to fetch bid correspondence');
  return response.json();
};

export const CommunicationArea = ({ tenderId }: CommunicationAreaProps) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: qaItems = [], refetch: refetchQA } = useQuery({
    queryKey: ['qa', tenderId],
    queryFn: () => fetchPrivateQA(tenderId)
  });

  const { data: clarifications = [] } = useQuery({
    queryKey: ['clarifications', tenderId],
    queryFn: () => fetchPublicClarifications(tenderId)
  });

  const { data: bidCorrespondence = [] } = useQuery({
    queryKey: ['bidCorrespondence', tenderId],
    queryFn: () => fetchBidCorrespondence(tenderId)
  });

  const submitQuestion = async () => {
    if (!newQuestion.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/tenders/${tenderId}/qa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: newQuestion })
      });

      if (response.ok) {
        setNewQuestion('');
        refetchQA();
      }
    } catch (error) {
      console.error('Failed to submit question:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="qa" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="qa">Private Q&A</TabsTrigger>
            <TabsTrigger value="clarifications">Public Clarifications</TabsTrigger>
            <TabsTrigger value="responses">Bid Responses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="qa" className="space-y-4">
            <div className="space-y-4">
              {qaItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="mb-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-blue-600">Your Question</h4>
                      <span className="text-xs text-gray-500">{formatDate(item.createdAt)}</span>
                    </div>
                    <p className="mt-1 text-gray-700">{item.question}</p>
                  </div>
                  
                  {item.answer ? (
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-green-600">Response</h4>
                        <span className="text-xs text-gray-500">
                          {item.answeredAt && formatDate(item.answeredAt)}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-700">{item.answer}</p>
                    </div>
                  ) : (
                    <div className="border-t pt-3">
                      <p className="text-gray-500 italic">Awaiting response...</p>
                    </div>
                  )}
                </div>
              ))}
              
              {qaItems.length === 0 && (
                <p className="text-gray-500 text-center py-4">No questions asked yet</p>
              )}
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Ask a New Question</h4>
              <div className="space-y-2">
                <Textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  disabled={isSubmitting}
                />
                <Button 
                  onClick={submitQuestion}
                  disabled={!newQuestion.trim() || isSubmitting}
                  className="w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Question'}
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="clarifications" className="space-y-4">
            {clarifications.map((clarification) => (
              <div key={clarification.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{clarification.title}</h4>
                  <span className="text-xs text-gray-500">{formatDate(clarification.createdAt)}</span>
                </div>
                <p className="text-gray-700">{clarification.content}</p>
              </div>
            ))}
            
            {clarifications.length === 0 && (
              <p className="text-gray-500 text-center py-4">No public clarifications available</p>
            )}
          </TabsContent>

          <TabsContent value="responses" className="space-y-4">
            {bidCorrespondence.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      item.type === 'question' ? 'bg-blue-500' : 
                      item.type === 'response' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                    <h4 className="font-medium text-gray-900">{item.subject}</h4>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(item.createdAt)}</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">From:</span> {item.from} → <span className="font-medium">To:</span> {item.to}
                </div>
                
                <p className="text-gray-700 mb-3">{item.content}</p>
                
                {item.attachments && item.attachments.length > 0 && (
                  <div className="border-t pt-3">
                    <h5 className="text-sm font-medium text-gray-600 mb-2">Attachments:</h5>
                    <div className="space-y-1">
                      {item.attachments.map((attachment, index) => (
                        <a
                          key={index}
                          href={attachment.url}
                          className="text-blue-600 hover:text-blue-800 text-sm underline block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {attachment.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {bidCorrespondence.length === 0 && (
              <p className="text-gray-500 text-center py-4">No bid correspondence available</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
