
export const tenderDetails = [
  {
    id: 1,
    title: "Fresh Produce Supply Contract",
    description: "Supply of fresh fruits and vegetables for 50+ FreshMart store locations including organic and conventional produce. This contract covers:\n\n- Seasonal fruits (apples, oranges, berries, tropical fruits)\n- Fresh vegetables (leafy greens, root vegetables, specialty items)\n- Organic produce selection (minimum 30% of total volume)\n- Locally sourced items where possible\n- Quality assurance and traceability systems\n- Daily delivery schedules to multiple locations\n\nAll suppliers must be GAP certified and provide cold chain documentation. Products must meet FreshMart quality standards with 95% acceptance rate.",
    deadline: "2024-02-20T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Product Specifications.pdf", url: "/documents/tender-1-spec.pdf" },
      { name: "Quality Standards.pdf", url: "/documents/tender-1-quality.pdf" },
      { name: "Delivery Schedule Template.pdf", url: "/documents/tender-1-delivery.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your agricultural certifications and quality control processes", type: "text" as const },
      { id: 2, question: "What percentage of your produce is organic?", type: "dropdown" as const, options: ["Less than 10%", "10-30%", "30-50%", "More than 50%"] },
      { id: 3, question: "Can you provide daily deliveries to 50+ locations?", type: "dropdown" as const, options: ["Yes", "No", "With additional logistics partner"] },
      { id: 4, question: "Do you have cold storage and transport capabilities?", type: "dropdown" as const, options: ["Yes", "No", "Partial"] }
    ]
  },
  {
    id: 51,
    title: "Dairy Products Procurement",
    description: "Supply of dairy products including milk, cheese, yogurt, and other refrigerated items for FreshMart supermarket chain. Product categories include:\n\n- Fresh milk (whole, 2%, skim, organic varieties)\n- Cheese products (block, sliced, specialty, imported)\n- Yogurt and cultured products (regular, Greek, organic)\n- Butter and margarine products\n- Cream and specialty dairy items\n- Plant-based dairy alternatives\n\nAll products must maintain strict cold chain requirements and have minimum 7-day shelf life upon delivery. HACCP certification required.",
    deadline: "2024-01-25T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "Medium",
    documents: [
      { name: "Dairy Product Specifications.pdf", url: "/documents/tender-51-spec.pdf" },
      { name: "Cold Chain Requirements.pdf", url: "/documents/tender-51-coldchain.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your dairy processing facilities and certifications", type: "text" as const },
      { id: 2, question: "What is your typical product shelf life guarantee?", type: "dropdown" as const, options: ["5-7 days", "7-10 days", "10-14 days", "14+ days"] },
      { id: 3, question: "Do you offer plant-based dairy alternatives?", type: "dropdown" as const, options: ["Yes", "No", "Limited selection"] }
    ]
  },
  {
    id: 101,
    title: "Fresh Meat Supply Contract",
    description: "Fresh beef, pork, and poultry for grocery chain locations. This comprehensive meat supply contract includes:\n\n- Premium beef cuts (steaks, roasts, ground beef)\n- Pork products (chops, bacon, sausages)\n- Poultry (whole chickens, parts, ground turkey)\n- Specialty meats (lamb, veal, game meats)\n- Organic and grass-fed options\n- Custom butchering services\n\nAll meat must be USDA inspected and certified. Temperature control and food safety protocols are mandatory. Delivery schedule must accommodate peak shopping periods.",
    deadline: "2024-03-01T23:59:59Z",
    status: "Open",
    complexityLevel: "High",
    documents: [
      { name: "Meat Quality Standards.pdf", url: "/documents/tender-101-quality.pdf" },
      { name: "Food Safety Requirements.pdf", url: "/documents/tender-101-safety.pdf" },
      { name: "Delivery Specifications.pdf", url: "/documents/tender-101-delivery.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your meat processing facility certifications", type: "text" as const },
      { id: 2, question: "What percentage of your meat is organic or grass-fed?", type: "dropdown" as const, options: ["Less than 10%", "10-25%", "25-50%", "More than 50%"] },
      { id: 3, question: "Can you provide custom butchering services?", type: "dropdown" as const, options: ["Yes", "No", "Limited services"] },
      { id: 4, question: "What is your cold chain transport capacity?", type: "text" as const }
    ]
  },
  {
    id: 161,
    title: "Packaged Foods Contract",
    description: "Supply of packaged and canned goods for FreshMart grocery chain including snacks, cereals, and canned vegetables. Product categories include:\n\n- Breakfast cereals and granola products\n- Snack foods (chips, crackers, nuts, bars)\n- Canned vegetables and fruits\n- Pasta, rice, and grain products\n- Condiments and sauces\n- Baking ingredients and supplies\n- Health and specialty diet products\n\nProducts must have minimum 6-month shelf life and meet all FDA labeling requirements. Private label options preferred for select categories.",
    deadline: "2024-02-28T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Product Category List.pdf", url: "/documents/tender-161-categories.pdf" },
      { name: "Private Label Guidelines.pdf", url: "/documents/tender-161-private-label.pdf" },
      { name: "Nutritional Requirements.pdf", url: "/documents/tender-161-nutrition.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your manufacturing capabilities and food safety certifications", type: "text" as const },
      { id: 2, question: "Can you provide private label manufacturing services?", type: "dropdown" as const, options: ["Yes", "No", "For select products only"] },
      { id: 3, question: "What is your typical order fulfillment time?", type: "dropdown" as const, options: ["1-2 days", "3-5 days", "1-2 weeks", "2-4 weeks"] },
      { id: 4, question: "Do you offer organic or specialty diet product lines?", type: "dropdown" as const, options: ["Yes", "No", "Limited selection"] }
    ]
  },
  {
    id: 266,
    title: "Office Supplies Procurement",
    description: "Annual procurement of office supplies including paper, pens, and basic office equipment for municipal buildings. This tender includes:\n\n- Paper products (A4, letterhead, envelopes)\n- Writing instruments (pens, pencils, markers)\n- Office equipment (staplers, hole punchers, calculators)\n- Filing supplies (folders, binders, labels)\n- Computer accessories (USB drives, cables, adapters)\n\nAll supplies must meet municipal quality standards and be delivered within 30 days of order placement.",
    deadline: "2024-02-15T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Tender Specification.pdf", url: "/documents/tender-266-spec.pdf" },
      { name: "Terms and Conditions.pdf", url: "/documents/tender-266-terms.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your company's experience with municipal supply contracts", type: "text" as const },
      { id: 2, question: "What is your proposed delivery timeline?", type: "dropdown" as const, options: ["15 days", "30 days", "45 days"] },
      { id: 3, question: "Do you provide bulk discounts for large orders?", type: "dropdown" as const, options: ["Yes", "No"] }
    ]
  },
  {
    id: 276,
    title: "Road Maintenance Services",
    description: "Comprehensive road maintenance including pothole repair, line painting, and general road surface maintenance for county roads. Services include:\n\n- Pothole repair and road patching\n- Road line painting and marking\n- Surface crack sealing\n- Minor resurfacing projects\n- Traffic sign maintenance\n- Snow removal and de-icing services\n\nContractor must have appropriate equipment, certified crew, and insurance coverage. Work must comply with DOT standards and safety regulations.",
    deadline: "2024-01-30T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "Medium",
    documents: [
      { name: "Road Maintenance Specifications.pdf", url: "/documents/tender-276-spec.pdf" },
      { name: "Safety Requirements.pdf", url: "/documents/tender-276-safety.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your equipment and crew capacity", type: "text" as const },
      { id: 2, question: "What is your experience with road maintenance?", type: "text" as const },
      { id: 3, question: "Do you provide emergency response services?", type: "dropdown" as const, options: ["Yes", "No", "Limited availability"] }
    ]
  },
  {
    id: 286,
    title: "IT Infrastructure Upgrade",
    description: "Upgrade of network infrastructure, servers, and security systems for educational facilities. This comprehensive project includes:\n\n- Network hardware refresh (switches, routers, firewalls)\n- Server infrastructure modernization\n- Cybersecurity enhancement systems\n- Wireless network expansion\n- Cloud migration services\n- Staff training and documentation\n\nAll equipment must meet state education standards and include 3-year warranty. Implementation timeline is 6 months with phased rollout to minimize disruption.",
    deadline: "2024-03-01T23:59:59Z",
    status: "Open",
    complexityLevel: "High",
    documents: [
      { name: "Technical Specifications.pdf", url: "/documents/tender-286-spec.pdf" },
      { name: "Security Requirements.pdf", url: "/documents/tender-286-security.pdf" },
      { name: "Implementation Timeline.pdf", url: "/documents/tender-286-timeline.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your experience with educational IT infrastructure projects", type: "text" as const },
      { id: 2, question: "What certifications do your technicians hold?", type: "text" as const },
      { id: 3, question: "Can you provide 24/7 technical support?", type: "dropdown" as const, options: ["Yes", "No", "Business hours only"] },
      { id: 4, question: "What is your proposed project timeline?", type: "dropdown" as const, options: ["3 months", "6 months", "9 months", "12 months"] }
    ]
  }
];
