import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Navbar from './Navbar';

const NetworkingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced Networking Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Building Secure, Compliant, and Future-Ready Networks
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            The world runs on connectivity — from 5G rollouts to enterprise SD-WAN, cloud, and IoT ecosystems. But innovation also demands compliance with international standards and assurance of robust security. CN Labs helps enterprises, telecom providers, and vendors validate, optimize, and secure their networks while preparing for global certification.
          </p>
          <div className="mb-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              Get Networking Certification Support
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Advanced Networking services combine deep technical expertise with compliance-driven consulting, ensuring your solutions are ready for both the market and the regulator.
            </p>
          </div>

          {/* Pre-Certification Assessments Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Pre-Certification Assessments</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Certification delays cost time, money, and market share. CN Labs helps you avoid setbacks by conducting pre-certification assessments across key standards. We identify gaps, simulate official test conditions, and guide you through remediation steps — ensuring you pass on the first attempt.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* FIPS */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-900">
                    <span className="text-2xl mr-3">�</span>
                    FIPS
                  </CardTitle>
                  <p className="text-sm text-gray-600">Federal Information Processing Standards</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    CN Labs provides pre-validation testing for networking and cryptographic components that fall under FIPS 140-3 requirements. We evaluate modules, security policies, and evidence documents to prepare you for accredited lab testing.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                    <p className="text-blue-800 text-sm">Reduced certification risk and faster approval from NIST-recognized labs.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Common Criteria */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-900">
                    <span className="text-2xl mr-3">📋</span>
                    Common Criteria (CC)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    We assist in aligning your networking products with the right Protection Profiles and developing a Security Target (ST) that meets evaluation criteria. Our experts review architecture, collect evidence, and conduct functional testing before official lab submission.
                  <br/></p><br />
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                    <p className="text-blue-800 text-sm">Smoother evaluations and alignment with global Common Criteria requirements.</p>
                  </div>
                </CardContent>
              </Card>

              {/* MTCTE */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-900">
                    <span className="text-2xl mr-3">🇮🇳</span>
                    MTCTE
                  </CardTitle>
                  <p className="text-sm text-gray-600">Mandatory Testing & Certification - India</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    For vendors targeting the Indian telecom market, CN Labs provides MTCTE readiness assessments. We map your product against TEC requirements, coordinate with Indian test labs, and guide regulatory filing.
                  </p><br />
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                    <p className="text-blue-800 text-sm">Accelerated compliance and market entry into India's telecom ecosystem.</p>
                  </div>
                </CardContent>
              </Card>

              {/* ITSAR */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-900">
                    <span className="text-2xl mr-3">🛡️</span>
                    ITSAR
                  </CardTitle>
                  <p className="text-sm text-gray-600">Information Technology Security Assessment</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    CN Labs performs ITSAR pre-assessments for IT and telecom devices, evaluating your security assurance level against standard criteria. We conduct mock audits, documentation reviews, and evidence checks.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                    <p className="text-blue-800 text-sm">Early issue detection and improved audit readiness.</p>
                  </div>
                </CardContent>
              </Card>

              {/* USGv6 */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-900">
                    <span className="text-2xl mr-3">🇺🇸</span>
                    USGv6
                  </CardTitle>
                  <p className="text-sm text-gray-600">IPv6 Compliance - US Government</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    USGv6 certification is mandatory for vendors selling networking equipment to U.S. government agencies. CN Labs conducts IPv6 functionality, interoperability, and conformance testing to prepare products for accredited lab validation.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                    <p className="text-blue-800 text-sm">USGv6-compliant networking solutions ready for federal deployments.</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* 5G Network Testing */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">�</span>
                  5G Network Testing & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  5G introduces complex challenges in latency, throughput, and interoperability. CN Labs provides validation for performance, compliance, and optimization of 5G core and edge components.
                </p>
                <p className="text-gray-600 text-sm">
                  We test across multiple layers: RAN, core, and device interactions, ensuring seamless user experiences and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            {/* IPv6 Readiness */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">🌐</span>
                  IPv6 Readiness & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The global transition to IPv6 is accelerating. CN Labs helps enterprises and vendors migrate networks, validate dual-stack environments, and ensure compliance with adoption frameworks like USGv6.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                  <p className="text-blue-800 text-sm">Future-proof networking systems ready for IPv6-driven markets.</p>
                </div>
              </CardContent>
            </Card>

            {/* Wireless Solutions */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">📡</span>
                  Wireless Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Our wireless consulting covers Wi-Fi 6/6E, LTE, and private wireless networks. We evaluate spectrum utilization, interference, security, and performance tuning.
                </p><br />
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                  <p className="text-blue-800 text-sm">Optimized wireless deployments with secure, scalable architectures.</p>
                </div>
              </CardContent>
            </Card>

            {/* IoT Integration */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">🔗</span>
                  IoT Integration & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Billions of IoT devices create new risks. CN Labs helps integrate and secure IoT endpoints within enterprise and telecom environments, testing for vulnerabilities, interoperability, and scalability.
                </p><br /><br />
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                  <p className="text-blue-800 text-sm">Secure IoT ecosystems ready for enterprise and industrial use.</p>
                </div>
              </CardContent>
            </Card>

            {/* SD-WAN & SASE */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">☁️</span>
                  SD-WAN & SASE Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  We design, test, and validate SD-WAN and SASE solutions that balance performance, cost, and security. CN Labs helps enterprises adopt cloud-driven architectures with confidence.
                </p><br /><br />
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                  <p className="text-blue-800 text-sm">Resilient, policy-driven networking that supports hybrid work and cloud adoption.</p>
                </div>
              </CardContent>
            </Card>

            {/* Network Virtualization */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <span className="text-2xl mr-3">⚙️</span>
                  Network Virtualization & Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  CN Labs assists enterprises in adopting virtualization (NFV) and automation frameworks to improve agility and reduce operational costs. Our testing ensures interoperability and performance across virtualized environments.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-900 font-semibold text-sm">🎯 Outcome:</p>
                  <p className="text-blue-800 text-sm">Faster service delivery and efficient network operations.</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Work with Networking Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pre-assessment to optimization, we provide comprehensive networking support throughout your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gap analysis for certifications and compliance requirements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Validation & Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Functional, performance, and security evaluations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certification Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Preparation and documentation for regulatory submission
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing tuning, monitoring, and automation
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              With CN Labs, you don't just get networking services — you gain a partner for compliance, innovation, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Future-proof your networking solutions with CN Labs expertise
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get comprehensive testing, compliance, and optimization for your networking infrastructure.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
            Talk to a Networking Consultant
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
                <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="/certifications" className="hover:text-white transition-colors">Certifications</a></li>
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

export default NetworkingPage;