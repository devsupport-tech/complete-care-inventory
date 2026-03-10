import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, TrendingUp, Package, Calculator, Users, Palette, ArrowRight, Star, Play, ChevronLeft, ChevronRight, Check, Phone, Mail, AlertTriangle, ClipboardCheck } from 'lucide-react';

const NewHomepage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ companies: 0, efficiency: 0, revenue: 0 });
  const [selectedService, setSelectedService] = useState(0);

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Apex Restoration Services",
      role: "Owner & CEO",
      text: "CBRS Group transformed how we operate. Their operational consulting helped us scale from 15 to 35 jobs per month without adding chaos to our workflow.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Chen",
      company: "Premier Water Damage Restoration",
      role: "Operations Director",
      text: "The packout systems they implemented cut our inventory time in half. We went from constant bottlenecks to smooth operations in just 60 days.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "David Thompson",
      company: "Elite Restoration Partners",
      role: "Managing Partner",
      text: "Their subcontractor network saved us months of vetting. We now have reliable trades for every project, coordinated through one system.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const services = [
    {
      title: "Operations Consulting",
      icon: Settings,
      description: "Comprehensive operational assessment and systems implementation",
      features: ["Workflow optimization", "Systems implementation", "Scalability planning", "Process documentation"],
      color: "#E86C24",
      link: "/operations-consulting"
    },
    {
      title: "Production Workflow",
      icon: TrendingUp,
      description: "Streamlined production management and project coordination",
      features: ["Daily progress tracking", "Team coordination", "Timeline management", "Quality control"],
      color: "#1e3046",
      link: "/production-workflow"
    },
    {
      title: "Packout Systems",
      icon: Package,
      description: "Efficient inventory, storage, and contents management",
      features: ["Inventory documentation", "Storage coordination", "Contents cleaning", "Pack-in systems"],
      color: "#6B7F35",
      link: "/packout-systems"
    },
    {
      title: "Estimating Workflow",
      icon: Calculator,
      description: "Accurate estimates and supplement support systems",
      features: ["Xactimate expertise", "Supplement strategy", "Carrier negotiation", "Process improvement"],
      color: "#E86C24",
      link: "/estimating-workflow"
    },
    {
      title: "Subcontractor Network",
      icon: Users,
      description: "Vetted trades and coordination systems",
      features: ["Reliable partners", "Trade coordination", "Quality assurance", "Project scheduling"],
      color: "#1e3046",
      link: "/subcontractor-network"
    },
    {
      title: "Interior & Materials",
      icon: Palette,
      description: "Design consulting and material coordination",
      features: ["Material selection", "Design guidance", "Client support", "Vendor coordination"],
      color: "#6B7F35",
      link: "/interior-materials"
    }
  ];

  const operationalProblems = [
    "Production delays and workflow bottlenecks",
    "Disorganized packout and contents management",
    "Estimating backlogs and supplement delays",
    "Subcontractor coordination challenges",
    "Unclear operational systems and processes",
    "Scaling difficulties and inefficiencies"
  ];

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { companies: 200, efficiency: 40, revenue: 25 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        companies: Math.floor(targets.companies * progress),
        efficiency: Math.floor(targets.efficiency * progress),
        revenue: Math.floor(targets.revenue * progress)
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
    }, 6000);

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
        <a href="tel:+18326080535" className="w-14 h-14 bg-[#E86C24] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group">
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-[#1e3046] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold">
            (832) 608-0535
          </span>
        </a>
        <Link to="/consultation" className="w-14 h-14 bg-[#1e3046] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group">
          <Mail className="w-6 h-6" />
          <span className="absolute right-16 bg-[#1e3046] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold">
            Get Consultation
          </span>
        </Link>
      </div>

      {/* Hero Section with Animation */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3046] via-[#2a4560] to-[#1e3046] pt-24">
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
                <span className="text-[#E86C24] font-bold text-sm">Trusted by {counters.companies}+ Restoration Companies</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Operations Support for<br />
                <span className="text-[#E86C24]">Restoration Companies</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                CBRS Group helps restoration companies streamline workflow, improve production efficiency, coordinate subcontractors, and manage packout and estimating systems.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    {counters.companies}+
                  </div>
                  <div className="text-sm text-gray-400">Companies Served</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    {counters.efficiency}%
                  </div>
                  <div className="text-sm text-gray-400">Avg Efficiency Gain</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#E86C24] mb-1">
                    ${counters.revenue}K
                  </div>
                  <div className="text-sm text-gray-400">Avg Revenue Increase</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation" className="group px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  Schedule Operations Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/operations-consulting" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right - Testimonial Carousel */}
            <div className="relative animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-[#1e3046] text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#94A3B8] text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-[#94A3B8] text-sm">
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
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial ? 'w-8 bg-[#E86C24]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center hover:bg-[#E86C24] hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
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

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 font-semibold text-sm">Common Operational Challenges</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-6">
              Restoration Companies Often Struggle With<br />Operational Bottlenecks
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              CBRS Group helps restoration companies build operational systems that improve efficiency and project coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {operationalProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-[#1e3046] font-medium">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/operations-consulting" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-lg">
              See How We Solve These Problems
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Pillars - Interactive Selector */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              Operational Pillars
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Comprehensive solutions to streamline every aspect of your restoration business
            </p>
          </div>

          {/* Service Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`p-6 rounded-xl text-left transition-all ${
                  selectedService === index
                    ? 'bg-[#1e3046] text-white shadow-xl scale-105'
                    : 'bg-white text-[#1e3046] hover:bg-gray-100'
                }`}
              >
                <service.icon className={`w-10 h-10 mb-3 ${
                  selectedService === index ? 'text-[#E86C24]' : 'text-[#94A3B8]'
                }`} />
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className={`text-sm ${
                  selectedService === index ? 'text-gray-300' : 'text-[#94A3B8]'
                }`}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-12 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-4 bg-white rounded-xl shadow-md mb-6 border-2 border-[#E86C24]">
                  {React.createElement(services[selectedService].icon, {
                    className: "w-16 h-16",
                    style: { color: services[selectedService].color }
                  })}
                </div>
                <h3 className="text-3xl font-bold text-[#1e3046] mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-lg text-[#94A3B8] mb-6">
                  {services[selectedService].description}
                </p>
                <Link to={services[selectedService].link} className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-lg">
                  Learn More About This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div>
                <h4 className="font-bold text-[#1e3046] mb-4 text-lg">Key Components:</h4>
                <div className="space-y-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
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

      {/* Flagship Consulting Program CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E86C24] to-[#d65d1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <ClipboardCheck className="w-10 h-10 text-[#E86C24]" />
              </div>
              <div>
                <div className="text-white/80 font-semibold text-sm uppercase tracking-wide">Flagship Program</div>
                <h3 className="text-3xl font-black text-white">Restoration Operations Optimization</h3>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A comprehensive consulting program that helps restoration companies build better operational systems, streamline workflow, and scale efficiently.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold text-white mb-2">Operational Assessment</h4>
                <p className="text-white/80 text-sm">Review workflow, identify bottlenecks, analyze systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold text-white mb-2">Systems Implementation</h4>
                <p className="text-white/80 text-sm">Setup production, packout, estimating, and coordination systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold text-white mb-2">Growth Support</h4>
                <p className="text-white/80 text-sm">Prepare for higher volume, improved profitability, scalability</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left">
                <div className="text-5xl font-black text-white mb-2">$5K - $25K</div>
                <div className="text-white/80">Investment Range Based on Scope</div>
              </div>
              <Link to="/operations-consulting" className="px-10 py-5 bg-white text-[#E86C24] rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-[#1e3046] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #E86C24 25%, transparent 25%, transparent 75%, #E86C24 75%, #E86C24), linear-gradient(45deg, #E86C24 25%, transparent 25%, transparent 75%, #E86C24 75%, #E86C24)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Results That Matter</h2>
            <p className="text-gray-300 text-lg">Helping restoration companies build better operations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">200+</div>
              <div className="text-white font-semibold">Restoration Companies</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">40%</div>
              <div className="text-white font-semibold">Avg Efficiency Gain</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">$50M+</div>
              <div className="text-white font-semibold">Projects Managed</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#E86C24] mb-2">24/7</div>
              <div className="text-white font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-[#1e3046] mb-6">
            Ready to Build Better Operations?
          </h2>
          <p className="text-2xl text-[#94A3B8] mb-12">
            If your restoration company is looking to improve operational workflow and project coordination, CBRS Group can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation" className="px-12 py-5 bg-[#E86C24] text-white rounded-lg font-black text-xl hover:bg-[#d65d1a] transition-all shadow-2xl hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link to="/operations-consulting" className="px-12 py-5 bg-transparent text-[#1e3046] rounded-lg font-black text-xl border-2 border-[#1e3046] hover:bg-[#1e3046] hover:text-white transition-all">
              Learn About Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHomepage;
