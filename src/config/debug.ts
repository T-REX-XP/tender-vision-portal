
// Toggle this to enable/disable debug mode
export const DEBUG_MODE = true;

export const mockTenders = [
  {
    id: 1,
    title: "Office Supplies Procurement",
    organization: "City of Springfield",
    deadline: "2024-02-15",
    value: "$50,000",
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
    value: "$250,000",
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
    value: "$150,000",
    category: "Technology",
    status: "Open",
    description: "Upgrade of network infrastructure, servers, and security systems for educational facilities.",
    location: "Chicago, IL"
  },
  {
    id: 4,
    title: "Construction Materials Supply",
    organization: "Metro Housing Authority",
    deadline: "2024-02-20",
    value: "$300,000",
    category: "Construction",
    status: "Open",
    description: "Supply of construction materials for affordable housing development project including cement, steel, and lumber.",
    location: "Metro Area, IL"
  },
  {
    id: 5,
    title: "Cleaning Services Contract",
    organization: "Public Health Department",
    deadline: "2024-01-25",
    value: "$75,000",
    category: "Services",
    status: "Closing Soon",
    description: "Professional cleaning services for public health facilities and administrative buildings.",
    location: "Springfield, IL"
  },
  {
    id: 6,
    title: "Vehicle Fleet Maintenance",
    organization: "Emergency Services",
    deadline: "2024-02-28",
    value: "$120,000",
    category: "Maintenance",
    status: "Open",
    description: "Maintenance and repair services for emergency vehicle fleet including ambulances and fire trucks.",
    location: "Cook County, IL"
  }
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
