const resourcesData = {
  whitepapers: [
    {
      id: 'wp1',
      type: 'whitepaper',
      title: 'FIPS 140-2 Compliance: A Comprehensive Guide for Modern Cryptographic Modules',
      description: 'Complete methodology for achieving FIPS 140-2 certification covering security requirements, testing procedures, and common implementation challenges.',
      author: 'Dr. Sarah Chen',
      date: 'January 2024',
      pages: '32',
      category: 'Cybersecurity',
      tags: ['FIPS 140-2', 'Cryptography', 'Compliance', 'Security Testing']
    },
    {
      id: 'wp2',
      type: 'whitepaper',
      title: '5G Network Security Testing: Protocols, Vulnerabilities, and Validation Frameworks',
      description: 'In-depth analysis of 5G security architectures, common vulnerabilities, and comprehensive testing methodologies for next-generation networks.',
      author: 'Michael Rodriguez',
      date: 'December 2023',
      pages: '28',
      category: 'Networking',
      tags: ['5G', 'Network Security', 'Protocols', 'Validation']
    },
    {
      id: 'wp3',
      type: 'whitepaper',
      title: 'AI Model Validation: Bias Detection and Performance Benchmarking Best Practices',
      description: 'Comprehensive framework for testing AI/ML models including bias detection methodologies, performance metrics, and regulatory compliance considerations.',
      author: 'Dr. Aisha Patel',
      date: 'November 2023',
      pages: '45',
      category: 'Artificial Intelligence',
      tags: ['AI Testing', 'Bias Detection', 'ML Validation', 'Performance']
    },
    {
      id: 'wp4',
      type: 'whitepaper',
      title: 'Automotive Cybersecurity: TARA Implementation and ISO/SAE 21434 Compliance',
      description: 'Practical guide to implementing Threat Analysis and Risk Assessment (TARA) processes and achieving automotive cybersecurity compliance.',
      author: 'James Thompson',
      date: 'October 2023',
      pages: '38',
      category: 'Automotive',
      tags: ['TARA', 'ISO 21434', 'Automotive Security', 'Risk Assessment']
    },
    {
      id: 'wp5',
      type: 'whitepaper',
      title: 'Common Criteria Evaluation: Security Targets and Protection Profiles Strategy',
      description: 'Strategic approach to Common Criteria certification including security target development, protection profile selection, and evaluation processes.',
      author: 'Dr. Elena Kozlov',
      date: 'September 2023',
      pages: '41',
      category: 'Cybersecurity',
      tags: ['Common Criteria', 'Security Evaluation', 'CC Certification']
    },
    {
      id: 'wp6',
      type: 'whitepaper',
      title: 'IPv6 Transition and USGv6 Testing: Implementation Roadmap for Enterprise Networks',
      description: 'Comprehensive guide to IPv6 adoption strategies, USGv6 compliance requirements, and testing methodologies for large-scale enterprise deployments.',
      author: 'Robert Kim',
      date: 'August 2023',
      pages: '35',
      category: 'Networking',
      tags: ['IPv6', 'USGv6', 'Network Migration', 'Enterprise']
    }
  ],

  blogs: [
    {
      id: 'blog1',
      type: 'blog',
      title: '10 Critical IoT Security Testing Checkpoints Every Developer Should Know',
      description: 'Essential security testing practices for IoT device development, covering common vulnerabilities and practical testing approaches.',
      author: 'Lisa Zhang',
      date: 'February 2024',
      readTime: '8 min read',
      category: 'IoT Security',
      tags: ['IoT', 'Security Testing', 'Device Security', 'Best Practices']
    },
    {
      id: 'blog2',
      type: 'blog',
      title: 'The Future of SDWAN Testing: Automation and AI-Driven Validation',
      description: 'Exploring emerging trends in SDWAN testing methodologies, including automated testing frameworks and AI-powered network validation.',
      author: 'Carlos Mendez',
      date: 'February 2024',
      readTime: '6 min read',
      category: 'Networking',
      tags: ['SDWAN', 'Test Automation', 'AI Testing', 'Network Validation']
    },
    {
      id: 'blog3',
      type: 'blog',
      title: 'Breaking Down AI Explainability: Testing for Transparency and Trust',
      description: 'Understanding AI explainability requirements and testing methodologies to ensure transparent and trustworthy AI systems.',
      author: 'Dr. Amanda Foster',
      date: 'January 2024',
      readTime: '10 min read',
      category: 'AI Ethics',
      tags: ['AI Explainability', 'Transparency', 'Trust', 'AI Testing']
    },
    {
      id: 'blog4',
      type: 'blog',
      title: 'Connected Vehicle Security: Lessons from Recent Penetration Testing',
      description: 'Real-world insights from automotive penetration testing engagements and key security considerations for connected vehicle development.',
      author: 'David Park',
      date: 'January 2024',
      readTime: '7 min read',
      category: 'Automotive',
      tags: ['Connected Vehicles', 'Penetration Testing', 'Automotive Security']
    },
    {
      id: 'blog5',
      type: 'blog',
      title: 'Wireless Protocol Testing: Wi-Fi 6E and Beyond',
      description: 'Comprehensive overview of testing methodologies for next-generation wireless protocols, focusing on Wi-Fi 6E performance and security.',
      author: 'Jennifer Liu',
      date: 'December 2023',
      readTime: '9 min read',
      category: 'Wireless',
      tags: ['Wi-Fi 6E', 'Wireless Testing', 'Protocol Validation', 'Performance']
    },
    {
      id: 'blog6',
      type: 'blog',
      title: 'Zero Trust Architecture Testing: Validation Strategies for Modern Networks',
      description: 'Practical approaches to testing Zero Trust network architectures, including verification methodologies and common implementation challenges.',
      author: 'Mark Johnson',
      date: 'December 2023',
      readTime: '11 min read',
      category: 'Network Security',
      tags: ['Zero Trust', 'Network Architecture', 'Security Testing']
    }
  ],

  insights: [
    {
      id: 'insight1',
      type: 'insight',
      title: '2024 Cybersecurity Certification Trends: What to Expect',
      description: 'Analysis of emerging cybersecurity certification requirements and their impact on product development and testing strategies.',
      author: 'Security Research Team',
      date: 'March 2024',
      readTime: '5 min read',
      category: 'Market Analysis',
      tags: ['Certification Trends', 'Cybersecurity', 'Market Analysis', '2024']
    },
    {
      id: 'insight2',
      type: 'insight',
      title: 'Regulatory Updates: Impact of New EU Cyber Resilience Act on Testing Requirements',
      description: 'Key implications of the EU Cyber Resilience Act for product testing, certification processes, and compliance timelines.',
      author: 'Regulatory Affairs Team',
      date: 'February 2024',
      readTime: '4 min read',
      category: 'Regulatory',
      tags: ['EU CRA', 'Regulations', 'Compliance', 'Cyber Resilience']
    },
    {
      id: 'insight3',
      type: 'insight',
      title: 'AI Governance Frameworks: Global Standards Landscape 2024',
      description: 'Comparative analysis of emerging AI governance frameworks worldwide and their implications for AI system testing and validation.',
      author: 'AI Policy Research Group',
      date: 'February 2024',
      readTime: '6 min read',
      category: 'AI Governance',
      tags: ['AI Governance', 'Global Standards', 'Policy', 'Frameworks']
    },
    {
      id: 'insight4',
      type: 'insight',
      title: 'Quantum-Safe Cryptography: Preparing for Post-Quantum Testing',
      description: 'Strategic considerations for transitioning to quantum-resistant cryptographic systems and associated testing challenges.',
      author: 'Quantum Security Lab',
      date: 'January 2024',
      readTime: '7 min read',
      category: 'Quantum Security',
      tags: ['Quantum-Safe', 'Post-Quantum', 'Cryptography', 'Future Tech']
    },
    {
      id: 'insight5',
      type: 'insight',
      title: 'Supply Chain Security Testing: New Requirements and Best Practices',
      description: 'Evolution of supply chain security testing requirements and practical approaches to vendor assessment and validation.',
      author: 'Supply Chain Security Team',
      date: 'December 2023',
      readTime: '8 min read',
      category: 'Supply Chain',
      tags: ['Supply Chain Security', 'Vendor Assessment', 'Risk Management']
    },
    {
      id: 'insight6',
      type: 'insight',
      title: 'Edge Computing Security: Testing Challenges and Solutions',
      description: 'Unique security testing considerations for edge computing environments, including distributed validation strategies.',
      author: 'Edge Security Research',
      date: 'November 2023',
      readTime: '6 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'Distributed Security', 'Testing Challenges']
    }
  ]
};

export default resourcesData;