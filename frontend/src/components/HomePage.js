import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ArrowRight, Shield, Network, Brain, Car, Globe, Users, Clock, CheckCircle } from 'lucide-react';
import mockData from '../data/mock';
import Navbar from './Navbar';

const HomePage = () => {
  useEffect(() => {
    // Auto-scroll carousel every 3 seconds
    const interval = setInterval(() => {
      const nextButton = document.querySelector('[data-carousel="next"]');
      if (nextButton) {
        nextButton.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-96 md:h-[420px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Trusted Test & Certification Partner for Future-Ready Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We are a multi-accredited test and certification lab empowering the future of networking and cybersecurity with trusted validation for 250+ OEMs across three continents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/solutions">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing and certification services across cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.services.map((service, index) => {
              const icons = [Shield, Network, Brain, Car];
              const IconComponent = icons[index];
              return (
                <Card key={service.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-blue-900">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies across multiple industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {mockData.industries.map((industry) => {
              const icons = { Telecom: Network, Automotive: Car, AI: Brain };
              const IconComponent = icons[industry.name] || Globe;
              return (
                <div key={industry.id} className="group">
                  <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CN Labs */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why CN Labs</h2>
            <p className="text-xl text-blue-200">Your trusted partner for comprehensive testing and certification</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.whyChooseUs.map((reason, index) => {
              const icons = [Globe, Users, Clock, CheckCircle];
              const IconComponent = icons[index];
              return (
                <div key={reason.id} className="text-center group">
                  <div className="mx-auto mb-4 p-4 bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-blue-200">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-gray-600">Recognized by leading industry bodies worldwide</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {mockData.certifications.map((cert) => (
                  <CarouselItem key={cert.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-2">
                      <Card className="border-2 border-blue-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg bg-white">
                        <CardContent className="flex items-center justify-center p-6 min-h-[120px]">
                          <Badge 
                            variant="outline" 
                            className="text-lg px-4 py-2 border-0 text-blue-900 bg-gradient-to-r from-blue-50 to-orange-50 hover:from-blue-100 hover:to-orange-100 transition-all duration-300 font-semibold"
                          >
                            {cert.name}
                          </Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="bg-white border-blue-300 hover:bg-blue-50 hover:border-orange-400 text-blue-900" 
                data-carousel="prev"
              />
              <CarouselNext 
                className="bg-white border-blue-300 hover:bg-blue-50 hover:border-orange-400 text-blue-900" 
                data-carousel="next"
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Certifications Image (inserted after Certifications & Accreditations) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <img
              src="/Infographic.png"
              alt="Certifications and Accreditations"
              className="mx-auto w-full md:w-1/2 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest developments and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.news.map((article) => (
              <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-gray-500">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <Button variant="link" className="text-orange-600 hover:text-orange-700 p-0 mt-3">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Need help navigating certifications or building a secure system?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let our experts guide you through the certification process and help you achieve compliance faster.
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
              <a href="/" className="inline-block mb-4">
                <img src="/images/CN_Labs_Logo.png" alt="CN Labs" className="h-10 w-auto" />
              </a>
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

export default HomePage;
