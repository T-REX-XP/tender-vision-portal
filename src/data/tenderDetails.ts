
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
      { name: "Uniform Specifications.pdf", url: "/documents/tender-1-spec.pdf" },
      { name: "Brand Guidelines.pdf", url: "/documents/tender-1-brand.pdf" },
      { name: "Size Chart Requirements.pdf", url: "/documents/tender-1-sizes.pdf" }
    ],
    requirements: [
      { id: "1", question: "Describe your manufacturing capabilities and quality control processes", type: "text" as const },
      { id: "2", question: "Can you provide sustainable fabric options?", type: "dropdown" as const, options: ["Yes", "No", "Limited options"] },
      { id: "3", question: "What is your typical delivery timeline for bulk orders?", type: "dropdown" as const, options: ["2-4 weeks", "4-6 weeks", "6-8 weeks", "8+ weeks"] },
      { id: "4", question: "Do you offer custom embroidery and branding services?", type: "dropdown" as const, options: ["Yes", "No", "Through partner"] }
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
