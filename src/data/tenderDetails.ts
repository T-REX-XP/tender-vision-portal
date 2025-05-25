
export const tenderDetails = [
  {
    id: 1,
    title: "Corporate Uniform Supply 2024-2026",
    description: "Supply of corporate uniforms for all front-line staff including shirts, jackets, and accessories. This comprehensive uniform program covers:\n\n- Professional polo shirts and dress shirts in corporate colors\n- Blazers and jackets for customer-facing roles\n- Seasonal variations for summer and winter collections\n- Accessories including ties, scarves, and name badges\n- Size range from XS to 5XL to accommodate all employees\n- Sustainable and eco-friendly fabric options\n- Custom embroidery with company logo and employee names\n\nAll uniforms must meet corporate brand guidelines and provide professional appearance standards. Fabrics should be durable, easy-care, and suitable for business environment.",
    deadline: "2024-03-15T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Uniform Specifications.pdf", url: "/documents/tender-1-spec.pdf" },
      { name: "Brand Guidelines.pdf", url: "/documents/tender-1-brand.pdf" },
      { name: "Size Chart Requirements.pdf", url: "/documents/tender-1-sizes.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your manufacturing capabilities and quality control processes", type: "text" as const },
      { id: 2, question: "Can you provide sustainable fabric options?", type: "dropdown" as const, options: ["Yes", "No", "Limited options"] },
      { id: 3, question: "What is your typical delivery timeline for bulk orders?", type: "dropdown" as const, options: ["2-4 weeks", "4-6 weeks", "6-8 weeks", "8+ weeks"] },
      { id: 4, question: "Do you offer custom embroidery and branding services?", type: "dropdown" as const, options: ["Yes", "No", "Through partner"] }
    ]
  },
  {
    id: 26,
    title: "Annual Marketing Campaign 2024",
    description: "Comprehensive marketing campaign including digital, print, and outdoor advertising. This integrated campaign includes:\n\n- Digital marketing across social media platforms\n- Search engine optimization and pay-per-click advertising\n- Print advertisements in industry publications\n- Outdoor advertising including billboards and transit ads\n- Content creation for website and social media\n- Email marketing campaigns and automation\n- Brand awareness and lead generation objectives\n- Multi-channel attribution and analytics tracking\n\nCampaign should align with corporate messaging and brand identity while targeting key customer segments. ROI measurement and reporting are essential requirements.",
    deadline: "2024-02-20T23:59:59Z",
    status: "Open",
    complexityLevel: "High",
    documents: [
      { name: "Campaign Brief.pdf", url: "/documents/tender-26-brief.pdf" },
      { name: "Target Audience Analysis.pdf", url: "/documents/tender-26-audience.pdf" },
      { name: "Brand Guidelines.pdf", url: "/documents/tender-26-brand.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your experience with integrated marketing campaigns", type: "text" as const },
      { id: 2, question: "What analytics and reporting tools do you use?", type: "text" as const },
      { id: 3, question: "Can you provide campaign performance guarantees?", type: "dropdown" as const, options: ["Yes", "No", "Performance-based pricing"] },
      { id: 4, question: "What is your approach to multi-channel attribution?", type: "text" as const }
    ]
  },
  {
    id: 56,
    title: "Enterprise Software License Renewal",
    description: "Renewal of enterprise software licenses including Microsoft Office 365, Adobe Creative Suite. This licensing package covers:\n\n- Microsoft Office 365 Business Premium (500 users)\n- Adobe Creative Cloud for Teams (50 users)\n- Microsoft Project and Visio licenses (25 users)\n- Security and compliance add-ons\n- SharePoint and OneDrive storage expansion\n- Microsoft Teams Phone System licenses\n- Power Platform licensing for business applications\n- Technical support and training services\n\nAll licenses must include enterprise-grade security features and administrative controls. Volume licensing discounts and multi-year agreements preferred.",
    deadline: "2024-03-01T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Current License Inventory.pdf", url: "/documents/tender-56-inventory.pdf" },
      { name: "Technical Requirements.pdf", url: "/documents/tender-56-tech.pdf" },
      { name: "Compliance Requirements.pdf", url: "/documents/tender-56-compliance.pdf" }
    ],
    requirements: [
      { id: 1, question: "Are you an authorized Microsoft and Adobe reseller?", type: "dropdown" as const, options: ["Yes", "No", "Microsoft only", "Adobe only"] },
      { id: 2, question: "What volume licensing discounts can you provide?", type: "text" as const },
      { id: 3, question: "Do you offer license optimization consulting?", type: "dropdown" as const, options: ["Yes", "No", "For additional fee"] },
      { id: 4, question: "What support services are included with licenses?", type: "text" as const }
    ]
  },
  {
    id: 91,
    title: "Annual Office Supplies Contract",
    description: "Annual supply of office stationery, paper, and basic office equipment. This comprehensive office supply contract includes:\n\n- Paper products (A4, letterhead, envelopes, specialty papers)\n- Writing instruments (pens, pencils, markers, highlighters)\n- Office equipment (staplers, hole punchers, calculators)\n- Filing supplies (folders, binders, labels, storage boxes)\n- Computer accessories (USB drives, cables, adapters)\n- Break room supplies (paper cups, napkins, coffee filters)\n- Cleaning supplies for office spaces\n- Delivery schedule: weekly shipments to multiple locations\n\nAll products must meet quality standards and be delivered on schedule. Preference for environmentally friendly and sustainable products.",
    deadline: "2024-02-29T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Product Catalog Requirements.pdf", url: "/documents/tender-91-catalog.pdf" },
      { name: "Delivery Schedule.pdf", url: "/documents/tender-91-delivery.pdf" },
      { name: "Quality Standards.pdf", url: "/documents/tender-91-quality.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your product sourcing and quality assurance", type: "text" as const },
      { id: 2, question: "Can you provide eco-friendly product alternatives?", type: "dropdown" as const, options: ["Yes", "No", "Limited selection"] },
      { id: 3, question: "What is your delivery capacity for multiple locations?", type: "dropdown" as const, options: ["Daily", "Weekly", "Bi-weekly", "Monthly"] },
      { id: 4, question: "Do you offer inventory management services?", type: "dropdown" as const, options: ["Yes", "No", "For additional fee"] }
    ]
  },
  {
    id: 116,
    title: "Building Maintenance Services 2024-2026",
    description: "Comprehensive building maintenance including HVAC, electrical, and plumbing services. This facilities management contract covers:\n\n- Preventive maintenance schedules for all building systems\n- Emergency repair services with 24/7 availability\n- HVAC system maintenance and filter replacements\n- Electrical system inspections and repairs\n- Plumbing maintenance and emergency services\n- Building security system maintenance\n- Elevator and escalator servicing\n- Lighting maintenance and energy-efficient upgrades\n- Compliance with building codes and safety regulations\n\nContractor must have certified technicians and appropriate insurance coverage. Response time for emergency calls must be within 2 hours.",
    deadline: "2024-02-10T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "High",
    documents: [
      { name: "Building Systems Overview.pdf", url: "/documents/tender-116-systems.pdf" },
      { name: "Maintenance Schedules.pdf", url: "/documents/tender-116-schedules.pdf" },
      { name: "Emergency Response Procedures.pdf", url: "/documents/tender-116-emergency.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your technician certifications and qualifications", type: "text" as const },
      { id: 2, question: "What is your emergency response time guarantee?", type: "dropdown" as const, options: ["1 hour", "2 hours", "4 hours", "Next business day"] },
      { id: 3, question: "Do you provide preventive maintenance scheduling software?", type: "dropdown" as const, options: ["Yes", "No", "Third-party integration"] },
      { id: 4, question: "What insurance coverage do you maintain?", type: "text" as const }
    ]
  },
  {
    id: 146,
    title: "Employee Cafeteria Services",
    description: "Daily cafeteria and meal services for all corporate locations. This comprehensive food service contract includes:\n\n- Breakfast, lunch, and dinner service options\n- Healthy menu options with nutritional information\n- Dietary accommodations (vegetarian, vegan, gluten-free)\n- Seasonal menu variations and special event catering\n- Fresh food preparation with local ingredient sourcing\n- Beverage service including coffee, tea, and soft drinks\n- Catering for meetings and corporate events\n- Food safety compliance and staff training\n- Sustainable packaging and waste reduction practices\n\nAll food service staff must be properly trained and certified. Menu pricing should be competitive with subsidized employee rates.",
    deadline: "2024-02-28T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Menu Requirements.pdf", url: "/documents/tender-146-menu.pdf" },
      { name: "Food Safety Standards.pdf", url: "/documents/tender-146-safety.pdf" },
      { name: "Facility Specifications.pdf", url: "/documents/tender-146-facility.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your food safety certifications and procedures", type: "text" as const },
      { id: 2, question: "Can you accommodate special dietary requirements?", type: "dropdown" as const, options: ["Yes", "Limited", "No"] },
      { id: 3, question: "What is your approach to sustainable food service?", type: "text" as const },
      { id: 4, question: "Do you offer nutrition consulting services?", type: "dropdown" as const, options: ["Yes", "No", "Through partner"] }
    ]
  },
  {
    id: 166,
    title: "Corporate Security Services 2024-2026",
    description: "24/7 security services for all corporate facilities and data centers. This comprehensive security contract includes:\n\n- Manned security posts at main entrances and lobbies\n- Mobile patrol services for parking areas and perimeters\n- Data center security with restricted access protocols\n- Emergency response and incident management\n- Security system monitoring and alarm response\n- Background-checked and licensed security personnel\n- Regular security assessments and reporting\n- Coordination with local law enforcement when required\n- Executive protection services as needed\n\nAll security personnel must be properly licensed and trained. Response protocols must align with corporate emergency procedures.",
    deadline: "2024-02-05T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "High",
    documents: [
      { name: "Security Requirements.pdf", url: "/documents/tender-166-requirements.pdf" },
      { name: "Site Locations.pdf", url: "/documents/tender-166-locations.pdf" },
      { name: "Emergency Procedures.pdf", url: "/documents/tender-166-emergency.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your security personnel licensing and training", type: "text" as const },
      { id: 2, question: "What security technologies do you utilize?", type: "text" as const },
      { id: 3, question: "Can you provide executive protection services?", type: "dropdown" as const, options: ["Yes", "No", "Through partner"] },
      { id: 4, question: "What is your incident response time guarantee?", type: "dropdown" as const, options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"] }
    ]
  }
];
