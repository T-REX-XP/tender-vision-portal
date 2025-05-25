
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
  },
  {
    id: 3,
    title: "IT Infrastructure Upgrade",
    description: "Upgrade of network infrastructure, servers, and security systems for educational facilities. This comprehensive project includes:\n\n- Network hardware refresh (switches, routers, firewalls)\n- Server infrastructure modernization\n- Cybersecurity enhancement systems\n- Wireless network expansion\n- Cloud migration services\n- Staff training and documentation\n\nAll equipment must meet state education standards and include 3-year warranty. Implementation timeline is 6 months with phased rollout to minimize disruption.",
    deadline: "2024-03-01T23:59:59Z",
    status: "Open",
    complexityLevel: "High",
    documents: [
      { name: "Technical Specifications.pdf", url: "/documents/tender-3-spec.pdf" },
      { name: "Security Requirements.pdf", url: "/documents/tender-3-security.pdf" },
      { name: "Implementation Timeline.pdf", url: "/documents/tender-3-timeline.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your experience with educational IT infrastructure projects", type: "text" as const },
      { id: 2, question: "What certifications do your technicians hold?", type: "text" as const },
      { id: 3, question: "Can you provide 24/7 technical support?", type: "dropdown" as const, options: ["Yes", "No", "Business hours only"] },
      { id: 4, question: "What is your proposed project timeline?", type: "dropdown" as const, options: ["3 months", "6 months", "9 months", "12 months"] }
    ]
  },
  {
    id: 4,
    title: "Fresh Produce Supply Contract",
    description: "Supply of fresh fruits and vegetables for 50+ FreshMart store locations including organic and conventional produce. This contract covers:\n\n- Seasonal fruits (apples, oranges, berries, tropical fruits)\n- Fresh vegetables (leafy greens, root vegetables, specialty items)\n- Organic produce selection (minimum 30% of total volume)\n- Locally sourced items where possible\n- Quality assurance and traceability systems\n- Daily delivery schedules to multiple locations\n\nAll suppliers must be GAP certified and provide cold chain documentation. Products must meet FreshMart quality standards with 95% acceptance rate.",
    deadline: "2024-02-20T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Product Specifications.pdf", url: "/documents/tender-4-spec.pdf" },
      { name: "Quality Standards.pdf", url: "/documents/tender-4-quality.pdf" },
      { name: "Delivery Schedule Template.pdf", url: "/documents/tender-4-delivery.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your agricultural certifications and quality control processes", type: "text" as const },
      { id: 2, question: "What percentage of your produce is organic?", type: "dropdown" as const, options: ["Less than 10%", "10-30%", "30-50%", "More than 50%"] },
      { id: 3, question: "Can you provide daily deliveries to 50+ locations?", type: "dropdown" as const, options: ["Yes", "No", "With additional logistics partner"] },
      { id: 4, question: "Do you have cold storage and transport capabilities?", type: "dropdown" as const, options: ["Yes", "No", "Partial"] }
    ]
  },
  {
    id: 5,
    title: "Dairy Products Procurement",
    description: "Supply of dairy products including milk, cheese, yogurt, and other refrigerated items for FreshMart supermarket chain. Product categories include:\n\n- Fresh milk (whole, 2%, skim, organic varieties)\n- Cheese products (block, sliced, specialty, imported)\n- Yogurt and cultured products (regular, Greek, organic)\n- Butter and margarine products\n- Cream and specialty dairy items\n- Plant-based dairy alternatives\n\nAll products must maintain strict cold chain requirements and have minimum 7-day shelf life upon delivery. HACCP certification required.",
    deadline: "2024-01-25T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "Medium",
    documents: [
      { name: "Dairy Product Specifications.pdf", url: "/documents/tender-5-spec.pdf" },
      { name: "Cold Chain Requirements.pdf", url: "/documents/tender-5-coldchain.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your dairy processing facilities and certifications", type: "text" as const },
      { id: 2, question: "What is your typical product shelf life guarantee?", type: "dropdown" as const, options: ["5-7 days", "7-10 days", "10-14 days", "14+ days"] },
      { id: 3, question: "Do you offer plant-based dairy alternatives?", type: "dropdown" as const, options: ["Yes", "No", "Limited selection"] }
    ]
  },
  {
    id: 6,
    title: "Packaged Foods Contract",
    description: "Supply of packaged and canned goods for FreshMart grocery chain including snacks, cereals, and canned vegetables. Product categories include:\n\n- Breakfast cereals and granola products\n- Snack foods (chips, crackers, nuts, bars)\n- Canned vegetables and fruits\n- Pasta, rice, and grain products\n- Condiments and sauces\n- Baking ingredients and supplies\n- Health and specialty diet products\n\nProducts must have minimum 6-month shelf life and meet all FDA labeling requirements. Private label options preferred for select categories.",
    deadline: "2024-02-28T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Product Category List.pdf", url: "/documents/tender-6-categories.pdf" },
      { name: "Private Label Guidelines.pdf", url: "/documents/tender-6-private-label.pdf" },
      { name: "Nutritional Requirements.pdf", url: "/documents/tender-6-nutrition.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your manufacturing capabilities and food safety certifications", type: "text" as const },
      { id: 2, question: "Can you provide private label manufacturing services?", type: "dropdown" as const, options: ["Yes", "No", "For select products only"] },
      { id: 3, question: "What is your typical order fulfillment time?", type: "dropdown" as const, options: ["1-2 days", "3-5 days", "1-2 weeks", "2-4 weeks"] },
      { id: 4, question: "Do you offer organic or specialty diet product lines?", type: "dropdown" as const, options: ["Yes", "No", "Limited selection"] }
    ]
  }
];
