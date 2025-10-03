import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Target, Shield, Settings, CheckCircle, Lightbulb, Users, Zap } from 'lucide-react';
import Navbar from './Navbar';

const ConsultingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Consulting and Custom Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Tailored Testing, Compliance, and Strategy for Every Business
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Every organization's technology journey is unique. At CN Labs, we don't believe in one-size-fits-all services — we design customized solutions that align with your business goals, regulatory requirements, and product development lifecycle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether you're a startup bringing a product to market or a global enterprise modernizing critical systems, our consultants provide the expertise to guide you every step of the way.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Tailored Testing Services */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  Tailored Testing Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  No two products are the same — which is why CN Labs delivers bespoke testing programs. We adapt our methodologies to your product's architecture, regulatory environment, and deployment model.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From compliance pre-checks to advanced validation frameworks, our testing ensures your solutions are robust, secure, and ready for market.
                </p>
              </CardContent>
            </Card>

            {/* Technology Assessment & Strategy */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
                  Technology Assessment & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Launching a product or scaling into new markets requires a clear strategy. Our consultants work with your teams to assess existing technologies, identify gaps, and align your roadmaps with both business outcomes and compliance standards.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600 font-medium">We help answer questions like:</p>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>• What certifications will you need for target markets?</li>
                    <li>• How can your infrastructure be optimized for performance and security?</li>
                    <li>• What's the right balance between speed to market and regulatory assurance?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* TARA Section */}
          <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-900">
                <Shield className="h-8 w-8 text-orange-600 mr-3" />
                Threat Modeling & Risk Analysis (TARA)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In today's threat landscape, proactive risk analysis is essential. CN Labs applies methodologies like TARA to help enterprises and automotive vendors understand vulnerabilities before they become real-world issues.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Our approach identifies:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Potential threats across your product lifecycle
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Attack vectors and security gaps
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Risk mitigation strategies tailored to your environment
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 leading-relaxed">
                    This ensures compliance with standards like ISO 21434 while also safeguarding brand reputation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom Lab Setup */}
          <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white mb-16">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-900">
                <Settings className="h-8 w-8 text-orange-600 mr-3" />
                Custom Lab Setup & Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enterprises often need internal labs for continuous testing, validation, or regulatory audits. CN Labs helps design and deploy custom labs that replicate certification environments, automate testing pipelines, and reduce operational overhead.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Custom Testbed Design</h4>
                  <p className="text-gray-600 text-sm">For networking, AI, and cybersecurity</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Automated Testing</h4>
                  <p className="text-gray-600 text-sm">Regression and compliance testing frameworks</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Knowledge Transfer</h4>
                  <p className="text-gray-600 text-sm">For in-house engineering teams</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">How We Work: Flexible Engagement Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adapt to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Advisory Consulting</h3>
                <p className="text-gray-600">
                  Strategic guidance for compliance and product readiness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Co-Creation</h3>
                <p className="text-gray-600">
                  Working alongside your teams to design, test, and validate solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Managed Services</h3>
                <p className="text-gray-600">
                  End-to-end execution of testing, certification prep, and lifecycle management.
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Whatever the model, CN Labs delivers actionable outcomes — not just reports.
            </p>
            <p className="text-xl font-semibold text-blue-900 mb-8">
              From compliance consulting to full custom lab design, CN Labs helps enterprises innovate with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our consulting and custom solutions can accelerate your technology journey.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Contact Our Experts
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

export default ConsultingPage;