const mockData = {
  services: [
    {
      id: 1,
      name: "Cybersecurity",
      offerings: [
        "Industry Certifications",
        "VAPT (Vulnerability Assessment and Penetration Testing)",
        "3rd Party Testing (FIPS, CC, EURED, BIS, ITSAR)",
        "Security Compliance Assessment",
        "Threat Modeling & Risk Analysis"
      ]
    },
    {
      id: 2,
      name: "Advanced Networking",
      offerings: [
        "5G Network Testing",
        "IPv6 (USGv6) Certification",
        "Wireless Protocol Testing",
        "IoT Device Validation",
        "SDWAN/SASE Solutions",
        "Network Virtualization Testing"
      ]
    },
    {
      id: 3,
      name: "AI & Machine Learning",
      offerings: [
        "AI Model Testing & Validation",
        "Machine Learning Algorithm Assessment",
        "AI Training Programs",
        "Ethical AI Compliance",
        "AI Performance Benchmarking"
      ]
    },
    {
      id: 4,
      name: "Automotive",
      offerings: [
        "Automotive VAPT",
        "TARA (Threat Analysis & Risk Assessment)",
        "Connected Vehicle Security",
        "Automotive Cybersecurity Standards",
        "ECU Testing & Validation"
      ]
    }
  ],

  industries: [
    {
      id: 1,
      name: "Telecom",
      description: "Comprehensive testing solutions for telecom infrastructure, 5G networks, and communication protocols."
    },
    {
      id: 2,
      name: "Automotive",
      description: "Cutting-edge security testing for connected vehicles, autonomous systems, and automotive electronics."
    },
    {
      id: 3,
      name: "AI",
      description: "Advanced validation and testing services for artificial intelligence and machine learning systems."
    }
  ],

  whyChooseUs: [
    {
      id: 1,
      title: "Global Certifications Support",
      description: "Comprehensive support for international certification requirements across multiple regions and standards."
    },
    {
      id: 2,
      title: "Deep Protocol & Stack Expertise",
      description: "Extensive knowledge and experience across networking protocols and technology stacks."
    },
    {
      id: 3,
      title: "Flexible Lab Environments",
      description: "Both virtual and on-site testing capabilities to meet your specific requirements and timelines."
    },
    {
      id: 4,
      title: "Faster Time to Compliance",
      description: "Streamlined processes and expert guidance to accelerate your certification and compliance journey."
    }
  ],

  certifications: [
    { id: 1, name: "ISO/IEC 17025" },
    { id: 2, name: "FIPS 140-2" },
    { id: 3, name: "Common Criteria" },
    { id: 4, name: "EURED" },
    { id: 5, name: "BIS" },
    { id: 6, name: "ITSAR" },
    { id: 7, name: "USGv6" },
    { id: 8, name: "5G Certification" },
    { id: 9, name: "IoT Security" },
    { id: 10, name: "Automotive Cybersecurity" }
  ],

  news: [
    {
      id: 1,
      title: "CN Labs Achieves New 5G Testing Certification",
      date: "January 15, 2024",
      excerpt: "We're proud to announce our latest accreditation for 5G network testing, expanding our capabilities in next-generation wireless technologies."
    },
    {
      id: 2,
      title: "Partnership with Leading Automotive Manufacturer",
      date: "December 22, 2023",
      excerpt: "CN Labs partners with a major automotive company to provide comprehensive cybersecurity testing for their next generation of connected vehicles."
    },
    {
      id: 3,
      title: "AI Model Testing Program Launch",
      date: "November 30, 2023",
      excerpt: "Introducing our new AI model testing and validation services to help organizations ensure the reliability and safety of their artificial intelligence systems."
    }
  ]
};

export default mockData;