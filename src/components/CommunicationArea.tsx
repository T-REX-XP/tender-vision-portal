import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Send, Loader2 } from "lucide-react";
import { DEBUG_MODE } from "@/config/debug";
import { webapi } from "@/webapi";

const mockQAData: Correspondence[] = [
  {
    id: "1",
    message:
      "Could you please clarify the minimum experience requirements for this project? The tender document mentions '5+ years' but doesn't specify if this is for the team lead or the entire team.",
    user: "john.smith@techcorp.com",
    createdon: "2024-11-15T10:30:00Z"
  },
  {
    id: "2",
    message:
      "Are there any specific compliance certifications required beyond those mentioned in the RFP? We want to ensure our proposal is complete.",
    contact: "anna.smith@techcorp.com",
    createdon: "2024-11-15T10:30:00Z"
  }
];

interface Correspondence {
  id: string;
  message: string;
  user?: string;
  contact?: string;
  createdon: string;
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
  contactId?: string;
}

// Store messages in state to allow updates in debug mode
let mockMessages = [...mockQAData];

const fetchPrivateQA = async (bidId?: string): Promise<Correspondence[]> => {
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock Q&A data");
    return Promise.resolve([...mockMessages]);
  }

  if (!bidId) {
    throw new Error("Bid ID is required to fetch Q&A data");
  }

  const response = await fetch(`/getbidcorrespondence/?id=${bidId}`);
  if (!response.ok) throw new Error("Failed to fetch Q&A");
  return response.json();
};

const fetchPublicClarifications = async (
  tenderId: string
): Promise<Clarification[]> => {
  const response = await fetch(`/api/tenders/${tenderId}/clarifications`);
  if (!response.ok) throw new Error("Failed to fetch clarifications");
  return response.json();
};

export const CommunicationArea = ({
  tenderId,
  bidId,
  contactId,
}: CommunicationAreaProps) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: qaItems = [], refetch: refetchQA } = useQuery({
    queryKey: ["qa", bidId],
    queryFn: () => fetchPrivateQA(bidId),
  });

  const { data: clarifications = [] } = useQuery({
    queryKey: ["clarifications", tenderId],
    queryFn: () => fetchPublicClarifications(tenderId),
  });

  const submitQuestion = async () => {
    if (!newQuestion.trim()) return;
    setIsSubmitting(true);
    try {
      if (DEBUG_MODE) {
        // Simulate adding message in debug mode
        const newMessage: Correspondence = {
          id: Date.now().toString(),
          message: newQuestion.trim(),
          user: "current.user@company.com",
          createdon: new Date().toISOString()
        };
        mockMessages.push(newMessage);
        
        // Clear message field and reload messages on success
        setNewQuestion("");
        refetchQA();
        setIsSubmitting(false);
        return;
      }

      var record = {};
      
      // Use contactId if provided, otherwise use a default/fallback
      if (contactId) {
        record["la_contact_lookup@odata.bind"] = `/contacts(${contactId})`;
      }
      
      // Use the actual tenderId
      record["la_tender_lookup@odata.bind"] = `/la_tender_tables(${tenderId})`;
      
      // Use the actual question from the form
      record["la_message_mlot"] = newQuestion.trim();
      
      // Use bidId if provided
      if (bidId) {
        record["la_bid_lookup@odata.bind"] = `/la_bid_tables(${bidId})`;
      }

      webapi.safeAjax({
        type: "POST",
        contentType: "application/json",
        url: "/_api/la_correspondence_tables",
        data: JSON.stringify(record),
        success: function (data, textStatus, xhr) {
          var newId = xhr.getResponseHeader("entityid");
          console.log(newId);
          // Clear message field and reload messages on success
          setNewQuestion("");
          refetchQA();
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log(xhr);
        },
      });
    } catch (error) {
      console.error("Failed to submit question:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getUserInitials = (user: string) => {
    const name = user;
    const parts = name.split(" ");
    return parts.map((part) => part.charAt(0).toUpperCase()).join("");
  };

  const getUserDisplayName = (user: string) => {
    const name = user;
    return name;
  };

  const getUserAvatarColors = (user: string) => {
    // Generate a simple hash from the user string
    let hash = 0;
    for (let i = 0; i < user.length; i++) {
      const char = user.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Define color combinations
    const colors = [
      'bg-blue-100 text-blue-600',
      'bg-green-100 text-green-600', 
      'bg-purple-100 text-purple-600',
      'bg-orange-100 text-orange-600',
      'bg-pink-100 text-pink-600',
      'bg-indigo-100 text-indigo-600',
      'bg-yellow-100 text-yellow-600',
      'bg-red-100 text-red-600',
      'bg-teal-100 text-teal-600',
      'bg-cyan-100 text-cyan-600'
    ];
    
    // Use absolute value of hash to get positive index
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  };

  // Create messages for chat display, ordered by date
  const chatMessages = qaItems
    .map((item, index) => {
      // Ensure we always have a unique identifier for avatar colors
      const user = item.user || item.contact || `User-${item.id || index}`;
      return {
        id: item.id || `msg-${index}`,
        message: item.message || "",
        user: item.user || item.contact || `User-${item.id || index}`,
        createdon: item.createdon || new Date().toISOString(),
      };
    })
    .sort(
      (a, b) =>
        new Date(a.createdon).getTime() - new Date(b.createdon).getTime()
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="qa" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="qa">Private Q&A</TabsTrigger>
            <TabsTrigger value="clarifications">
              Public Clarifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qa" className="space-y-4">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {chatMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback
                      className={`text-xs font-medium ${getUserAvatarColors(message.user)}`}
                    >
                      {getUserInitials(message.user)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {getUserDisplayName(message.user)}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {formatDate(message.createdon)}
                      </span>
                    </div>
                    <div
                      className={`mt-1 p-3 rounded-lg ${
                          "bg-green-50 border-l-4 border-green-200"
                      }`}
                    >
                      <p className="text-sm text-gray-700">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}

              {chatMessages.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No messages yet
                </p>
              )}
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Send a Message</h4>
              <div className="space-y-2">
                <Textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Type your message here..."
                  disabled={isSubmitting}
                />
                <Button
                  onClick={submitQuestion}
                  disabled={!newQuestion.trim() || isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clarifications" className="space-y-4">
            {clarifications.map((clarification) => (
              <div key={clarification.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">
                    {clarification.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {formatDate(clarification.createdAt)}
                  </span>
                </div>
                <p className="text-gray-700">{clarification.content}</p>
              </div>
            ))}

            {clarifications.length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No public clarifications available
              </p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
