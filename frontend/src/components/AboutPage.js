import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Navbar from './Navbar';

const AboutPage = () => {
  const trustPoints = [
    {
      icon: "🛡️",
      title: "Trust & Security First",
      description: "We prioritize compliance and safety."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Supporting clients across North America, Europe, and Asia."
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Expertise in AI, 5G, IoT, and automotive technologies."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "Working alongside vendors, startups, and regulators."
    }
  ];

  const coreValues = [
    {
      icon: "🏆",
      title: "Excellence",
      description: "Commitment to delivering the highest quality testing and certification services"
    },
    {
      icon: "💡", 
      title: "Innovation",
      description: "Continuously advancing our capabilities to stay ahead of technology trends"
    },
    {
      icon: "🛡️",
      title: "Integrity", 
      description: "Maintaining the highest standards of professional ethics and transparency"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Building long-term relationships based on trust and mutual success"
    }
  ];

  const teamMembers = [
    {
      name: "Jaya Prakash",
      role: "CEO",
      initial: "J"
    },
    {
      name: "Praveen Sivakumar", 
      role: "Business Development",
      initial: "P"
    },
    {
      name: "Jayesh Purohith",
      role: "Engineering Lead", 
      initial: "J"
    },
    {
      name: "Krishna",
      role: "Sales",
      initial: "S"
    }
  ];

  const accreditations = [
    {
      icon: "🔒",
      title: "Cybersecurity",
      items: [
        "FIPS 140-3 Accredited Lab",
        "Common Criteria Test Lab", 
        "BIS Recognized Lab",
        "ITSAR Certified"
      ]
    },
    {
      icon: "🌐",
      title: "Networking",
      items: [
        "IPv6 Ready Logo Test Lab",
        "USGv6 Approved Vendor",
        "5G Testing Certified", 
        "IoT Protocol Testing"
      ]
    },
    {
      icon: "🚗",
      title: "Automotive", 
      items: [
        "ISO/SAE 21434 Certified",
        "UNECE WP.29 Approved",
        "Automotive VAPT Specialist",
        "TARA Certified"
      ]
    },
    {
      icon: "📜",
      title: "Quality & Management",
      items: [
        "ISO 9001:2015",
        "ISO/IEC 17025",
        "ISO 27001",
        "CMMI Level 3"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "CN Labs has been an essential partner in our compliance journey. Their expertise in cybersecurity testing gave us the confidence we needed to launch.",
      name: "Marie Johnson",
      role: "CTO, Tech Innovations",
      initial: "M"
    },
    {
      quote: "The team at CN Labs goes above and beyond. They met our expectations and even exceeded them. We couldn't be happier with their services.",
      name: "James Smith", 
      role: "CEO, Future Tech Corp",
      initial: "J"
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[420px] lg:h-[500px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center py-16 md:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Empowering Innovation with <span className="text-blue-900">Deep Expertise</span> in Testing & Certification
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              CN Labs is a globally trusted provider of cybersecurity, networking, AI, and automotive testing solutions — 
              helping companies achieve compliance, security, and performance through rigorous, standards-based validation.
            </p>
            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium">
                Talk to Our Experts
              </Button>
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
                View Certifications
              </Button>
            </div>
          </div>
          {/* Right Side Illustration */}
          <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
              <div className="text-6xl">🔬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="text-2xl text-orange-600">{point.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with the vision to <span className="font-semibold text-orange-600">bridge the gap between technology innovation and regulatory compliance</span>, 
              CN Labs has grown into a trusted partner for enterprises worldwide.  
              From <span className="font-semibold text-orange-600">cybersecurity testing</span> to <span className="font-semibold text-orange-600">AI validation</span> and{' '}
              <span className="font-semibold text-orange-600">automotive security</span>, we provide cutting-edge solutions that meet today's compliance challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                  <div className="text-2xl text-orange-600">🎯</div>
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  To accelerate innovation by providing world-class testing, validation, and certification services that help our clients bring secure, compliant, and reliable products to market faster.
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                  <div className="text-2xl text-orange-600">🌐</div>
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  To be the global leader in emerging technology testing and certification, setting the standard for excellence in cybersecurity, networking, AI, and automotive domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="text-2xl text-orange-600">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Our leadership team combines decades of experience in cybersecurity, networking, compliance, and emerging technologies.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.initial}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Partnerships</h2>
            <p className="text-lg text-gray-600">Globally recognized certifications and industry partnerships</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {accreditations.map((accred, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="text-2xl text-orange-600">{accred.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">{accred.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {accred.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">At CN Labs, we pride ourselves on delivering exceptional service. But don't just take our word for it—hear from our satisfied clients.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
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

export default AboutPage;