
import { Button } from "@/components/ui/button";

interface TenderNotFoundProps {
  tenderId: string;
}

export const TenderNotFound = ({ tenderId }: TenderNotFoundProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-400 text-3xl">?</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Tender Not Found</h1>
            <p className="text-gray-600 mb-6">
              The tender with ID "{tenderId}" could not be found or may have been removed.
            </p>
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="mr-4"
            >
              Go Back
            </Button>
            <Button asChild>
              <a href="/tenders">Browse All Tenders</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
