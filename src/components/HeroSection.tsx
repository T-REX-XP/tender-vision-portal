
import { Skeleton } from "@/components/ui/skeleton";

interface Tender {
  status: string;
}

interface HeroSectionProps {
  tenderData: Tender[];
  isLoading: boolean;
}

export const HeroSection = ({ tenderData, isLoading }: HeroSectionProps) => {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Discover Business Opportunities</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Access thousands of tender opportunities from government agencies and organizations. 
          Find the perfect contracts for your business.
        </p>
        <div className="flex justify-center text-sm text-blue-100 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>
              {isLoading ? (
                <Skeleton className="h-4 w-16 bg-blue-400" />
              ) : (
                `${tenderData.filter(t => t.status === "Open").length} Open Tenders`
              )}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>
              {isLoading ? (
                <Skeleton className="h-4 w-20 bg-blue-400" />
              ) : (
                `${tenderData.filter(t => t.status === "Closing Soon").length} Closing Soon`
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
