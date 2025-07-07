
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Package, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackoutLanding2 = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Emergency Packout & Storage | CBRS Group</title>
        <meta name="description" content="24/7 emergency packout services. Professional content management, secure storage, and restoration coordination for water, fire, and storm damage." />
      </Helmet>
      
      {/* Split Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-cbrs-orange to-orange-600 flex items-center justify-center p-8">
          <div className="text-white max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Emergency<br />
              Packout<br />
              <span className="text-white/80">Services</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              When disaster strikes your property, every minute counts. Our emergency packout team is ready 24/7 to protect and preserve your valuable belongings.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Package className="h-6 w-6" />
                </div>
                <span className="text-lg">Professional Packing & Inventory</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <span className="text-lg">Secure Climate-Controlled Storage</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-lg">Restoration Service Coordination</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/schedule?service=packout-management">
                <Button size="xl" className="bg-white text-cbrs-orange hover:bg-gray-100 w-full sm:w-auto">
                  Schedule Emergency Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18326327225">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-cbrs-orange w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1574358329850-383cf65469c8?auto=format&fit=crop&q=80&w=2970" 
            alt="Professional packout team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cbrs-orange mb-2">24/7</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cbrs-orange mb-2">500+</div>
              <div className="text-gray-600">Successful Packouts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cbrs-orange mb-2">95%</div>
              <div className="text-gray-600">Items Safely Stored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cbrs-orange mb-2">100%</div>
              <div className="text-gray-600">Insurance Approved</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e3046] mb-16">What We Pack & Store</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Furniture & Upholstery", desc: "Professional packing and secure storage of all furniture types", icon: "🪑" },
              { title: "Electronics & Appliances", desc: "Specialized handling and climate-controlled storage", icon: "📺" },
              { title: "Documents & Photos", desc: "Careful preservation and archival storage", icon: "📄" },
              { title: "Clothing & Textiles", desc: "Proper packing and humidity-controlled storage", icon: "👔" },
              { title: "Art & Collectibles", desc: "Museum-quality packing and security storage", icon: "🎨" },
              { title: "Kitchen Items", desc: "Sanitized packing and organized storage", icon: "🍽️" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1e3046] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Need restoration services? We coordinate with trusted restoration specialists.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
              <p className="text-blue-800 font-medium">Restoration services are coordinated separately and may involve additional specialists.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-[#1e3046] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Damage Gets Worse Over Time</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The longer your belongings sit in damaged conditions, the harder they become to restore. Our emergency packout services prevent further damage and preserve restoration potential.
          </p>
          <Link to="/schedule?service=packout-management">
            <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90">
              Schedule Emergency Packout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackoutLanding2;
