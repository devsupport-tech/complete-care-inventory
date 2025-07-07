
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock, Shield, Users, CheckCircle, Package, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackoutLanding4 = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Complete Packout Solutions | CBRS Group</title>
        <meta name="description" content="Full-service packout and content storage. From emergency response to restoration coordination - we handle the storage while specialists handle restoration." />
      </Helmet>
      
      {/* Clean, Minimalist Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-cbrs-orange/10 text-cbrs-orange rounded-full px-4 py-2 inline-block mb-6 font-semibold">
                Houston's Trusted Packout Experts
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#1e3046] mb-6 leading-tight">
                Complete
                <br />
                <span className="text-cbrs-orange">Packout</span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                When property damage threatens your belongings, our comprehensive packout service provides complete protection from start to finish. We pack, store, and coordinate restoration with professional care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/schedule?service=packout-management">
                  <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90">
                    Start Your Packout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18326327225">
                  <Button size="xl" variant="outline" className="border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046] hover:text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    (832) 632-7225
                  </Button>
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-cbrs-orange mb-2">2 Hrs</div>
                  <div className="text-sm text-gray-600">Average Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cbrs-orange mb-2">500+</div>
                  <div className="text-sm text-gray-600">Successful Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cbrs-orange mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cbrs-orange/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2811" 
                alt="Professional packout team organizing belongings"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">Everything You Need in One Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive packout solution handles every aspect of content management and storage, coordinating with restoration specialists when needed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Emergency Response",
                desc: "Immediate response to prevent further damage to your belongings"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Professional Packing",
                desc: "Expert packing and detailed inventory documentation"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Storage",
                desc: "Climate-controlled facility with advanced security systems"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Restoration Coordination",
                desc: "We coordinate with certified restoration specialists"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-cbrs-orange mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1e3046] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">Simple, Stress-Free Process</h2>
            <p className="text-xl text-gray-600">From emergency call to final return - here's how we handle everything</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cbrs-orange/30"></div>
              
              {[
                { step: "1", title: "Emergency Call", desc: "Call us 24/7 and we'll dispatch a team immediately", time: "Immediate" },
                { step: "2", title: "Assessment", desc: "On-site evaluation and detailed documentation", time: "Day 1" },
                { step: "3", title: "Pack & Transport", desc: "Professional packing and secure transport to our facility", time: "Day 1-2" },
                { step: "4", title: "Secure Storage", desc: "Climate-controlled storage with inventory tracking", time: "Ongoing" },
                { step: "5", title: "Restoration Coordination", desc: "We coordinate with certified restoration specialists as needed", time: "As Needed" },
                { step: "6", title: "Return & Placement", desc: "Complete return and placement when your property is ready", time: "Final Day" }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-cbrs-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1e3046]">{item.title}</h3>
                        <div className="text-sm text-cbrs-orange font-medium">{item.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cbrs-orange rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Distinction */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#1e3046] mb-12">Understanding Our Services</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Package className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">Our Packout & Storage Service</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Emergency response and damage assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Professional packing with detailed inventory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Secure climate-controlled storage facility</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Complete return and placement service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">Restoration Services</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  When your items need restoration (cleaning, repair, refinishing), we coordinate with certified restoration specialists who handle this specialized work.
                </p>
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-sm text-orange-800 font-medium">
                    Restoration services are provided by specialists and billed separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-[#1e3046] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Belongings Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Don't let property damage become total loss. Our expert packout team is standing by to protect and preserve your valuable belongings with professional care and secure storage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule?service=packout-management">
              <Button size="xl" className="bg-cbrs-orange hover:bg-cbrs-orange/90">
                Schedule Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+18326327225">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e3046]">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: (832) 632-7225
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackoutLanding4;
