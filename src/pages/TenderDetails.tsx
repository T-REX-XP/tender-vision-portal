import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TenderDetailsSection } from "@/components/TenderDetailsSection";
import { BidSubmissionForm } from "@/components/BidSubmissionForm";
import { CommunicationArea } from "@/components/CommunicationArea";
import { SubmissionActions } from "@/components/SubmissionActions";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { DEBUG_MODE, mockTenderDetails } from "@/config/debug";
import { webapi } from "@/webapi";

interface TenderDetails {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  complexityLevel: string;
  documents: { name: string; url: string }[];
  requirements: {
    id: string;
    question: string;
    type: "text" | "dropdown";
    options?: string[];
  }[];
}

interface BidData {
  currentPortalUserId: string;
  id: string;
  generalDescription: string;
  questionnaire: { [key: string]: string };
  lineItems: {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
  attachments: File[];
  status: "draft" | "submitted";
}

const fetchTenderDetails = async (id: string): Promise<TenderDetails> => {
  // Return mock data if in debug mode
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - using mock tender details data");
    const mockDetail = mockTenderDetails.find((t) => t.id === id);
    if (mockDetail) {
      return Promise.resolve(mockDetail);
    }
    throw new Error(`Tender with ID ${id} not found in mock data`);
  }

  const response = await fetch(`/gettenderdetails/?id=${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Tender with ID ${id} not found`);
    }
    throw new Error("Failed to fetch tender details");
  }
  return response.json();
};
const mockBidDetails: BidData = {
  id: "mock-bid-123",
  currentPortalUserId: "mock-user-456",
  generalDescription:
    "We are pleased to submit our comprehensive proposal for this project. Our team brings over 15 years of experience in delivering high-quality solutions that meet and exceed client expectations. We have carefully reviewed all requirements and are confident in our ability to deliver exceptional results within the specified timeframe.\n\nOur approach includes thorough project planning, agile development methodologies, comprehensive testing protocols, and detailed documentation. We maintain transparent communication throughout the project lifecycle and provide regular progress updates to ensure alignment with your objectives.\n\nOur team consists of certified professionals with extensive industry knowledge and proven expertise in similar projects. We are committed to delivering not just a product, but a solution that adds genuine value to your organization.",
  questionnaire: {
    "1": "Our company has 15+ years of experience in this field with a proven track record of successful project delivery. We have completed over 200 similar projects across various industries including government, healthcare, education, and private sector organizations.",
    "2": "ISO 9001:2015 certified with additional certifications in project management (PMP), quality assurance (ISTQB), cybersecurity (ISO 27001), and industry-specific compliance standards. Our team holds relevant professional certifications and participates in continuous learning programs.",
    "3": "We can complete this project within 8-12 weeks depending on final specifications and requirements. Our project timeline includes 2 weeks for planning and design, 6-8 weeks for development and implementation, and 2 weeks for testing, deployment, and knowledge transfer.",
    "4": "Our quality assurance process includes multiple testing phases: unit testing, integration testing, system testing, user acceptance testing, and performance testing. We follow industry best practices and maintain comprehensive test documentation.",
    "5": "We provide 12 months of warranty coverage including bug fixes, minor enhancements, and technical support. Additionally, we offer optional maintenance packages for ongoing support, updates, and system monitoring.",
    "6": "Our team includes senior project managers, lead developers, quality assurance specialists, technical writers, and subject matter experts. All team members have relevant experience and will be dedicated to this project throughout its duration.",
    "7": "We implement robust security measures including data encryption, secure authentication, access controls, regular security audits, and compliance with relevant data protection regulations such as GDPR and industry-specific requirements.",
    "8": "Our risk mitigation strategy includes thorough project planning, regular risk assessments, contingency planning, backup procedures, and clear escalation protocols. We maintain detailed risk registers and provide regular risk status reports.",
  },
  lineItems: [
    {
      id: "1",
      name: "Project Management & Planning",
      quantity: 1,
      unitPrice: 150000,
    },
    {
      id: "2",
      name: "Business Analysis & Requirements Gathering",
      quantity: 80,
      unitPrice: 950,
    },
    {
      id: "3",
      name: "System Design & Architecture",
      quantity: 60,
      unitPrice: 1100,
    },
    {
      id: "4",
      name: "Development & Implementation",
      quantity: 240,
      unitPrice: 850,
    },
    {
      id: "5",
      name: "Database Design & Integration",
      quantity: 40,
      unitPrice: 1050,
    },
    {
      id: "6",
      name: "User Interface Design",
      quantity: 80,
      unitPrice: 900,
    },
    {
      id: "7",
      name: "Testing & Quality Assurance",
      quantity: 120,
      unitPrice: 750,
    },
    {
      id: "8",
      name: "Security Implementation & Testing",
      quantity: 60,
      unitPrice: 1250,
    },
    {
      id: "9",
      name: "Deployment & Configuration",
      quantity: 40,
      unitPrice: 950,
    },
    {
      id: "10",
      name: "Documentation & User Training",
      quantity: 80,
      unitPrice: 800,
    },
    {
      id: "11",
      name: "Project Support & Warranty (12 months)",
      quantity: 1,
      unitPrice: 80000,
    },
  ],
  attachments: [],
  status: "draft",
};
const fetchBidData = async (tenderId: string): Promise<BidData | null> => {
  console.log("=== FETCH BID DATA DEBUG ===");
  console.log("tenderId:", tenderId);
  console.log("DEBUG_MODE:", DEBUG_MODE);

  // Return null for mock data (no existing bids in debug mode)
  if (DEBUG_MODE) {
    console.log("Debug mode enabled - returning mock bid data");
    return Promise.resolve(mockBidDetails);
  }

  console.log("Making API call to fetch bid data...");
  const response = await fetch(`/getbiddetails/?tenderId=${tenderId}`);
  console.log("API response status:", response.status);

  if (response.status === 404) {
    console.log("No existing bid found (404) - returning null");
    return null; // No existing bid
  }
  if (!response.ok) {
    console.log("API error - throwing exception");
    throw new Error("Failed to fetch bid data");
  }
  try {
    const data = await response.json();
    console.log("API response data:", data);
    console.log("=== END FETCH BID DATA DEBUG ===");

    return data;
  } catch (error) {
    console.error("Error parsing bid data:", error);
    throw new Error("Failed to parse bid data");
  }
  return null;
};

const TenderDetailsPlaceholder = () => {
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

const TenderNotFound = ({ tenderId }: { tenderId: string }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-400 text-3xl">?</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Tender Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The tender with ID "{tenderId}" could not be found or may have
              been removed.
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

const TenderDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [bidData, setBidData] = useState<BidData | undefined>();

  const {
    data: tenderDetails,
    isLoading: tenderLoading,
    error: tenderError,
  } = useQuery({
    queryKey: ["tender", id],
    queryFn: () => fetchTenderDetails(id!),
    enabled: !!id,
    retry: false,
  });

  const { data: existingBid, isLoading: bidLoading } = useQuery({
    queryKey: ["bid", id],
    queryFn: () => fetchBidData(id!),
    enabled: !!id && !DEBUG_MODE,
  });

  console.log("=== REACT QUERY DEBUG ===");
  console.log("Query enabled (!!id && !DEBUG_MODE):", !!id && !DEBUG_MODE);
  console.log("id:", id);
  console.log("DEBUG_MODE:", DEBUG_MODE);
  console.log("bidLoading:", bidLoading);
  console.log("existingBid:", existingBid);
  console.log("=== END REACT QUERY DEBUG ===");

  // Update bidData when existing bid is loaded or initialize with mock data in debug mode
  useEffect(() => {
    console.log("=== BID DATA INITIALIZATION DEBUG ===");
    console.log("DEBUG_MODE:", DEBUG_MODE);
    console.log("existingBid:", existingBid);
    console.log("bidData:", bidData);
    console.log("bidLoading:", bidLoading);

    if (DEBUG_MODE && !bidData) {
      console.log(
        "✅ Condition 1: DEBUG_MODE && !bidData - Setting mock bid data"
      );
      setBidData(mockBidDetails);
    } else if (existingBid) {
      console.log(
        "✅ Condition 2: existingBid exists - Setting existing bid data"
      );
      setBidData(existingBid);
    } else if (!DEBUG_MODE && existingBid === null && !bidData) {
      console.log(
        "✅ Condition 3: !DEBUG_MODE && existingBid === null && !bidData - Creating empty bid data"
      );
      // No existing bid found, initialize with empty bid data
      const emptyBidData: BidData = {
        id: "",
        currentPortalUserId: "",
        generalDescription: "",
        questionnaire: {},
        lineItems: [],
        attachments: [],
        status: "draft",
      };
      setBidData(emptyBidData);
    } else {
      console.log("❌ No conditions matched");
      console.log("- DEBUG_MODE && !bidData:", DEBUG_MODE && !bidData);
      console.log("- existingBid exists:", !!existingBid);
      console.log(
        "- !DEBUG_MODE && existingBid === null && !bidData:",
        !DEBUG_MODE && existingBid === null && !bidData
      );
    }
    console.log("=== END BID DATA DEBUG ===");
  }, [existingBid, bidLoading]);

  const isEditable = bidData?.status === "draft" &&
    tenderDetails &&
    new Date(tenderDetails.deadline) > new Date();

  const handleBidUpdate = (updatedBid: Partial<BidData>) => {
    setBidData((prev) =>
      prev ? { ...prev, ...updatedBid } : (updatedBid as BidData)
    );
  };

  const handleSubmitBid = async () => {
    if (DEBUG_MODE) {
      console.log("Debug mode - simulating bid submission");
      setBidData((prev) =>
        prev
          ? { ...prev, status: "submitted" }
          : { ...mockBidDetails, status: "submitted" }
      );
      return;
    }
    const record = {
      "la_desription_mlot": bidData?.generalDescription || "",
      "statuscode": 124210001
    };
    webapi.safeAjax({
      type: "PATCH",
      contentType: "application/json",
      url: "/_api/la_bid_tables(bidData.id)",
      data: JSON.stringify(record),
      success: function (data, textStatus, xhr) {
        var newId = xhr.getResponseHeader("entityid");
        console.log("----Bid submitted");
        setBidData((prev) =>
          prev ? { ...prev, status: "submitted" } : undefined
        );
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr);
      },
    });

    // const response = await fetch(`/api/bids`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...bidData, tenderId: id, status: "submitted" }),
    // });

    // if (response.ok) {
    //   setBidData((prev) =>
    //     prev ? { ...prev, status: "submitted" } : undefined
    //   );
    // }
  };

  if (tenderLoading || bidLoading) {
    return <TenderDetailsPlaceholder />;
  }

  if (tenderError || !tenderDetails) {
    return <TenderNotFound tenderId={id || "unknown"} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <TenderDetailsSection tender={tenderDetails} />

        <BidSubmissionForm
          tender={tenderDetails}
          bidData={bidData}
          isEditable={isEditable}
          onUpdate={handleBidUpdate}
        />

        <CommunicationArea tenderId={id!} bidId={bidData?.id} contactId={bidData?.currentPortalUserId} />

        <SubmissionActions
          isEditable={isEditable}
          onSubmit={handleSubmitBid}
          bidStatus={bidData?.status}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default TenderDetails;
