
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackoutLanding3 = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Packout & Content Restoration Experts | CBRS Group</title>
        <meta name="description" content="Professional packout services with guaranteed results. Expert content management, restoration, and storage for contractors and property owners." />
      </Helmet>
      
      {/* Hero with Video Background Style */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631382180449-6f2457fa37f3?auto=format&fit=crop&q=80&w=2970')] 
          bg-cover bg-center"
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-cbrs-orange/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block mb-6">
              <span className="text-cbrs-orange font-semibold">✓ Insurance Approved Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Save Your Belongings<br />
              <span className="text-cbrs-orange">After Property Damage</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Professional packout and content management services that maximize recovery and minimize loss. Trusted by contractors and insurance companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/schedule?service=packout-management">
                <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90 text-white">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+13462986933">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: (346) 298-6933
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <span>24/7 Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Problem:</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Property damage can destroy irreplaceable belongings within hours</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Improper packing leads to additional damage and insurance disputes</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">DIY packout often results in permanent loss of valuable items</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Solution:</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">Professional assessment and immediate damage prevention</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">Specialized packing materials and techniques for each item type</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">Climate-controlled storage with detailed inventory tracking</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">Expert restoration using industry-leading techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 italic">
              "CBRS Group saved thousands of dollars worth of our belongings after the flood. Their attention to detail and professional restoration work was incredible. I thought everything was lost, but they brought most items back to like-new condition."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">Sarah Mitchell</p>
              <p>Houston Homeowner</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing/Value Section */}
      <section className="py-20 bg-cbrs-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Most Insurance Companies Cover 100% of Packout Costs</h2>
            <p className="text-xl mb-8 text-orange-100">
              Don't pay out of pocket for professional packout services. We work directly with your insurance company to ensure coverage and handle all the paperwork.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Direct Billing</h3>
                <p className="text-orange-100">We bill your insurance company directly - no upfront costs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Free Estimates</h3>
                <p className="text-orange-100">Complete assessment and estimate at no charge</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Guaranteed Work</h3>
                <p className="text-orange-100">100% satisfaction guarantee on all restoration services</p>
              </div>
            </div>
            
            <Link to="/schedule?service=packout-management">
              <Button size="xl" className="bg-white text-cbrs-orange hover:bg-gray-100">
                Schedule Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackoutLanding3;
