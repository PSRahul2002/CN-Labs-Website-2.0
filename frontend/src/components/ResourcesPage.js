import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowRight, FileText, BookOpen, Lightbulb, Download, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import resourcesData from '../data/resourcesData';
import Navbar from './Navbar';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResources = selectedCategory === 'all' 
    ? [...resourcesData.whitepapers, ...resourcesData.blogs, ...resourcesData.insights]
    : resourcesData[selectedCategory] || [];

  const getResourceIcon = (type) => {
    switch(type) {
      case 'whitepaper': return <FileText className="h-5 w-5" />;
      case 'blog': return <BookOpen className="h-5 w-5" />;
      case 'insight': return <Lightbulb className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getResourceColor = (type) => {
    switch(type) {
      case 'whitepaper': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'insight': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
            <source src="/videos/background_resources.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Technical Insights, Case Studies, and Standards Expertise from CN Labs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Stay informed with practical resources to help you navigate complex technologies, certification paths, and security requirements — all curated by our experts.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
            Subscribe for Updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Resource Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources covering the latest in testing, certification, and technology validation
            </p>
          </div>
          
          {/* Resource Filter Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="all" className="text-sm">All Resources</TabsTrigger>
              <TabsTrigger value="whitepapers" className="text-sm">Whitepapers</TabsTrigger>
              <TabsTrigger value="blogs" className="text-sm">Blogs</TabsTrigger>
              <TabsTrigger value="insights" className="text-sm">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...resourcesData.whitepapers, ...resourcesData.blogs, ...resourcesData.insights].map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${getResourceColor(resource.type)} flex items-center gap-1`}>
                          {getResourceIcon(resource.type)}
                          {resource.type}
                        </Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {resource.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-blue-900 group-hover:text-orange-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          {resource.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Tag className="h-3 w-3 mr-1" />
                          {resource.category}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {resource.type === 'whitepaper' ? (
                          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="whitepapers" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourcesData.whitepapers.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Whitepaper
                        </Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {resource.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-blue-900 group-hover:text-orange-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          {resource.author}
                        </div>
                        <div className="text-sm text-gray-500">{resource.pages} pages</div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blogs" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourcesData.blogs.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          Blog Post
                        </Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {resource.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-blue-900 group-hover:text-orange-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          {resource.author}
                        </div>
                        <div className="text-sm text-gray-500">{resource.readTime}</div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Full Article
                      </Button>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourcesData.insights.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-orange-100 text-orange-800 flex items-center gap-1">
                          <Lightbulb className="h-4 w-4" />
                          Insight
                        </Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {resource.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-blue-900 group-hover:text-orange-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          {resource.author}
                        </div>
                        <div className="text-sm text-gray-500">{resource.readTime}</div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Insight
                      </Button>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Need help applying any of these frameworks to your product?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our technical experts can guide you through implementation, certification requirements, and best practices for your specific use case.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Contact Our Technical Team
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
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#whitepapers" className="hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="#blogs" className="hover:text-white transition-colors">Blog Posts</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Technical Insights</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
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

export default ResourcesPage;