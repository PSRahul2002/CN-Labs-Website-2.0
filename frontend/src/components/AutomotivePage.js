import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Navbar from './Navbar';

const AutomotivePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Automotive Security
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Driving Trust in Connected & Autonomous Vehicles
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Modern vehicles are no longer mechanical machines — they are complex, connected computing platforms. With the rise of EVs, connected cars, and autonomous driving systems, the risk landscape has expanded dramatically. At CN Labs, we help automotive OEMs and suppliers ensure their vehicles meet global safety, security, and compliance standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From penetration testing to Threat Analysis and Risk Assessment (TARA) and regulatory compliance such as ISO 21434, our services ensure vehicles are safe, resilient, and road-ready.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Automotive VAPT */}
            <Card className="h-full hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  {/*<span className="text-3xl">🚗</span>*/}
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Automotive VAPT
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vulnerability Assessment & Penetration Testing
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Vehicles are now prime targets for cyberattacks — from infotainment systems to telematics and ECU communication. CN Labs simulates real-world attack scenarios to uncover vulnerabilities before hackers do.
                </p>
                <div className="text-gray-700 text-sm leading-relaxed">
                  <p className="font-semibold mb-2">Our Automotive VAPT services include:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• End-to-end penetration testing of automotive systems</li>
                    <li>• CAN bus, telematics, over-the-air updates testing</li>
                    <li>• Vehicle communication channels exploit identification</li>
                    <li>• Compliance-aligned mitigation strategies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* TARA */}
            <Card className="h-full hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  {/*<span className="text-3xl">🛡️</span>*/}
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Threat Analysis & Risk Assessment (TARA)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  CN Labs applies structured TARA methodologies to help manufacturers assess and mitigate cyber risks in compliance with ISO 21434.
                </p>
                <div className="text-gray-700 text-sm leading-relaxed mb-4">
                  <p className="font-semibold mb-2">We deliver:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Comprehensive mapping of assets, threats, and vulnerabilities</li>
                    <li>• Impact analysis based on likelihood and severity</li>
                    <li>• Prioritized security roadmap for risk mitigation</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  By embedding TARA early in the vehicle development lifecycle, we help OEMs reduce costly redesigns and accelerate certification.
                </p>
              </CardContent>
            </Card>

            {/* Connected Vehicle Security */}
            <Card className="h-full hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  {/*<span className="text-3xl">🔗</span>*/}
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Connected Vehicle Security Testing
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  As vehicles evolve into connected ecosystems, regulatory bodies are mandating stringent compliance requirements. CN Labs guides clients through global standards and certifications.
                </p>
                <div className="text-gray-700 text-sm leading-relaxed mb-4">
                  <p className="font-semibold mb-2">We provide support for:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• ISO 21434 – Road vehicles cybersecurity engineering</li>
                    <li>• UNECE WP.29 – Cybersecurity & Software Update Management</li>
                    <li>• Integration of compliance checkpoints into development</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our consulting reduces complexity and ensures smooth certification.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Custom Test Environments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {/*<span className="text-4xl">🏭</span>*/}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Custom Test Environments for Automotive
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Many automotive clients need dedicated labs to validate vehicle systems under controlled but realistic conditions. CN Labs designs custom test environments that simulate connected vehicle ecosystems, enabling repeatable and automated security testing.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These labs allow OEMs and suppliers to validate new features while maintaining compliance with evolving standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How We Work with Automotive Clients
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Evaluate current systems and identify risk exposure
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🧪</div>
                  <h3 className="font-bold text-gray-900 mb-2">Testing</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Conduct VAPT, TARA, and compliance checks
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">⚙️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Recommend fixes and integrate security into pipelines
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="font-bold text-gray-900 mb-2">Certification</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Prepare for ISO 21434 and UNECE WP.29 compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-bold text-gray-900 mb-2">Continuous Security</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Enable monitoring and ongoing updates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            With CN Labs, automotive security becomes a strategic enabler — not just a compliance checkbox.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            "Secure your vehicles today for the connected roads of tomorrow."
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
            Talk to an Automotive Security Expert
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

export default AutomotivePage;