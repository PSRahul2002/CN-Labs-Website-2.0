import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Navbar from './Navbar';

const CybersecurityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Securing Digital Infrastructures for a Trusted Future
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            As organizations expand their digital footprint, cyber threats grow in both complexity and scale. Enterprises, service providers, and technology vendors must not only protect against evolving attacks but also demonstrate compliance with global security standards.
          </p>
          <div className="mb-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              Explore Cybersecurity Services
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At CN Labs, we deliver end-to-end cybersecurity consulting, testing, and certification support. From penetration testing and compliance validation to industry-recognized certifications, our services ensure your systems, products, and networks are secure, resilient, and market-ready.
            </p>
          </div>

          {/* Security Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Security Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* VAPT */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <span className="text-3xl mr-3">🔍</span>
                    Vulnerability Assessment & Penetration Testing (VAPT)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Attackers are constantly probing for weaknesses — CN Labs helps you find them first. We conduct vulnerability scans and penetration tests across applications, infrastructure, and networks to uncover and remediate risks.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-900 font-semibold">🎯 Outcome:</p>
                    <p className="text-blue-800">Early detection of exploitable weaknesses and improved security posture.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Red & Blue Team */}
              <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <span className="text-3xl mr-3">⚔️</span>
                    Red & Blue Team Exercises
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Go beyond checklists with real-world simulation.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">•</span>
                      <p className="text-gray-600"><strong>Red Team:</strong> Simulates advanced persistent threats (APTs) to test resilience against sophisticated attacks.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <p className="text-gray-600"><strong>Blue Team:</strong> Assesses your security team's ability to detect, respond, and recover from attacks.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <p className="text-gray-600"><strong>Purple Team Engagements:</strong> Collaborative exercises to bridge gaps between Red and Blue teams.</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-900 font-semibold">🎯 Outcome:</p>
                    <p className="text-blue-800">Stronger defenses, sharper teams, and a resilient security culture.</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Third-Party Testing */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <span className="text-3xl mr-3">🛡️</span>
                  Third-Party Testing & Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Customers, regulators, and partners demand proof of security. CN Labs provides independent validation to confirm your solutions meet required standards.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600"><strong>Compliance Testing:</strong> Validate adherence to ISO, NIST, and sector-specific frameworks.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600"><strong>Security Benchmarks:</strong> Independent confirmation of resilience against attacks.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600"><strong>Audit Readiness:</strong> Mock evaluations to prepare for certification labs and regulatory audits.</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">🎯 Outcome:</p>
                  <p className="text-blue-800">Trustworthy, independently validated products and systems that inspire market confidence.</p>
                </div>
              </CardContent>
            </Card>

            {/* Product Lifecycle Integration */}
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <span className="text-3xl mr-3">🔄</span>
                  Integration into Product Lifecycle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Security is not a one-time activity — it must be woven into the entire product lifecycle. CN Labs helps integrate security from the design stage through deployment and operations.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600">Secure architecture design reviews</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600">Continuous vulnerability scanning and monitoring</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-gray-600">Security automation and DevSecOps integration</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">🎯 Outcome:</p>
                  <p className="text-blue-800">Reduced rework, lower compliance costs, and products that are secure by design.</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Custom Security Programs */}
          <div className="mb-16">
            <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-2xl text-blue-900">
                  <span className="text-3xl mr-3">🎯</span>
                  Custom Security Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Every organization's risks are unique. CN Labs develops custom security frameworks tailored to your sector, size, and risk profile. Whether you need specialized IoT device testing, cloud security validation, or advanced threat modeling, we create solutions that fit your needs.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">🎯 Outcome:</p>
                  <p className="text-blue-800">A cybersecurity program that grows with your business and evolving threat landscape.</p>
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
              How We Work with Cybersecurity Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to continuous security, we provide comprehensive cybersecurity support throughout your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Identify security gaps, compliance requirements, and risks
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conduct VAPT, Red/Blue Teaming, and compliance simulations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">Certification Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prepare for FIPS, CC, MTCTE, ITSAR, and other certifications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">Validation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Provide third-party attestation of security posture
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-bold text-gray-900 mb-2">Continuous Security</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enable automation and ongoing monitoring
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              With CN Labs, cybersecurity becomes not just a defensive measure but a business enabler for growth and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Protect your systems. Prove your compliance. Build customer trust.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to strengthen your cybersecurity posture with CN Labs expertise?
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
            Request a Security Assessment
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

export default CybersecurityPage;