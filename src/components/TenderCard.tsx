
import { Calendar, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Tender {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  value: string;
  category: string;
  status: string;
  description: string;
  location: string;
}

interface TenderCardProps {
  tender: Tender;
}

export const TenderCard = ({ tender }: TenderCardProps) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 border-green-200";
      case "Closing Soon":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleViewDetails = () => {
    navigate(`/tender/${tender.id}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge className={getStatusColor(tender.status)}>
            {tender.status}
          </Badge>
          <Badge variant="outline">{tender.category}</Badge>
        </div>
        <h4 className="font-semibold text-lg text-gray-900 leading-tight">
          {tender.title}
        </h4>
        <p className="text-sm text-gray-600 font-medium">{tender.organization}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {tender.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="font-semibold">{tender.value}</span>
            </div>
            <span className="text-gray-500">{tender.location}</span>
          </div>
          <div className="flex items-center text-sm text-red-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Deadline: {new Date(tender.deadline).toLocaleDateString()}</span>
          </div>
        </div>
        <Button className="w-full mt-4" variant="outline" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
