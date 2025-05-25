
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface SubmissionActionsProps {
  isEditable: boolean;
  onSubmit: () => Promise<void>;
  bidStatus: 'draft' | 'submitted';
}

export const SubmissionActions = ({ isEditable, onSubmit, bidStatus }: SubmissionActionsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Failed to submit bid:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bidStatus === 'submitted') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-900">Bid Submitted Successfully</h3>
            <p className="text-green-700">
              Your bid has been submitted and is now under review. You will be notified of any updates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isEditable) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Submission Not Available</h3>
          <p className="text-gray-600">
            The submission deadline has passed or this tender is no longer accepting bids.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Ready to Submit?</h3>
          <p className="text-gray-600">
            Once submitted, you will not be able to make further changes to your bid.
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="px-8">
              Submit Bid
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Bid Submission</DialogTitle>
              <DialogDescription>
                Are you sure you want to submit your bid? Once submitted, you will not be able to 
                make any changes. Please review all information carefully before proceeding.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Submission'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
