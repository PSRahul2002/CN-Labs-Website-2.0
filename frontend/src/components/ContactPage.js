import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navbar from './Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const callNow = () => {
    // Default to India office number
    window.location.href = 'tel:+918041529444';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Talk — We're Here to Help You
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400">
              Validate, Certify & Accelerate
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Connect with CN Labs to discuss your testing and certification needs. Our experts are 
              ready to guide you through your compliance journey and help you achieve your goals faster.
            </p>
            <Button 
              onClick={callNow}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-full"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="bg-blue-900 text-white">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a topic</option>
                        <option value="certification">Certification Services</option>
                        <option value="training">Training Programs</option>
                        <option value="consulting">Consulting Services</option>
                        <option value="automotive">Automotive Security</option>
                        <option value="networking">Advanced Networking</option>
                        <option value="cybersecurity">Cybersecurity Solutions</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                        placeholder="Tell us about your project, requirements, or questions..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg rounded-lg"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardHeader className="bg-orange-600 text-white">
                  <CardTitle className="text-2xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Call Us</p>
                        <div className="space-y-1">
                          <div>
                            <span className="text-sm text-gray-500">India:</span>
                            <a href="tel:+918041529444" className="text-blue-600 hover:underline ml-2">
                              +91 804152-9444
                            </a>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">USA:</span>
                            <a href="tel:+14087157754" className="text-blue-600 hover:underline ml-2">
                              +1 (408) 715-7754
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email Us</p>
                        <a href="mailto:info@cnlabsglobal.com" className="text-blue-600 hover:underline">
                          info@cnlabsglobal.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Visit Us - India Office</p>
                        <p className="text-gray-600">
                          #3, Ground Floor, Explorer<br />
                          ITPL, Whitefield<br />
                          Bangalore 560 066, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Visit Us - USA Office</p>
                        <p className="text-gray-600">
                          #5201 Great America Pkwy #260<br />
                          Santa Clara, CA 95054, USA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600">
                          <span className="font-medium">India & USA:</span><br />
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          (Local office time)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose CN Labs */}
              <Card className="shadow-lg">
                <CardHeader className="bg-blue-900 text-white">
                  <CardTitle className="text-2xl">Why Choose CN Labs?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>Expert team with industry-leading certifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>Comprehensive testing and validation services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>Customized training programs for your team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>End-to-end consulting and support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>Proven track record with global clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our offices in India and USA</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* India Office Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">India Office - Bangalore</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8531280789847!2d77.72980731482187!3d12.972445190854208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ac2dd01e17%3A0x5f1b1b1b1b1b1b1b!2sInternational%20Tech%20Park%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CN Labs India Office Location"
                />
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg shadow">
                <p className="text-gray-700">
                  <strong>Address:</strong><br />
                  #3, Ground Floor, Explorer<br />
                  ITPL, Whitefield<br />
                  Bangalore 560 066, India<br /><br />
                  <strong>Hours:</strong> Mon-Fri 9:00AM - 6:00PM<br />
                  <strong>Phone:</strong> <a href="tel:+918041529444" className="text-blue-600 hover:underline">+91 804152-9444</a><br />
                  <strong>Email:</strong> <a href="mailto:info@cnlabsglobal.com" className="text-blue-600 hover:underline">info@cnlabsglobal.com</a>
                </p>
              </div>
            </div>
            
            {/* USA Office Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">USA Office - Santa Clara</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0894847838157!2d-121.9872308240479!3d37.34106643464857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc9b7b1b9b9b%3A0x5201%20Great%20America%20Pkwy!2s5201%20Great%20America%20Pkwy%2C%20Santa%20Clara%2C%20CA%2095054%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CN Labs USA Office Location"
                />
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg shadow">
                <p className="text-gray-700">
                  <strong>Address:</strong><br />
                  #5201 Great America Pkwy #260<br />
                  Santa Clara, CA 95054, USA<br /><br /><br />
                  <strong>Hours:</strong> Mon-Fri 9:00AM - 6:00PM<br />
                  <strong>Phone:</strong> <a href="tel:+14087157754" className="text-blue-600 hover:underline">+1 (408) 715-7754</a><br />
                  <strong>Email:</strong> <a href="mailto:info@cnlabsglobal.com" className="text-blue-600 hover:underline">info@cnlabsglobal.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss how CN Labs can help accelerate your certification and compliance goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={callNow}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg rounded-full"
              onClick={() => document.getElementById('name').focus()}
            >
              Send Message
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
              <div className="flex space-x-4">
                <a href="tel:+918041529444" className="text-gray-300 hover:text-white transition-colors" title="Call India Office">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@cnlabsglobal.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="/certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/consulting" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="/automotive" className="hover:text-white transition-colors">Automotive Security</a></li>
                <li><a href="/networking" className="hover:text-white transition-colors">Advanced Networking</a></li>
                <li><a href="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</a></li>
              </ul>
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

export default ContactPage;