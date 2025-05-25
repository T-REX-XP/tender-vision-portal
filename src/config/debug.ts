
// Toggle this to enable/disable debug mode
export const DEBUG_MODE = true;

export const mockTenders = [
  {
    id: 1,
    title: "Office Supplies Procurement",
    organization: "City of Springfield",
    deadline: "2024-02-15",
    value: "500,000 NOK",
    category: "Supplies",
    status: "Open",
    description: "Annual procurement of office supplies including paper, pens, and basic office equipment for municipal buildings.",
    location: "Springfield, IL"
  },
  {
    id: 2,
    title: "Road Maintenance Services",
    organization: "County Transportation Dept",
    deadline: "2024-01-30",
    value: "2,500,000 NOK",
    category: "Services",
    status: "Closing Soon",
    description: "Comprehensive road maintenance including pothole repair, line painting, and general road surface maintenance.",
    location: "Madison County, IL"
  },
  {
    id: 3,
    title: "IT Infrastructure Upgrade",
    organization: "State Education Board",
    deadline: "2024-03-01",
    value: "1,500,000 NOK",
    category: "Technology",
    status: "Open",
    description: "Upgrade of network infrastructure, servers, and security systems for educational facilities.",
    location: "Chicago, IL"
  },
  {
    id: 4,
    title: "Fresh Produce Supply Contract",
    organization: "FreshMart Supermarkets",
    deadline: "2024-02-20",
    value: "3,000,000 NOK",
    category: "Fresh Produce",
    status: "Open",
    description: "Supply of fresh fruits and vegetables for 50+ store locations including organic and conventional produce.",
    location: "Metro Area, IL"
  },
  {
    id: 5,
    title: "Dairy Products Procurement",
    organization: "FreshMart Supermarkets",
    deadline: "2024-01-25",
    value: "750,000 NOK",
    category: "Dairy & Refrigerated",
    status: "Closing Soon",
    description: "Supply of dairy products including milk, cheese, yogurt, and other refrigerated items.",
    location: "Springfield, IL"
  },
  {
    id: 6,
    title: "Packaged Foods Contract",
    organization: "FreshMart Supermarkets",
    deadline: "2024-02-28",
    value: "1,200,000 NOK",
    category: "Packaged Foods",
    status: "Open",
    description: "Supply of packaged and canned goods for grocery chain including snacks, cereals, and canned vegetables.",
    location: "Cook County, IL"
  }
];

export const mockCategories = [
  "Fresh Produce",
  "Dairy & Refrigerated", 
  "Meat & Seafood",
  "Bakery & Deli",
  "Packaged Foods",
  "Beverages",
  "Health & Beauty",
  "Household Items",
  "Supplies",
  "Services",
  "Technology"
];

export const mockTenderDetails = [
  {
    id: 1,
    title: "Office Supplies Procurement",
    description: "Annual procurement of office supplies including paper, pens, and basic office equipment for municipal buildings. This tender includes:\n\n- Paper products (A4, letterhead, envelopes)\n- Writing instruments (pens, pencils, markers)\n- Office equipment (staplers, hole punchers, calculators)\n- Filing supplies (folders, binders, labels)\n- Computer accessories (USB drives, cables, adapters)\n\nAll supplies must meet municipal quality standards and be delivered within 30 days of order placement.",
    deadline: "2024-02-15T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Tender Specification.pdf", url: "/documents/tender-1-spec.pdf" },
      { name: "Terms and Conditions.pdf", url: "/documents/tender-1-terms.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your company's experience with municipal supply contracts", type: "text" as const },
      { id: 2, question: "What is your proposed delivery timeline?", type: "dropdown" as const, options: ["15 days", "30 days", "45 days"] },
      { id: 3, question: "Do you provide bulk discounts for large orders?", type: "dropdown" as const, options: ["Yes", "No"] }
    ]
  },
  {
    id: 2,
    title: "Road Maintenance Services",
    description: "Comprehensive road maintenance including pothole repair, line painting, and general road surface maintenance for county roads.",
    deadline: "2024-01-30T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "Medium",
    documents: [
      { name: "Road Maintenance Specifications.pdf", url: "/documents/tender-2-spec.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your equipment and crew capacity", type: "text" as const },
      { id: 2, question: "What is your experience with road maintenance?", type: "text" as const }
    ]
  }
];
