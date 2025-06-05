
export const tenderDetails = [
  // 2025 Tenders - Some Open, Some Closing Soon
  {
    id: "1",
    title: "Corporate Uniform Supply 2025-2027",
    description: "Supply of corporate uniforms for all front-line staff including shirts, jackets, and accessories. This comprehensive uniform program covers:\n\n- Professional polo shirts and dress shirts in corporate colors\n- Blazers and jackets for customer-facing roles\n- Seasonal variations for summer and winter collections\n- Accessories including ties, scarves, and name badges\n- Size range from XS to 5XL to accommodate all employees\n- Sustainable and eco-friendly fabric options\n- Custom embroidery with company logo and employee names\n\nAll uniforms must meet corporate brand guidelines and provide professional appearance standards. Fabrics should be durable, easy-care, and suitable for business environment.",
    deadline: "2025-03-15T23:59:59Z",
    status: "Open",
    complexityLevel: "Medium",
    documents: [
      { name: "Request for Quotation.pdf", url: "/documents/tender-1-spec.pdf" },
      { name: "Brand Book.pdf", url: "/documents/tender-1-brand.pdf" },
  //    { name: "Size Chart Requirements.pdf", url: "/documents/tender-1-sizes.pdf" }
    ],
    requirements: [
      { id: "1", question: "Ability to Handle Last-Minute Requests - Vendor should be able to accommodate short-notice orders (under 24 hours) for up to 30 people.", type: "dropdown" as const, options: ["Yes", "No", "Limited capacity"], mandatory: false },
      { id: "2", question: "Compliance with Food Safety Standards - Vendor must comply with all local and EU food hygiene and safety regulations.", type: "dropdown" as const, options: ["Yes, fully compliant", "Working towards compliance", "Need assistance with compliance"], mandatory: true },
      { id: "3", question: "Cost per Person - Bidders must provide clear pricing per person, including breakdowns for different menu levels.", type: "text" as const, mandatory: true },
      { id: "4", question: "Digital Ordering Platform - An online platform or app for internal teams to place, modify, or cancel orders is preferred.", type: "dropdown" as const, options: ["Yes, available", "No", "In development"], mandatory: false },
      { id: "5", question: "Experience with Corporate Catering - Vendor should demonstrate experience handling corporate events and staff functions throughout the year.", type: "text" as const, mandatory: false },
      { id: "6", question: "On-Time Delivery - Food must be delivered to specified locations at least 15 minutes before the scheduled event start time.", type: "dropdown" as const, options: ["Yes, guaranteed", "Yes, best effort", "Cannot guarantee"], mandatory: true },
      { id: "7", question: "Provision of Serving Staff - Vendor should be able to provide serving staff for formal events upon request.", type: "dropdown" as const, options: ["Yes", "No", "Through partner"], mandatory: false },
      { id: "8", question: "References from Similar Clients - Bidders should include at least 2 references from companies with similar catering needs.", type: "text" as const, mandatory: false },
      { id: "9", question: "Sustainability Practices - Preference for vendors that use recyclable packaging, local ingredients, or offer waste minimization.", type: "text" as const, mandatory: false },
      { id: "10", question: "Variety of Menu Options - Vendor must provide a wide selection of menu options including vegetarian, vegan, gluten-free, and allergy-friendly meals.", type: "text" as const, mandatory: true }
    ]
  },
  {
    id: "2",
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
      { id: "1", question: "Describe your experience with integrated marketing campaigns", type: "text" as const },
      { id: "2", question: "What analytics and reporting tools do you use?", type: "text" as const },
      { id: "3", question: "Can you provide campaign performance guarantees?", type: "dropdown" as const, options: ["Yes", "No", "Performance-based pricing"] },
      { id: "4", question: "What is your approach to multi-channel attribution?", type: "text" as const }
    ]
  }
];
