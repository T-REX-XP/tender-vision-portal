
import { Search, Building2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { TenderCard } from "./TenderCard";
import { TenderCardSkeleton } from "./TenderCardSkeleton";
import ITender from "@/types/ITender";

interface TenderGridProps {
  filteredTenders: ITender[];
  isLoading: boolean;
  error: Error | null;
}

export const TenderGrid = ({ filteredTenders, isLoading, error }: TenderGridProps) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {isLoading ? (
            <Skeleton className="h-8 w-64" />
          ) : (
            `Available Tenders (${filteredTenders.length})`
          )}
        </h3>
      </div>

      {error && (
        <div className="text-center py-12">
          <div className="text-red-500 mb-4">
            <Building2 className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading tenders</h3>
          <p className="text-gray-600">Please try again later</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <TenderCardSkeleton key={index} />
          ))
        ) : (
          filteredTenders.map((tender) => (
            <TenderCard key={tender.id} tender={tender} />
          ))
        )}
      </div>

      {!isLoading && !error && filteredTenders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tenders found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </main>
  );
};
