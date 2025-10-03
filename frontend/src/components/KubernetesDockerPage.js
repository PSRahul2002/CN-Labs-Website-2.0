import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';

const KubernetesDockerPage = () => {
  const openContactForm = () => {
    alert('Contact form would open here');
  };

  const objectives = [
    "Understand container fundamentals and differences from virtual machines.",
    "Build, manage, and optimize Docker containers, images, volumes, and registries.",
    "Configure Docker networking (single host, overlay, service discovery).",
    "Install and configure Kubernetes for orchestration and scaling.",
    "Deploy workloads with Pods, Deployments, ReplicaSets, StatefulSets, DaemonSets.",
    "Secure applications using ConfigMaps, Secrets, and Namespaces.",
    "Perform rolling updates and scaling operations.",
    "Explore advanced Kubernetes concepts including Helm charts and service mesh."
  ];

  const prerequisites = [
    "Basic understanding of software development & deployment lifecycle.",
    "Familiarity with virtualization concepts and fundamental networking.",
    "Hands-on experience with the Linux command line."
  ];

  const courseOutline = [
    {
      day: "Day 1",
      topics: [
        "Introduction: Microservices, DevOps, VMs vs Containers.",
        "Docker Overview: Architecture, workflows, images, Dockerfile, volumes, registries.",
        "Hands-on Labs: Linux namespaces, cgroups, run Docker containers, Docker Compose."
      ]
    },
    {
      day: "Day 2", 
      topics: [
        "Docker Networking: CNM, drivers, single host, overlay networking.",
        "Introduction to Kubernetes: Architecture, workflows, Pods, ReplicaSets, Deployments.",
        "Hands-on Labs: Docker installation, networking, build & push images, deploy services."
      ]
    },
    {
      day: "Day 3",
      topics: [
        "Kubernetes Advanced: StatefulSets, DaemonSets, Autoscalers, Init Containers.",
        "Networking: Services, Ingress, Load Balancer, Network Policies, CNI drivers.", 
        "Production: Workload deployment, namespaces, dashboard, cloud integrations (AWS/Azure/GKE).",
        "Advanced Topics: Helm Charts, Service Mesh, Cloud-Native WAN, Cisco platforms.",
        "Hands-on Labs: Kubernetes installation, multi-tier deployment, configmaps, stateful apps."
      ]
    }
  ];

  const audience = [
    "Software Engineers (Development & Testing)",
    "System & Network Administrators", 
    "DevOps & Cloud Engineers",
    "Technical Leaders, Architects, Managers",
    "Pre-sales, Technical Marketing, and Solutions Engineers"
  ];

  const systemRequirements = [
    "Laptop with Windows/macOS/Linux and at least 8 GB RAM.",
    "Reliable internet connection.",
    "Lab access provided via Criterion SDCloud Portal (no local install required)."
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
              Kubernetes and Docker Container Foundations
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Foundation Level</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Master container technologies with Docker and Kubernetes in this comprehensive 3-day hands-on workshop
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
                  This 3-day, hands-on workshop provides a solid foundation in container technologies, 
                  focusing on Docker and Kubernetes. Participants will learn the differences between 
                  containers and virtual machines, the principles behind containerization, and why 
                  containers are critical in modern DevOps and cloud-native environments.
                </p>
                <p>
                  The course covers Docker fundamentals (architecture, images, networking, volumes, registries), 
                  then advances to Kubernetes — the leading orchestration platform for managing containerized 
                  applications at scale. Guided labs include installing Docker and Kubernetes, building 
                  containerized applications, and deploying multi-tier workloads.
                </p>
              </div>
            </div>
            <div>
              <Card className="border-l-4 border-l-orange-600 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <CheckCircle className="w-6 h-6" />
                    Course Outcome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    By the end of the workshop, you will be able to create, deploy, scale, and manage 
                    applications in Kubernetes-powered environments, and be introduced to advanced 
                    concepts including Helm charts, service mesh, and cloud-native integrations.
                  </p>
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
            <p className="text-xl text-gray-600">What you'll achieve after completing this course</p>
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

      {/* Course Outline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Outline</h2>
            <p className="text-xl text-gray-600">Detailed breakdown of the 3-day curriculum</p>
          </div>
          <div className="space-y-8">
            {courseOutline.map((day, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="bg-blue-900 text-white">
                  <CardTitle className="text-2xl">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Master Container Technologies?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join our comprehensive 3-day workshop and gain hands-on experience with Docker and Kubernetes
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

export default KubernetesDockerPage;