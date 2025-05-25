
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft } from "lucide-react";

interface TenderDetailsSectionProps {
  tender: {
    title: string;
    description: string;
    deadline: string;
    status: string;
    complexityLevel: string;
    documents: { name: string; url: string }[];
  };
}

export const TenderDetailsSection = ({ tender }: TenderDetailsSectionProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <CardTitle className="text-2xl">{tender.title}</CardTitle>
        <div className="flex gap-2">
          <Badge className={getStatusColor(tender.status)}>
            {tender.status}
          </Badge>
          <Badge className={getComplexityColor(tender.complexityLevel)}>
            Complexity: {tender.complexityLevel}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{tender.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Submission Deadline</h3>
          <p className="text-gray-700 font-medium">{formatDate(tender.deadline)}</p>
          {new Date(tender.deadline) < new Date() && (
            <p className="text-red-600 text-sm mt-1">This tender has expired</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Tender Documents</h3>
          {tender.documents.length > 0 ? (
            <div className="space-y-2">
              {tender.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{doc.name}</span>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={doc.url} download>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No documents available</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
