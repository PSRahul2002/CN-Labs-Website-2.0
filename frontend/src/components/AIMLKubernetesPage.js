import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, Users, Target, BookOpen, Settings, Monitor } from 'lucide-react';
import Navbar from './Navbar';

const AIMLKubernetesPage = () => {
  const openContactForm = () => {
    alert('Contact form would open here');
  };

  const objectives = [
    "Understand AI/ML fundamentals and their integration into cloud-native environments.",
    "Deploy AI/ML workloads on Kubernetes using containerized images and persistent storage.",
    "Configure networking and load balancing for AI/ML services.",
    "Train and serve ML models on Kubernetes clusters.",
    "Leverage Generative AI tools within Kubernetes for automation and orchestration.",
    "Apply ML-based anomaly detection and troubleshooting techniques.",
    "Use K8sGPT for proactive diagnostics and cluster insights."
  ];

  const prerequisites = [
    "Working knowledge of Kubernetes fundamentals (pods, deployments, services).",
    "Familiarity with developer tools such as IDEs, VS Code, and GitHub.",
    "Hands-on experience with Kubernetes administration and workloads."
  ];

  const modules = [
    {
      title: "Why AI and ML?",
      topics: [
        "Introduction to AI and ML",
        "Large Language Models (LLM)",
        "AI/ML related databases",
        "How AI and ML services are interfaced"
      ]
    },
    {
      title: "Integration of AI-Specific Container Images",
      topics: [
        "Integrate AI/ML workloads on Kubernetes clusters",
        "Build Persistent Volumes for AI/ML workloads",
        "Build Load Balancer for AI/ML Loads",
        "Training and Serving AI/ML Models",
        "Generative AI tools for Kubernetes",
        "ML-based anomaly detection and orchestration",
        "Using Jupyter Notebook for AI/ML workloads"
      ]
    },
    {
      title: "Introduction to K8sGPT",
      topics: [
        "What is K8sGPT?",
        "Installing and configuring K8sGPT",
        "Using K8sGPT for troubleshooting",
        "Integrating K8sGPT with other tools"
      ]
    }
  ];

  const labOutlines = [
    "ML Model Life Cycle example",
    "Integration of AI-Specific Container Images",
    "Building Persistent Volumes and Load Balancers",
    "Training and Serving AI/ML Models",
    "Generative AI tools for Kubernetes",
    "ML-based anomaly detection and orchestration"
  ];

  const audience = [
    "Core Kubernetes Teams managing clusters and workloads",
    "Cloud-Native Application Developers deploying AI/ML services",
    "Kubernetes Administrators & DevOps Engineers implementing automation",
    "Technical professionals applying AI/ML to cloud-native environments"
  ];

  const systemRequirements = [
    "A modern computer (Windows 10+, macOS, or Linux) with SSH capability",
    "Reliable internet access to connect to cloud-hosted lab environments",
    "Familiarity with the Unix/Linux command line"
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge className="bg-orange-600 text-white px-4 py-2">Foundation Level</Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              1 Day
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI/ML for Kubernetes (Foundation)
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Master the integration of Artificial Intelligence, Machine Learning, and Kubernetes to power 
            next-generation cloud-native applications with hands-on training and real-world use cases.
          </p>
          <Button 
            onClick={openContactForm}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This intensive 1-day workshop explores the integration of AI, ML, and Kubernetes through hands-on labs, 
              case studies, and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build, train, and deploy ML models in Kubernetes clusters with practical exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>K8sGPT Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn intelligent troubleshooting and anomaly detection using K8sGPT.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Monitor className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Real-World Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apply Generative AI tools for automation and orchestration in production environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Objectives</h2>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Prerequisites</h2>
              <ul className="space-y-4">
                {prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Modules
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum covering AI/ML integration with Kubernetes
            </p>
          </div>

          <div className="grid gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Lab Outlines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Lab Outlines</h2>
              <ul className="space-y-4">
                {labOutlines.map((lab, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{lab}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Target Audience</h2>
              <ul className="space-y-4">
                {audience.map((audienceItem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{audienceItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-gray-600">
              What you'll need to participate in this training
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {systemRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI/ML on Kubernetes?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our comprehensive foundation course and learn to deploy, manage, and optimize 
            AI/ML workloads in cloud-native environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openContactForm}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
            >
              Enroll Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            >
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CN Labs</h3>
              <p className="text-gray-400">
                Leading provider of cybersecurity training and certification programs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/training" className="hover:text-white transition-colors">All Courses</a></li>
                <li><a href="/certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/solutions" className="hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="/consulting" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="/automotive" className="hover:text-white transition-colors">Automotive</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CN Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIMLKubernetesPage;