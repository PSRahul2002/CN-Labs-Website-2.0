import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Shield, Network, Brain, Car, Settings, CheckCircle, Star, Target, Zap } from 'lucide-react';
import solutionsData from '../data/solutionsData';
import Navbar from './Navbar';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/background_solutions.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Comprehensive Testing, Validation & Certification Solutions for Next-Gen Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We support product development teams and regulatory compliance specialists with deep technical services across cybersecurity, networking, AI, and automotive domains
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Core Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized testing and certification services tailored for your industry needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Cybersecurity */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {/*<span className="text-2xl mr-3">🔒</span>*/}
                  Cybersecurity
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Comprehensive security testing, validation, and certification services for critical systems.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• Industry Certifications Support (FIPS, CC, EURED, BIS, ITSAR, MTCTE)</li>
                  <li>• Security Services (VAPT, Red & Blue Team)</li>
                  <li>• 3rd Party Testing & Validation</li>
                </ul>
              </div>
              <a href="/cybersecurity" className="inline-block">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                  Explore Testing Services
                </Button>
              </a>
            </div>

            {/* Advanced Networking */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {/*<span className="text-2xl mr-3">🌐</span>*/}
                  Advanced Networking
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Next-generation networking protocol testing and validation for modern infrastructure.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• Pre-cert assessments (FIPS, CC, BIS, ITSAR, USGv6, MTCTE)</li>
                  <li>• ETSI 303645</li>
                  <li>• IPv6 Readiness & Compliance (USGv6)</li>
                  <li>• Wireless, IoT, SDWAN / SASE</li>
                  <li>• Network Virtualization & Automation</li>
                </ul>
              </div>
              <a href="/networking" className="inline-block">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                  Get Certification Support
                </Button>
              </a>
            </div>

            {/* Automotive Security */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {/*<span className="text-2xl mr-3">🚗</span>*/}
                  Automotive Security
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Comprehensive cybersecurity for connected and autonomous vehicles.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• ISO 21434 & UNECE WP.29 Compliance</li>
                  <li>• Automotive VAPT & Threat Analysis</li>
                  <li>• ECU, CAN Bus & Telematics Testing</li>
                  <li>• Custom Lab Setup & Automation</li>
                </ul>
              </div>
              <a href="/automotive" className="inline-block">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                  Secure Connected Vehicles
                </Button>
              </a>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {/*<span className="text-2xl mr-3">🤖</span>*/}
                  AI & Machine Learning
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Comprehensive AI model testing, validation, and training services.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• Model Testing & Validation</li>
                  <li>• Performance, Bias & Compliance Checks</li>
                  <li>• AI/ML Training Programs</li>
                  <li>• MLOps, Automation & AIOps</li>
                </ul>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                Explore AI Services
              </Button>
            </div>

            {/* Consulting & Custom Solutions */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {/*<span className="text-2xl mr-3">🧩</span>*/}
                  Consulting & Custom Solutions
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Tailored testing and compliance strategies for startups and enterprises.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• Technology Assessment & Strategy</li>
                  <li>• Threat Modeling & Risk Analysis (TARA)</li>
                  <li>• Product Lifecycle Standards Alignment</li>
                  <li>• Custom Lab Setup & Automation</li>
                </ul>
              </div>
              <a href="/consulting" className="inline-block">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                  Explore Our Custom Solutions
                </Button>
              </a>
            </div>

            {/* AI Services */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Services
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Tailored testing and compliance strategies for startups and enterprises.
                </p>
                <ul className="text-gray-700 text-sm leading-relaxed mb-5 ml-4 space-y-1">
                  <li>• Technology Assessment & Strategy</li>
                  <li>• Threat Modeling & Risk Analysis (TARA)</li>
                  <li>• Product Lifecycle Standards Alignment</li>
                  <li>• Custom Lab Setup & Automation</li>
                </ul>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                Explore Our Custom Solutions
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Audit Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit and testing services to ensure your systems meet the highest standards
            </p>
          </div>
          
          {/* Audit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Security Auditing */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔍</span>
                  Security Auditing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive security audits and compliance assessments
                </p>
              </div>
            </div>

            {/* Protocol Testing */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🧪</span>
                  Protocol Testing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deep protocol stack testing and validation services
                </p>
              </div>
            </div>

            {/* Custom Testing */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">⚙️</span>
                  Custom Testing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored testing solutions for unique requirements
                </p>
              </div>
            </div>

            {/* Compliance Support */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">📋</span>
                  Compliance Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  End-to-end compliance journey guidance
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Need help deciding which service fits your team?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experts will assess your requirements and recommend the optimal testing and certification strategy for your project.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#cybersecurity" className="hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#networking" className="hover:text-white transition-colors">Advanced Networking</a></li>
                <li><a href="#ai" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
                <li><a href="#automotive" className="hover:text-white transition-colors">Automotive Testing</a></li>
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

export default SolutionsPage;