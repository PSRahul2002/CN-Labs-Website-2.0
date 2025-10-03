import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, Users, CheckCircle, Target, Brain } from 'lucide-react';
import Navbar from './Navbar';

const AIMLNetworkingPage = () => {
  const openContactForm = () => {
    alert('Contact form would open here');
  };

  const objectives = [
    "Analyze and visualize network data using AI/ML-driven tools.",
    "Understand and apply core machine learning algorithms in a networking context.",
    "Leverage AI to optimize network performance and resource utilization.",
    "Detect and respond to security threats with AI-based anomaly detection and predictive analytics.",
    "Use network analytics platforms to derive actionable insights.",
    "Communicate network insights effectively to stakeholders through reports and dashboards."
  ];

  const prerequisites = [
    "Basic knowledge of enterprise networking concepts (routing, switching, protocols).",
    "Familiarity with data analysis concepts and visualization tools.",
    "Introductory understanding of machine learning fundamentals.",
    "Comfort with the Linux command line and a modern IDE or code editor."
  ];

  const skillsGained = [
    "Network data analysis and visualization",
    "Knowledge of machine learning algorithms and techniques",
    "AI technologies for network performance optimization",
    "Understanding of network security and threat detection using AI",
    "Experience with network analytics tools and platforms",
    "Ability to interpret and present network insights to stakeholders"
  ];

  const audience = [
    "Network Engineers & Administrators integrating AI/ML into network operations",
    "Infrastructure & Operations Teams monitoring and optimizing enterprise networks",
    "Network Architects leveraging AI-driven insights for design and capacity planning",
    "Security Analysts applying AI/ML for anomaly detection and threat response",
    "Technical Managers & IT Leaders understanding AI/ML in networking"
  ];

  const systemRequirements = [
    "Laptop running Windows, macOS, or Linux with at least 8 GB RAM",
    "Reliable internet connectivity and a modern web browser",
    "Lab environments provisioned via Criterion SDCloud Portal (no local installation required)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-600 text-white mb-4 px-4 py-2 text-sm font-semibold">
              Foundation Level
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI/ML for Networking Engineers
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>1 Day</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Foundation Level</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>AI/ML Focus</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Harness the power of AI and Machine Learning to transform network operations and security
            </p>
            <Button 
              onClick={openContactForm}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Description</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  This 1-day hands-on workshop introduces networking professionals to the practical 
                  applications of Artificial Intelligence (AI) and Machine Learning (ML) in modern 
                  network environments. Participants will learn how AI/ML can enhance network visibility, 
                  streamline operations, and strengthen security through predictive analytics and anomaly detection.
                </p>
                <p>
                  Through real-world case studies and guided labs, attendees will explore how AI-powered 
                  tools analyze network data, optimize performance, and detect threats in real time. By 
                  the end of the workshop, learners will be equipped with the skills to apply AI/ML 
                  techniques to network monitoring, troubleshooting, and decision-making, helping 
                  future-proof their careers in the era of intelligent networking.
                </p>
              </div>
            </div>
            <div>
              <Card className="border-l-4 border-l-orange-600 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Target className="w-6 h-6" />
                    Workshop Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Real-world case studies and guided labs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      AI-powered network analysis tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Predictive analytics for network optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Threat detection and anomaly analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
            <p className="text-xl text-gray-600">What you'll achieve after completing this workshop</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Gained Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills You Will Gain</h2>
            <p className="text-xl text-gray-600">Practical skills to advance your networking career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsGained.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{skill}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites & Audience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-blue-900 text-white">
                <CardTitle className="text-2xl">Target Audience</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {audience.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
            <p className="text-xl text-gray-600">What you'll need for the hands-on labs</p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {systemRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Network Operations with AI?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join our intensive 1-day workshop and learn to apply AI/ML techniques to modern networking challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openContactForm}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg rounded-full"
            >
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">CN Labs</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of cybersecurity training, consulting, and certification services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="/certifications" className="hover:text-white transition-colors">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                Get in touch with our experts for customized training solutions.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CN Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIMLNetworkingPage;