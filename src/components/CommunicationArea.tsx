
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Send } from "lucide-react";
import { DEBUG_MODE } from "@/config/debug";

const mockQAData: QAItem[] = [
  {
    id: "1",
    question: "Could you please clarify the minimum experience requirements for this project? The tender document mentions '5+ years' but doesn't specify if this is for the team lead or the entire team.",
    answer: "Thank you for your question. The 5+ years experience requirement applies to the team lead position. Other team members should have at least 2 years of relevant experience in similar projects.",
    createdAt: "2024-11-15T10:30:00Z",
    answeredAt: "2024-11-15T14:45:00Z"
  },
  {
    id: "2", 
    question: "Are there any specific compliance certifications required beyond those mentioned in the RFP? We want to ensure our proposal is complete.",
    answer: "In addition to the certifications listed in section 3.2, please ensure you have ISO 27001 for information security management. All other requirements remain as specified in the original tender document.",
    createdAt: "2024-11-16T09:15:00Z",
    answeredAt: "2024-11-16T16:20:00Z"
  },
  {
    id: "3",
    question: "What is the expected timeline for the project kickoff after contract award? We need to plan our resource allocation accordingly.",
    createdAt: "2024-11-17T11:00:00Z"
  },
  {
    id: "4",
    question: "Can you provide more details about the integration requirements with your existing systems? The current documentation seems limited on this aspect.",
    answer: "We will provide detailed API documentation and system architecture diagrams to the successful bidder during the transition phase. For proposal purposes, please assume standard REST API integration capabilities.",
    createdAt: "2024-11-17T13:30:00Z", 
    answeredAt: "2024-11-17T17:10:00Z"
  }
];

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

interface CommunicationAreaProps {
  tenderId: string;
  bidId?: string;
}

const fetchPrivateQA = async (bidId?: string): Promise<QAItem[]> => {
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock Q&A data");
    return Promise.resolve(mockQAData);
  }

  if (!bidId) {
    throw new Error("Bid ID is required to fetch Q&A data");
  }

  const response = await fetch(`/getbidcorrespondence/?id=${bidId}`);
  if (!response.ok) throw new Error('Failed to fetch Q&A');
  return response.json();
};

const fetchPublicClarifications = async (tenderId: string): Promise<Clarification[]> => {
  const response = await fetch(`/api/tenders/${tenderId}/clarifications`);
  if (!response.ok) throw new Error('Failed to fetch clarifications');
  return response.json();
};

export const CommunicationArea = ({ tenderId, bidId }: CommunicationAreaProps) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: qaItems = [], refetch: refetchQA } = useQuery({
    queryKey: ['qa', bidId],
    queryFn: () => fetchPrivateQA(bidId)
  });

  const { data: clarifications = [] } = useQuery({
    queryKey: ['clarifications', tenderId],
    queryFn: () => fetchPublicClarifications(tenderId)
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
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="qa">Private Q&A</TabsTrigger>
            <TabsTrigger value="clarifications">Public Clarifications</TabsTrigger>
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
        </Tabs>
      </CardContent>
    </Card>
  );
};
