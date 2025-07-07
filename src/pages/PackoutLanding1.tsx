import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackoutLanding1 = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Professional Packout Services | CBRS Group</title>
        <meta name="description" content="Expert packout and content management services for property damage restoration. Secure storage, detailed inventory, and professional restoration." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=2970')] 
          bg-cover bg-center opacity-40"
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional<br />
            <span className="text-cbrs-orange">Packout Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            When disaster strikes, we safely pack, store, and coordinate restoration of your belongings with meticulous care and professional expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/schedule?service=packout-management">
              <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90 text-white">
                Schedule Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+18326327225">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 632-7225
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="h-12 w-12 text-cbrs-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p>Climate-controlled facility with 24/7 monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-12 w-12 text-cbrs-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p>Emergency packout services available 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="h-12 w-12 text-cbrs-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Insurance Approved</h3>
              <p>Complete documentation for insurance claims</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e3046] mb-16">Our Proven Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "Complete evaluation and damage assessment" },
              { step: "2", title: "Pack & Document", desc: "Professional packing with detailed inventory" },
              { step: "3", title: "Secure Storage", desc: "Climate-controlled storage facility" },
              { step: "4", title: "Restoration Services", desc: "Coordinate specialized cleaning & repair" },
              { step: "5", title: "Return", desc: "Complete return and placement service" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-cbrs-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3046] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#1e3046] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Belongings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let property damage turn into total loss. Our expert packout services ensure your belongings are safely preserved and professionally coordinated for restoration.
          </p>
          <Link to="/schedule?service=packout-management">
            <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackoutLanding1;
