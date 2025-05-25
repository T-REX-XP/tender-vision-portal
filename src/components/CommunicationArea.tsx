
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Send } from "lucide-react";

interface QAItem {
  id: number;
  question: string;
  answer?: string;
  createdAt: string;
  answeredAt?: string;
}

interface Clarification {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface CommunicationAreaProps {
  tenderId: string;
}

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
