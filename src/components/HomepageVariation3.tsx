import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Calculator, ClipboardCheck, Star, Quote, ChevronDown, Check, TrendingUp, Clock, Shield, Users, Award, Zap } from 'lucide-react';

const HomepageVariation3: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Michael Torres",
      company: "Restoration Pro LLC",
      text: "CBRS Group has been a game-changer for our operations. Their packout management is flawless.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Quick Dry Restoration",
      text: "The estimating support has helped us win more jobs and improve our margins significantly.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Elite Water Damage",
      text: "Having dedicated production managers has allowed us to scale without sacrificing quality.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to a new project?",
      answer: "We offer 24/7 support and can typically mobilize within 2-4 hours of your initial contact, depending on the service needed and location."
    },
    {
      question: "Do you work with all major insurance carriers?",
      answer: "Yes, we have established relationships with all major insurance carriers and are experienced in their specific requirements and processes."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve the entire Pacific Northwest region. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Are your estimators Xactimate certified?",
      answer: "Absolutely. All our estimators are Xactimate certified and maintain ongoing training to stay current with industry standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Compact with Cards */}
      <section className="bg-gradient-to-br from-[#1e3046] via-[#1e3046] to-[#2a4560] py-20 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Restoration Support Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From packout to production management, we provide the expertise and support your restoration business needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="px-8 py-4 bg-[#E86C24] text-white rounded-lg font-semibold hover:bg-[#d65d1a] transition-all shadow-lg">
                Request a Quote
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Value Prop Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-10 h-10 text-[#E86C24] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Availability</h3>
              <p className="text-gray-300">Round-the-clock support when emergencies strike</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-[#E86C24] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Certified Experts</h3>
              <p className="text-gray-300">Industry-certified professionals on every project</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-10 h-10 text-[#E86C24] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">98% client satisfaction and growing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3046] mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Comprehensive solutions tailored to restoration contractors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#E86C24]/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-[#E86C24]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Packout Management
              </h3>
              <p className="text-[#64748B] mb-6">
                Complete inventory, storage, and pack-in services with detailed documentation.
              </p>
              <div className="space-y-3 mb-6 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Photo inventory documentation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Climate-controlled storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Contents cleaning available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Pack-in coordination</span>
                </div>
              </div>
              <Link to="/schedule?service=packout-management" className="w-full block py-3 bg-[#F8FAFC] text-[#1e3046] rounded-lg font-semibold hover:bg-[#E86C24] hover:text-white transition-colors text-center">
                Learn More
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-[#E86C24]">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-[#E86C24] rounded-lg flex items-center justify-center">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-[#E86C24] text-white text-xs font-bold rounded-full">
                  POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Estimating & Supplementing
              </h3>
              <p className="text-[#64748B] mb-6">
                Expert Xactimate estimates and supplement support to maximize project value.
              </p>
              <div className="space-y-3 mb-6 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Xactimate certified estimators</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Supplement documentation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Carrier negotiation support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Desktop estimate reviews</span>
                </div>
              </div>
              <Link to="/schedule?service=estimating-supplementing" className="w-full block py-3 bg-[#E86C24] text-white rounded-lg font-semibold hover:bg-[#d65d1a] transition-colors text-center">
                Learn More
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#6B7F35]/10 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-[#6B7F35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Production Management
              </h3>
              <p className="text-[#64748B] mb-6">
                Dedicated managers ensuring projects stay on schedule and meet quality standards.
              </p>
              <div className="space-y-3 mb-6 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Daily progress tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Quality control inspections</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Client communication</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6B7F35]" />
                  <span className="text-[#1e3046]">Schedule coordination</span>
                </div>
              </div>
              <Link to="/schedule?service=production-management" className="w-full block py-3 bg-[#F8FAFC] text-[#1e3046] rounded-lg font-semibold hover:bg-[#6B7F35] hover:text-white transition-colors text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3046] mb-4">
              Why Restoration Contractors Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Fast Response', desc: '2-4 hour mobilization' },
              { icon: Users, title: 'Expert Team', desc: 'Certified professionals' },
              { icon: Shield, title: 'Fully Insured', desc: 'Complete coverage' },
              { icon: Award, title: 'Proven Track Record', desc: '500+ projects completed' },
              { icon: Clock, title: '24/7 Support', desc: 'Always available' },
              { icon: TrendingUp, title: 'Maximize Revenue', desc: '98% supplement approval' },
              { icon: Check, title: 'Quality Assured', desc: 'Rigorous QC process' },
              { icon: Star, title: 'Top Rated', desc: '5-star client reviews' }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-lg p-6 text-center hover:bg-white hover:shadow-md transition-all">
                <benefit.icon className="w-10 h-10 text-[#E86C24] mx-auto mb-3" />
                <h3 className="font-bold text-[#1e3046] mb-1">{benefit.title}</h3>
                <p className="text-sm text-[#64748B]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1e3046]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300">Trusted by restoration professionals across the region</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Quote className="w-10 h-10 text-[#E86C24] mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E86C24] text-[#E86C24]" />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3046] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748B]">Get answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1e3046] pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E86C24] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-[#64748B] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E86C24] to-[#d65d1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Restoration Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of contractors who trust CBRS Group with their support services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule" className="px-10 py-5 bg-white text-[#E86C24] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white hover:bg-white hover:text-[#E86C24] transition-all">
              Download Our Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageVariation3;
