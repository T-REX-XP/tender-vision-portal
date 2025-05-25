
export const tenderDetails = [
  // 2025 Tenders - Some Open, Some Closing Soon
  {
    id: 1,
    title: "Corporate Uniform Supply 2025-2027",
    description: "Supply of corporate uniforms for all front-line staff including shirts, jackets, and accessories. This comprehensive uniform program covers:\n\n- Professional polo shirts and dress shirts in corporate colors\n- Blazers and jackets for customer-facing roles\n- Seasonal variations for summer and winter collections\n- Accessories including ties, scarves, and name badges\n- Size range from XS to 5XL to accommodate all employees\n- Sustainable and eco-friendly fabric options\n- Custom embroidery with company logo and employee names\n\nAll uniforms must meet corporate brand guidelines and provide professional appearance standards. Fabrics should be durable, easy-care, and suitable for business environment.",
    deadline: "2025-03-15T23:59:59Z",
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
    id: 2,
    title: "Digital Marketing Campaign Q2 2025",
    description: "Comprehensive digital marketing campaign for Q2 2025 product launch. This integrated campaign includes:\n\n- Social media advertising across LinkedIn, Facebook, Instagram\n- Google Ads and Microsoft Advertising campaigns\n- Email marketing automation sequences\n- Content creation for blog and social media\n- Influencer partnership coordination\n- Landing page design and optimization\n- Marketing analytics and performance tracking\n- A/B testing for campaign optimization\n\nCampaign objectives include 25% increase in brand awareness and 15% boost in lead generation. Budget allocation: 40% digital ads, 30% content creation, 20% influencer partnerships, 10% analytics tools.",
    deadline: "2025-02-20T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "High",
    documents: [
      { name: "Campaign Brief.pdf", url: "/documents/tender-2-brief.pdf" },
      { name: "Target Audience Analysis.pdf", url: "/documents/tender-2-audience.pdf" },
      { name: "Brand Guidelines.pdf", url: "/documents/tender-2-brand.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your experience with integrated marketing campaigns", type: "text" as const },
      { id: 2, question: "What analytics and reporting tools do you use?", type: "text" as const },
      { id: 3, question: "Can you provide campaign performance guarantees?", type: "dropdown" as const, options: ["Yes", "No", "Performance-based pricing"] },
      { id: 4, question: "What is your approach to multi-channel attribution?", type: "text" as const }
    ]
  },
  {
    id: 3,
    title: "Enterprise Cloud Infrastructure Migration",
    description: "Migration of existing on-premise infrastructure to cloud-based solutions. This comprehensive project includes:\n\n- Assessment of current infrastructure and applications\n- Cloud architecture design and planning\n- Migration strategy for 200+ applications\n- Data migration with zero downtime requirements\n- Security implementation and compliance validation\n- Staff training and change management\n- 24/7 support during transition period\n- Performance optimization and cost management\n\nProject timeline: 18 months with phased rollout. Must comply with SOC 2, ISO 27001, and industry-specific regulations. Hybrid cloud approach preferred with multi-cloud redundancy.",
    deadline: "2025-01-31T23:59:59Z",
    status: "Closing Soon",
    complexityLevel: "High",
    documents: [
      { name: "Infrastructure Assessment.pdf", url: "/documents/tender-3-assessment.pdf" },
      { name: "Migration Requirements.pdf", url: "/documents/tender-3-requirements.pdf" },
      { name: "Compliance Standards.pdf", url: "/documents/tender-3-compliance.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your cloud migration methodology and experience", type: "text" as const },
      { id: 2, question: "Which cloud platforms are you certified in?", type: "dropdown" as const, options: ["AWS", "Azure", "Google Cloud", "Multi-cloud"] },
      { id: 3, question: "What is your approach to zero-downtime migration?", type: "text" as const },
      { id: 4, question: "Can you provide 24/7 support during migration?", type: "dropdown" as const, options: ["Yes", "Business hours only", "On-call support"] }
    ]
  },
  {
    id: 4,
    title: "Office Supplies Annual Contract 2025",
    description: "Annual supply contract for office stationery, equipment, and consumables across all company locations. This contract covers:\n\n- Paper products (A4, letterhead, envelopes, specialty papers)\n- Writing instruments (pens, pencils, markers, highlighters)\n- Office equipment (staplers, calculators, desk accessories)\n- Filing supplies (folders, binders, labels, storage solutions)\n- Computer accessories (cables, adapters, peripherals)\n- Break room supplies (coffee, tea, snacks, disposables)\n- Cleaning and maintenance supplies\n- Eco-friendly product alternatives where available\n\nDelivery requirements: Weekly deliveries to 15 locations, emergency same-day delivery available. Inventory management system integration preferred.",
    deadline: "2025-03-01T23:59:59Z",
    status: "Open",
    complexityLevel: "Low",
    documents: [
      { name: "Product Catalog.pdf", url: "/documents/tender-4-catalog.pdf" },
      { name: "Delivery Locations.pdf", url: "/documents/tender-4-locations.pdf" },
      { name: "Sustainability Requirements.pdf", url: "/documents/tender-4-sustainability.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your product sourcing and quality standards", type: "text" as const },
      { id: 2, question: "Can you provide same-day emergency delivery?", type: "dropdown" as const, options: ["Yes", "Next business day", "2-3 business days"] },
      { id: 3, question: "What percentage of eco-friendly products can you offer?", type: "dropdown" as const, options: ["75-100%", "50-75%", "25-50%", "Less than 25%"] },
      { id: 4, question: "Do you offer inventory management integration?", type: "dropdown" as const, options: ["Yes", "No", "Through API"] }
    ]
  },
  {
    id: 5,
    title: "Facilities Management Services 2025-2027",
    description: "Comprehensive facilities management for corporate headquarters and regional offices. Services include:\n\n- HVAC maintenance and emergency repairs\n- Electrical system maintenance and upgrades\n- Plumbing services and water system management\n- Security system monitoring and maintenance\n- Cleaning services for office and common areas\n- Landscaping and exterior maintenance\n- Space planning and office reconfiguration\n- Energy management and sustainability initiatives\n\n24/7 emergency response required with 2-hour response time guarantee. Preventive maintenance schedules must be technology-driven with mobile reporting capabilities.",
    deadline: "2025-02-15T23:59:59Z",
    status: "Open",
    complexityLevel: "High",
    documents: [
      { name: "Facility Specifications.pdf", url: "/documents/tender-5-specs.pdf" },
      { name: "Maintenance Schedules.pdf", url: "/documents/tender-5-schedules.pdf" },
      { name: "Emergency Procedures.pdf", url: "/documents/tender-5-emergency.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your emergency response capabilities and procedures", type: "text" as const },
      { id: 2, question: "What technology platforms do you use for maintenance tracking?", type: "text" as const },
      { id: 3, question: "Are your technicians licensed and certified?", type: "dropdown" as const, options: ["All certified", "Partially certified", "Certification in progress"] },
      { id: 4, question: "Can you provide energy efficiency improvements?", type: "dropdown" as const, options: ["Yes", "Limited services", "No"] }
    ]
  },

  // 2024 Tenders - Mix of Awarded and Closed
  {
    id: 6,
    title: "Employee Catering Services 2024",
    description: "Daily catering services for employee cafeteria and special events. This comprehensive food service includes:\n\n- Breakfast, lunch, and dinner options\n- Healthy menu choices with nutritional information\n- Dietary accommodations (vegetarian, vegan, gluten-free, halal, kosher)\n- Special event catering and corporate functions\n- Local and organic ingredient sourcing when possible\n- Beverage service including specialty coffee program\n- Seasonal menu rotations and holiday specials\n- Food safety compliance and staff training\n\nService for 500+ employees daily with scalability for special events up to 1,000 attendees. Sustainability focus with minimal food waste and eco-friendly packaging.",
    deadline: "2024-12-31T23:59:59Z",
    status: "Awarded",
    complexityLevel: "Medium",
    documents: [
      { name: "Menu Requirements.pdf", url: "/documents/tender-6-menu.pdf" },
      { name: "Nutritional Standards.pdf", url: "/documents/tender-6-nutrition.pdf" },
      { name: "Kitchen Specifications.pdf", url: "/documents/tender-6-kitchen.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your food safety certifications and procedures", type: "text" as const },
      { id: 2, question: "Can you accommodate religious dietary restrictions?", type: "dropdown" as const, options: ["Yes, all major restrictions", "Some restrictions", "No"] },
      { id: 3, question: "What is your approach to food waste reduction?", type: "text" as const },
      { id: 4, question: "Do you source ingredients locally?", type: "dropdown" as const, options: ["Primarily local", "When possible", "No preference"] }
    ]
  },
  {
    id: 7,
    title: "Corporate Security Services 2024-2026",
    description: "24/7 security services for all corporate facilities including headquarters, warehouses, and remote offices. Security services include:\n\n- Manned security posts at building entrances\n- Mobile patrol services for parking and perimeter areas\n- Access control system management\n- Visitor management and escort services\n- Emergency response and incident management\n- CCTV monitoring and alarm response\n- Executive protection services as needed\n- Security training for employees\n\nAll security personnel must be licensed, bonded, and background-checked. Integration with existing security systems required. Response time for emergencies must be under 5 minutes.",
    deadline: "2024-11-30T23:59:59Z",
    status: "Awarded",
    complexityLevel: "High",
    documents: [
      { name: "Security Assessment.pdf", url: "/documents/tender-7-assessment.pdf" },
      { name: "Personnel Requirements.pdf", url: "/documents/tender-7-personnel.pdf" },
      { name: "Technology Integration.pdf", url: "/documents/tender-7-technology.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your security personnel screening and training process", type: "text" as const },
      { id: 2, question: "What security technologies and systems do you utilize?", type: "text" as const },
      { id: 3, question: "Can you integrate with our existing access control system?", type: "dropdown" as const, options: ["Yes", "With modifications", "No"] },
      { id: 4, question: "What is your average emergency response time?", type: "dropdown" as const, options: ["Under 3 minutes", "3-5 minutes", "5-10 minutes", "Over 10 minutes"] }
    ]
  },
  {
    id: 8,
    title: "Travel Management Services 2024",
    description: "Corporate travel management and booking services for business travel. This comprehensive travel program includes:\n\n- Online booking platform for flights, hotels, and ground transportation\n- 24/7 travel support and emergency assistance\n- Expense management and reporting integration\n- Travel policy compliance monitoring\n- Preferred vendor negotiations and discounts\n- Visa and passport assistance services\n- Travel risk management and safety alerts\n- Mobile app for travelers with real-time updates\n\nAnnual travel volume: $2.5M with 1,200+ trips. Cost savings targets: 10% reduction in travel expenses while maintaining service quality. Carbon footprint reporting required.",
    deadline: "2024-10-15T23:59:59Z",
    status: "Closed",
    complexityLevel: "Medium",
    documents: [
      { name: "Travel Policy.pdf", url: "/documents/tender-8-policy.pdf" },
      { name: "Volume Analysis.pdf", url: "/documents/tender-8-volume.pdf" },
      { name: "Technology Requirements.pdf", url: "/documents/tender-8-tech.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your online booking platform capabilities", type: "text" as const },
      { id: 2, question: "What cost savings can you guarantee?", type: "dropdown" as const, options: ["10-15%", "5-10%", "3-5%", "No guarantees"] },
      { id: 3, question: "Do you provide 24/7 emergency travel support?", type: "dropdown" as const, options: ["Yes", "Business hours only", "On-call support"] },
      { id: 4, question: "Can you integrate with our expense management system?", type: "dropdown" as const, options: ["Yes", "API available", "Manual export only"] }
    ]
  },

  // 2023 Tenders - All Closed/Awarded
  {
    id: 9,
    title: "Professional Development Training 2023",
    description: "Comprehensive professional development and training programs for all employees. Training portfolio includes:\n\n- Leadership development for managers and executives\n- Technical skills training for IT and engineering staff\n- Soft skills workshops (communication, teamwork, time management)\n- Compliance training (safety, harassment, data privacy)\n- Industry-specific certifications and continuing education\n- Online learning platform with progress tracking\n- Custom training content development\n- Training effectiveness measurement and reporting\n\nTarget: 40 hours of training per employee annually. Mix of in-person, virtual, and self-paced learning options. ROI measurement through performance improvements and certification achievements.",
    deadline: "2023-12-31T23:59:59Z",
    status: "Awarded",
    complexityLevel: "Medium",
    documents: [
      { name: "Training Needs Assessment.pdf", url: "/documents/tender-9-assessment.pdf" },
      { name: "Learning Objectives.pdf", url: "/documents/tender-9-objectives.pdf" },
      { name: "Platform Requirements.pdf", url: "/documents/tender-9-platform.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your training methodology and approach", type: "text" as const },
      { id: 2, question: "What learning management system do you use?", type: "text" as const },
      { id: 3, question: "Can you develop custom training content?", type: "dropdown" as const, options: ["Yes", "Limited customization", "No"] },
      { id: 4, question: "How do you measure training effectiveness?", type: "text" as const }
    ]
  },
  {
    id: 10,
    title: "Equipment & Hardware Procurement 2023",
    description: "Annual procurement of IT equipment, office furniture, and operational hardware. This procurement covers:\n\n- Desktop computers and laptops for staff\n- Monitors, keyboards, and peripheral equipment\n- Network equipment (routers, switches, access points)\n- Office furniture (desks, chairs, storage solutions)\n- Conference room equipment (projectors, video systems)\n- Manufacturing equipment and tools\n- Safety equipment and protective gear\n- Maintenance and repair equipment\n\nTotal procurement value: $1.8M annually. Emphasis on energy-efficient equipment and sustainable sourcing. Extended warranty and support services required.",
    deadline: "2023-11-30T23:59:59Z",
    status: "Awarded",
    complexityLevel: "Medium",
    documents: [
      { name: "Equipment Specifications.pdf", url: "/documents/tender-10-specs.pdf" },
      { name: "Quantity Requirements.pdf", url: "/documents/tender-10-quantities.pdf" },
      { name: "Warranty Terms.pdf", url: "/documents/tender-10-warranty.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your equipment sourcing and quality assurance", type: "text" as const },
      { id: 2, question: "What warranty terms do you offer?", type: "dropdown" as const, options: ["3+ years", "2-3 years", "1-2 years", "1 year"] },
      { id: 3, question: "Can you provide energy-efficient alternatives?", type: "dropdown" as const, options: ["Yes, all products", "Most products", "Some products", "No"] },
      { id: 4, question: "Do you offer equipment leasing options?", type: "dropdown" as const, options: ["Yes", "Through partner", "No"] }
    ]
  },

  // 2022 Tenders - All Closed
  {
    id: 11,
    title: "Software Licensing Renewal 2022",
    description: "Enterprise software licensing renewal including Microsoft Office Suite, Adobe Creative Cloud, and specialized business applications. Licensing portfolio includes:\n\n- Microsoft Office 365 Business Premium (500 users)\n- Adobe Creative Cloud for Teams (75 users)\n- Project management software licenses\n- Accounting and ERP system licenses\n- Security software and antivirus protection\n- Database management system licenses\n- Development tools and IDEs\n- Business intelligence and analytics tools\n\nTotal annual licensing cost: $450K. Volume discounts expected. Multi-year agreements preferred for cost stability. Cloud-based solutions prioritized over on-premise installations.",
    deadline: "2022-12-31T23:59:59Z",
    status: "Closed",
    complexityLevel: "Medium",
    documents: [
      { name: "Current License Inventory.pdf", url: "/documents/tender-11-inventory.pdf" },
      { name: "Usage Analytics.pdf", url: "/documents/tender-11-usage.pdf" },
      { name: "Budget Parameters.pdf", url: "/documents/tender-11-budget.pdf" }
    ],
    requirements: [
      { id: 1, question: "Are you an authorized reseller for all listed software?", type: "dropdown" as const, options: ["Yes, all vendors", "Most vendors", "Some vendors", "No"] },
      { id: 2, question: "What volume discounts can you provide?", type: "text" as const },
      { id: 3, question: "Do you offer license optimization consulting?", type: "dropdown" as const, options: ["Yes, included", "Yes, additional fee", "No"] },
      { id: 4, question: "Can you provide multi-year pricing locks?", type: "dropdown" as const, options: ["3+ years", "2 years", "1 year", "Annual only"] }
    ]
  },
  {
    id: 12,
    title: "Marketing Material Production 2022",
    description: "Production of marketing materials including brochures, business cards, promotional items, and trade show materials. Production requirements include:\n\n- Corporate brochures and product catalogs\n- Business cards and letterhead stationery\n- Promotional items (pens, bags, apparel)\n- Trade show banners and display materials\n- Vehicle wraps and outdoor signage\n- Custom packaging and labels\n- Digital marketing assets and graphics\n- Photography and video production services\n\nBrand consistency critical across all materials. Quick turnaround capabilities required for urgent requests. Sustainable printing practices and eco-friendly materials preferred.",
    deadline: "2022-10-31T23:59:59Z",
    status: "Closed",
    complexityLevel: "Medium",
    documents: [
      { name: "Brand Guidelines.pdf", url: "/documents/tender-12-brand.pdf" },
      { name: "Material Specifications.pdf", url: "/documents/tender-12-materials.pdf" },
      { name: "Production Volumes.pdf", url: "/documents/tender-12-volumes.pdf" }
    ],
    requirements: [
      { id: 1, question: "Describe your quality control and brand compliance process", type: "text" as const },
      { id: 2, question: "What is your rush order turnaround time?", type: "dropdown" as const, options: ["24-48 hours", "2-3 days", "3-5 days", "1 week+"] },
      { id: 3, question: "Do you offer sustainable printing options?", type: "dropdown" as const, options: ["Yes, all products", "Most products", "Some products", "No"] },
      { id: 4, question: "Can you provide digital asset management?", type: "dropdown" as const, options: ["Yes", "Basic service", "No"] }
    ]
  }
];
