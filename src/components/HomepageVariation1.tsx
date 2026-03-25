import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Calculator, ClipboardCheck, ArrowRight, CheckCircle, Clock, Shield, Users } from 'lucide-react';

const HomepageVariation1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Viewport with Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
            alt="Restoration professionals at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3046]/95 via-[#1e3046]/85 to-[#1e3046]/75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Restoration Support,<br />
              <span className="text-[#E86C24]">Simplified</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
              Focus on restoration while we handle your packouts, estimates, and production management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/schedule" className="group px-8 py-4 bg-[#E86C24] text-white rounded-lg font-semibold text-lg hover:bg-[#d65d1a] transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/#services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30">
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E86C24] mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E86C24] mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E86C24] mb-2">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Comprehensive support services designed to streamline your restoration projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E86C24] transition-colors">
                <Package className="w-8 h-8 text-[#E86C24] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Packout Management & Storage
              </h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Professional inventory management, secure storage, and seamless logistics for your restoration projects.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Detailed inventory documentation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Climate-controlled storage</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Pack-in coordination</span>
                </li>
              </ul>
              <Link to="/schedule?service=packout-management" className="text-[#E86C24] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E86C24] transition-colors">
                <Calculator className="w-8 h-8 text-[#E86C24] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Estimating & Supplementing
              </h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Accurate estimates and thorough supplement support to maximize your project outcomes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Xactimate certified estimators</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Supplement negotiation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Desktop reviews</span>
                </li>
              </ul>
              <Link to="/schedule?service=estimating-supplementing" className="text-[#E86C24] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E86C24] transition-colors">
                <ClipboardCheck className="w-8 h-8 text-[#E86C24] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3046] mb-4">
                Production Management
              </h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Expert oversight ensuring projects stay on schedule, on budget, and meet quality standards.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Daily progress tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Quality control inspections</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1e3046]">
                  <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                  <span>Client communication</span>
                </li>
              </ul>
              <Link to="/schedule?service=production-management" className="text-[#E86C24] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              A streamlined process designed for efficiency and results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Contact', desc: 'Reach out and tell us about your project needs', icon: Users },
              { step: '02', title: 'Assessment', desc: 'We evaluate scope and provide a detailed plan', icon: ClipboardCheck },
              { step: '03', title: 'Execution', desc: 'Our team delivers services with precision', icon: Clock },
              { step: '04', title: 'Completion', desc: 'Project wrapped up with full documentation', icon: Shield }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E86C24] to-[#d65d1a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#E86C24]/20 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-[#1e3046] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#E86C24] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how CBRS Group can support your restoration business
          </p>
          <Link to="/schedule" className="inline-block px-10 py-5 bg-[#E86C24] text-white rounded-lg font-semibold text-lg hover:bg-[#d65d1a] transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomepageVariation1;
