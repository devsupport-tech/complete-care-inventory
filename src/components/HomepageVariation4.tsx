import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Calculator, ClipboardCheck, ArrowRight, Star, Play, ChevronLeft, ChevronRight, Check, Phone, Mail } from 'lucide-react';

const HomepageVariation4: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, response: 0 });
  const [selectedService, setSelectedService] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Pacific Restoration Group",
      role: "Operations Manager",
      text: "CBRS Group transformed our operations. Their packout service is incredibly detailed and their team is responsive at all hours.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Robert Williams",
      company: "Northwest Water Damage Pros",
      role: "Owner",
      text: "The estimating support has been a game-changer. We've seen our supplement approval rate increase by 40% since partnering with CBRS.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Amanda Chen",
      company: "Rapid Response Restoration",
      role: "Project Coordinator",
      text: "Having dedicated production managers means I can focus on business development instead of being stuck in the field all day.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  const services = [
    {
      title: "Packout Management",
      icon: Package,
      description: "Comprehensive inventory, storage, and pack-in services",
      features: ["Photo documentation", "Climate-controlled storage", "Contents cleaning", "Pack-in coordination"],
      color: "#E86C24"
    },
    {
      title: "Estimating & Supplementing",
      icon: Calculator,
      description: "Expert Xactimate estimates and supplement support",
      features: ["Certified estimators", "Supplement documentation", "Carrier negotiation", "Desktop reviews"],
      color: "#1e3046"
    },
    {
      title: "Production Management",
      icon: ClipboardCheck,
      description: "Dedicated oversight ensuring project success",
      features: ["Daily tracking", "Quality inspections", "Client communication", "Schedule coordination"],
      color: "#6B7F35"
    }
  ];

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 500, satisfaction: 98, response: 24 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        response: Math.floor(targets.response * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <a href="tel:+18326080535" aria-label="Call us at (832) 608-0535" className="w-14 h-14 bg-[#E86C24] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group">
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-[#1e3046] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold">
            Call Us Now
          </span>
        </a>
        <Link to="/contact" className="w-14 h-14 bg-[#1e3046] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group">
          <Mail className="w-6 h-6" />
          <span className="absolute right-16 bg-[#1e3046] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold">
            Email Us
          </span>
        </Link>
      </div>

      {/* Hero Section with Animation */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3046] via-[#2a4560] to-[#1e3046] mt-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#E86C24]/20 rounded-full mb-6">
                <span className="text-[#E86C24] font-bold text-sm">Trusted by 200+ Restoration Contractors</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Restore Faster,<br />
                Grow Stronger
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Partner with CBRS Group for packout management, estimating, and production oversight that drives results.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    {counters.projects}+
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    {counters.satisfaction}%
                  </div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    {counters.response}/7
                  </div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule" className="group px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right - Testimonial Carousel */}
            <div className="relative animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width="64" height="64" className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-[#1e3046] text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#64748B] text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-[#64748B] text-sm">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E86C24] text-[#E86C24]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#1e3046] text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial ? 'w-8 bg-[#E86C24]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center hover:bg-[#E86C24] hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center hover:bg-[#E86C24] hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E86C24]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#6B7F35]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Select a service to learn more about how we can support your restoration business
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`flex-1 p-6 rounded-xl text-left transition-all ${
                  selectedService === index
                    ? 'bg-[#1e3046] text-white shadow-xl scale-105'
                    : 'bg-[#F8FAFC] text-[#1e3046] hover:bg-gray-200'
                }`}
              >
                <service.icon className={`w-10 h-10 mb-3 ${
                  selectedService === index ? 'text-[#E86C24]' : 'text-[#64748B]'
                }`} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`text-sm ${
                  selectedService === index ? 'text-gray-300' : 'text-[#64748B]'
                }`}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-4 bg-white rounded-xl shadow-md mb-6">
                  {React.createElement(services[selectedService].icon, {
                    className: "w-16 h-16",
                    style: { color: services[selectedService].color }
                  })}
                </div>
                <h3 className="text-3xl font-bold text-[#1e3046] mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-lg text-[#64748B] mb-6">
                  {services[selectedService].description}
                </p>
                <Link to="/schedule" className="px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all inline-flex items-center gap-2 shadow-lg">
                  Request This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div>
                <h4 className="font-bold text-[#1e3046] mb-4 text-lg">What's Included:</h4>
                <div className="space-y-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 bg-[#6B7F35] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[#1e3046] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner with Parallax Effect */}
      <section className="py-20 bg-[#1e3046] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #E86C24 25%, transparent 25%, transparent 75%, #E86C24 75%, #E86C24), linear-gradient(45deg, #E86C24 25%, transparent 25%, transparent 75%, #E86C24 75%, #E86C24)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">99.8%</div>
              <div className="text-white font-semibold">Inventory Accuracy</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">2-4hr</div>
              <div className="text-white font-semibold">Response Time</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">$50M+</div>
              <div className="text-white font-semibold">Claims Managed</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">200+</div>
              <div className="text-white font-semibold">Active Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Animation */}
      <section className="py-24 bg-gradient-to-br from-[#E86C24] via-[#d65d1a] to-[#E86C24] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Join the growing network of restoration contractors who trust CBRS Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule" className="px-12 py-5 bg-white text-[#E86C24] rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
              Get Started Now
            </Link>
            <Link to="/contact" className="px-12 py-5 bg-transparent text-white rounded-lg font-black text-xl border-2 border-white hover:bg-white hover:text-[#E86C24] transition-all">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageVariation4;
