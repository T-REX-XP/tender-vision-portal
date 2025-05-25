
import { Skeleton } from "@/components/ui/skeleton";

export const TenderDetailsPlaceholder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-6" />
          <Skeleton className="h-6 w-32 mb-4" />
          <Skeleton className="h-4 w-48" />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-32 w-full mb-4" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};
