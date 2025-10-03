import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const TrainingPage = () => {
  const navigate = useNavigate();
  
  const openContactForm = () => {
    // You can implement a contact form modal here
    alert('Contact form would open here');
  };

  const courses = [
    {
      title: "(Foundation) AI/ML for Kubernetes",
      level: "Foundation",
      duration: "1 day",
      description: "A 1-day workshop introducing how AI/ML workloads can be deployed and managed on Kubernetes. Learn AI pipelines, model deployment, and monitoring ML workflows in production-ready environments.",
      link: "/ai-ml-kubernetes"
    },
    {
      title: "(Foundation) Cisco Catalyst SD-WAN Automation Workshop",
      level: "Foundation", 
      duration: "2 days",
      description: "A 2-day hands-on workshop covering Cisco Catalyst SD-WAN automation. Explore APIs, automation workflows, and orchestration tools to make SD-WAN deployments faster, scalable, and easier to manage.",
      link: "/cisco-sdwan-automation"
    },
    {
      title: "(Foundation) Kubernetes & Docker Container Fundamentals",
      level: "Foundation",
      duration: "3 days", 
      description: "A 3-day program providing a solid foundation in containerization. Covers Docker basics, Kubernetes architecture, scaling workloads, and troubleshooting to build confidence in container ecosystems.",
      link: "/kubernetes-docker-foundations"
    },
    {
      title: "(Foundation) AI/ML for Networking Engineers",
      level: "Foundation",
      duration: "1 day",
      description: "A 1-day course tailored for network engineers to apply AI/ML in real-world networking. Learn predictive analytics, anomaly detection, and automation techniques for smarter network operations.",
      link: "/ai-ml-networking-engineers"
    }
  ];

  const attendeeTypes = [
    "Product Security Engineers",
    "Network Architects", 
    "Compliance Managers",
    "QA/Test Engineers",
    "R&D Developers",
    "AI Developers",
    "System Administrators",
    "Technical Consultants"
  ];

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn directly from certification experts and industry practitioners"
    },
    {
      icon: "🧪", 
      title: "Hands-On Labs",
      description: "Practical experience with real-world scenarios and tools"
    },
    {
      icon: "🏅",
      title: "Industry Recognition", 
      description: "Certificates recognized by leading technology organizations"
    },
    {
      icon: "⏱️",
      title: "Flexible Delivery",
      description: "Multiple format options to fit your schedule and learning style"
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Post-training support and access to expert consultation"
    },
    {
      icon: "📄",
      title: "Updated Content",
      description: "Regular updates to reflect latest standards and best practices"
    }
  ];

  const stats = [
    { icon: "👥", number: "200+", label: "Enterprise Deployments" },
    { icon: "⭐", number: "98%", label: "Customer Satisfaction" },
    { icon: "📈", number: "20,000+", label: "Professionals Trained" },
    { icon: "✅", number: "10+", label: "Years Experience" }
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Upskill Your Teams with Expert-Led Trainings
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            We deliver hands-on, technically advanced training programs tailored for engineers, 
            product teams, and compliance professionals to stay ahead of evolving technology standards.
          </p>
          <Button 
            onClick={openContactForm}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Talk To Our Experts
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Track Record of Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over a decade of infrastructure transformation experience with industry-leading results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                <CardContent className="text-center p-6">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <div className="text-2xl text-orange-600">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing, validation, and certification services across the most critical technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">{course.level}</Badge>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">{course.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-orange-600 hover:text-orange-700 p-0"
                    onClick={() => {
                      if (course.link.startsWith('/')) {
                        navigate(course.link);
                      } else {
                        window.open(course.link, '_blank');
                      }
                    }}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our training programs are designed for technical professionals across various roles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {attendeeTypes.map((type, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardContent className="flex items-center justify-center p-4 min-h-[100px]">
                  <Badge 
                    variant="outline" 
                    className="text-sm px-3 py-2 border-0 text-blue-900 bg-gradient-to-r from-blue-50 to-orange-50 hover:from-blue-100 hover:to-orange-100 transition-all duration-300 font-semibold text-center"
                  >
                    {type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why CN Labs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why CN Labs as a Training Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes our training programs stand out from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="text-2xl text-orange-600">{benefit.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">CN Labs</h3>
              <p className="text-blue-200 mb-6 max-w-md">
                Your trusted partner for comprehensive testing and certification services across cutting-edge technologies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="/certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-blue-200 space-y-2">
                <p>Email: info@cnlabsglobal.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
            <p>&copy; 2024 CN Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainingPage;