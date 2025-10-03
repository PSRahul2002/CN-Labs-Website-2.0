import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, Users, Monitor, CheckCircle, Book, Target } from 'lucide-react';
import Navbar from './Navbar';

const CiscoSDWANPage = () => {
  const openContactForm = () => {
    alert('Contact form would open here');
  };

  const modules = [
    {
      title: "Part 1: Foundations of Catalyst SD-WAN and AI/ML in Networking",
      topics: [
        "Cisco Catalyst SD-WAN Fundamentals (Architecture, Policies, Analytics)",
        "Introduction to AIOps (Scope, Capabilities, Benefits)",
        "SD-WAN Automation (Device Onboarding, Templates, Config Management, Policy Automation, ServiceNow/Splunk integration)"
      ]
    },
    {
      title: "Part 2: Advanced Automation, AI/ML Applications, and Integration",
      topics: [
        "AI-Driven Analytics (Capacity Planning, Bandwidth Forecasting)",
        "Anomaly Detection by AI/ML (KPI insights, Trends, ML-based anomaly detection)",
        "Predictive Analytics (ThousandEyes Integration, Path Recommendations)",
        "Operations & Troubleshooting (Root cause analysis, Self-healing, AI-driven recommendations)",
        "Security (Threat Intelligence, Behavioral Analytics, Segmentation, Threat Response Automation)"
      ]
    }
  ];

  const labs = [
    "Retrieve device inventory using API with Catalyst SD-WAN",
    "Build Python scripts to interact with Cisco Catalyst SD-WAN APIs",
    "Automation Use Cases: Onboarding, Templates, Config Management, Compliance & Remediation",
    "Analytics integration & ThousandEyes insights",
    "Configuring AIOps with Cisco Catalyst SD-WAN Analytics",
    "Implementing AI-driven incident management and anomaly detection",
    "Predictive analytics and ServiceNow/WebHooks process automation"
  ];

  const objectives = [
    "Understand Cisco's Catalyst SD-WAN architecture, key components, and automation capabilities",
    "Explain the role of AIOps in modern IT operations and how AI/ML enhances observability, incident management, and troubleshooting",
    "Automate key SD-WAN operations including device onboarding, configuration, compliance, and policy management",
    "Leverage AI-driven analytics for anomaly detection, predictive insights, and proactive network optimization",
    "Integrate Catalyst SD-WAN with external platforms (ServiceNow, Splunk, ThousandEyes) for unified visibility and automation",
    "Apply hands-on skills to implement AI-driven incident management, security analytics, and self-healing operations"
  ];

  const prerequisites = [
    "Basic understanding of enterprise networking concepts (routing, switching, WAN)",
    "Familiarity with programming or scripting fundamentals (Python basics preferred)",
    "Comfort using the Unix/Linux command line for navigation and scripting"
  ];

  const audience = [
    "Systems Engineers and TAC Engineers",
    "SD-WAN DevOps & Automation Engineers",
    "Field Engineers and Systems Architects",
    "IT Managers and Network Operations Leaders",
    "Professionals integrating AI/ML-driven automation into enterprise networking"
  ];

  const requirements = [
    "Modern computer (Windows 10+, macOS, or Linux) with SSH capability",
    "Reliable internet access to connect to cloud-hosted lab environments",
    "Familiarity with Unix/Linux command line",
    "(Recommended) Prior exposure to scripting or programming"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[420px] lg:h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-center text-white px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/background_training.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="bg-orange-600 text-white mb-4 px-3 py-1">Foundation Level</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cisco Catalyst SD-WAN Automation & AIOps Essentials
          </h1>
          <div className="flex justify-center items-center gap-6 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>2 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Foundation Level</span>
            </div>
          </div>
          <Button 
            onClick={openContactForm}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <Book className="h-6 w-6" />
                Course Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                This 2-day foundation-level workshop introduces participants to Cisco's Catalyst SD-WAN and AIOps capabilities, 
                equipping them with the skills to automate, monitor, and optimize modern enterprise networks. Through Cisco's 
                AI-driven DNA Platform Suite, learners will explore how automation, observability, and predictive analytics 
                transform IT operations into a strategic advantage.
              </p>
              <p>
                The course covers SD-WAN programmability, AI/ML-driven analytics, anomaly detection, and predictive insights. 
                With hands-on labs, participants gain practical experience in automating device onboarding, policy creation, 
                configuration management, and integrating with ITSM systems like ServiceNow and Splunk.
              </p>
            </CardContent>
          </Card>

          {/* Objectives */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Course Outline */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {modules.map((module, index) => (
                    <div key={index} className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lab Outlines */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <Monitor className="h-6 w-6" />
                Lab Outlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {labs.map((lab, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="bg-orange-600 text-white text-sm font-semibold px-2 py-1 rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{lab}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites and Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Target Audience */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {audience.map((aud, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{aud}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your SD-WAN Operations?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join this comprehensive workshop and master Cisco's cutting-edge automation and AIOps capabilities.
              </p>
              <Button 
                onClick={openContactForm}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
              >
                Contact Our Training Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CN Labs</h3>
              <p className="text-gray-400">
                Leading cybersecurity and technology training provider.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="/training" className="text-gray-400 hover:text-white transition-colors">Training</a></li>
                <li><a href="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/consulting" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
                <li><a href="/automotive" className="text-gray-400 hover:text-white transition-colors">Automotive Security</a></li>
                <li><a href="/networking" className="text-gray-400 hover:text-white transition-colors">Networking</a></li>
                <li><a href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@cn-labs.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, Innovation City, IC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CN Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CiscoSDWANPage;