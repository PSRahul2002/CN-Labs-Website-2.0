import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Shield, Network, Car, X } from 'lucide-react';
import Navbar from './Navbar';

const CertificationsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openForm = () => setShowModal(true);
  const closeForm = () => setShowModal(false);

  const cybersecurityCertifications = [
    {
      icon: "🔒",
      title: "FIPS 140-3",
      description: "Federal Information Processing Standard for cryptographic modules",
      details: "Hardware and software security validation"
    },
    {
      icon: "🛡️",
      title: "Common Criteria (CC)",
      description: "International standard for computer security certification",
      details: "EAL1-EAL7 evaluation assurance levels"
    },
    {
      icon: "🇮🇳",
      title: "BIS Certification (India)",
      description: "Bureau of Indian Standards certification for India market",
      details: "Mandatory compliance for Indian market entry"
    },
    {
      icon: "🇮🇳",
      title: "ITSAR (India)",
      description: "Indian Telecom Security Assurance Requirements",
      details: "Security assurance standards for telecom equipment & infrastructure"
    },
    {
      icon: "🇪🇺",
      title: "EU RED",
      description: "European Union Radio Equipment Directive certification",
      details: "EMC, Radio spectrum, and health & safety compliance"
    }
  ];

  const networkingCertifications = [
    {
      icon: "🇺🇸",
      title: "USGv6",
      description: "US Government IPv6 certification program",
      details: "IPv6 capability and interoperability validation"
    },
    {
      icon: "🌐",
      title: "IPv6 Ready Logo",
      description: "Global IPv6 certification and testing program",
      details: "Core protocols, IPsec, IKEv2, and advanced features"
    }
  ];

  const automotiveCertifications = [
    {
      icon: "🚗",
      title: "UNECE WP.29",
      description: "UN regulation for automotive cybersecurity and software updates",
      details: "Cybersecurity Management System (CSMS) certification"
    },
    {
      icon: "🛡️",
      title: "ISO/SAE 21434",
      description: "Automotive cybersecurity engineering standard",
      details: "Lifecycle cybersecurity management for road vehicles"
    }
  ];

  const readinessServices = [
    {
      icon: "📊",
      title: "Gap Analysis",
      description: "Comprehensive assessment of current state vs. certification requirements"
    },
    {
      icon: "🧪",
      title: "Pre-Certification Testing",
      description: "Thorough testing before formal certification to ensure success"
    },
    {
      icon: "📄",
      title: "Documentation Support",
      description: "Complete documentation packages and evidence preparation"
    },
    {
      icon: "🏢",
      title: "Lab Coordination",
      description: "Direct coordination with accredited certification bodies worldwide"
    }
  ];

  const howWeHelp = [
    {
      icon: "🌐",
      title: "Experience with Global Labs",
      description: "Direct relationships with certification bodies worldwide for faster processing"
    },
    {
      icon: "🛡️",
      title: "Deep Protocol Knowledge",
      description: "Comprehensive understanding of standards and implementation requirements"
    },
    {
      icon: "🤝",
      title: "End-to-End Engagement",
      description: "Complete support from initial assessment through final certification"
    },
    {
      icon: "⏱️",
      title: "Shorter Time to Market",
      description: "Streamlined processes and expertise reduce certification timelines significantly"
    }
  ];

  const certificationProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Requirements analysis and gap identification.",
      icon: "📊"
    },
    {
      step: "02", 
      title: "Test Planning",
      description: "Comprehensive test strategy development.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Pre‑Testing", 
      description: "Internal validation and preparation.",
      icon: "✅"
    },
    {
      step: "04",
      title: "Formal Testing",
      description: "Official certification testing execution.",
      icon: "🖥️"
    },
    {
      step: "05",
      title: "Certification",
      description: "Final certification and documentation.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/background_certifications.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Accelerate Your Product's Compliance Journey with Global Certification Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            CN Labs enables faster and more efficient certification across cybersecurity, networking, and safety domains. We support pre-cert testing, documentation, lab coordination, and readiness for global programs.
          </p>
          <Button 
            onClick={openForm}
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Talk To a Compliance Specialist
          </Button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-orange-600 transition-colors"
            >
              <X size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  placeholder="Rahul"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  placeholder="rahul@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input 
                  type="text" 
                  placeholder="CN Labs"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  placeholder="Want to enquire about FIPS"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Global Certification Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Certification Support
          </h2>
          <h5 className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            We support certification across multiple domains with deep expertise in international standards and requirements
          </h5>
        </div>
      </section>

      {/* Cybersecurity Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Shield className="h-8 w-8 text-blue-900 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Cybersecurity Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityCertifications.map((cert, index) => (
              <Card key={index} className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{cert.description}</p>
                  <p className="text-gray-600 text-sm">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Network className="h-8 w-8 text-blue-900 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Networking Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {networkingCertifications.map((cert, index) => (
              <Card key={index} className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{cert.description}</p>
                  <p className="text-gray-600 text-sm">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automotive Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Car className="h-8 w-8 text-blue-900 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Automotive Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {automotiveCertifications.map((cert, index) => (
              <Card key={index} className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{cert.description}</p>
                  <p className="text-gray-600 text-sm">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Readiness */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certification Readiness
          </h2>
          <h5 className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Comprehensive preparation services to ensure certification success
          </h5>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readinessServices.map((service, index) => (
              <Card key={index} className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Help
          </h2>
          <h5 className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            What makes CN Labs your ideal certification partner
          </h5>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelp.map((help, index) => (
              <Card key={index} className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{help.icon}</span>
                    {help.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{help.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certification Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Certification Process
          </h2>
          <h5 className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Streamlined approach to certification success
          </h5>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200 hidden md:block"></div>
              
              <div className="space-y-8">
                {certificationProcess.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Step marker */}
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="bg-orange-50 rounded-lg p-6 text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                          <span className="mr-3">{step.icon}</span>
                          {step.step} · {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
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

export default CertificationsPage;