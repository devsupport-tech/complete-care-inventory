import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Package, Calculator, ClipboardCheck } from 'lucide-react';

const HomepageVariation2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Bold Typography */}
      <section className="min-h-screen flex items-center bg-white relative">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="animate-fade-in">
              {/* Eyebrow */}
              <div className="inline-block px-4 py-2 bg-[#D4611C]/10 rounded-full mb-8">
                <span className="text-[#D4611C] font-semibold text-sm tracking-wide uppercase">
                  Restoration Support Services
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-[#1e3046] leading-none mb-8">
                WE HANDLE<br />
                THE<br />
                <span className="text-[#D4611C]">DETAILS</span>
              </h1>

              {/* Subheadline */}
              <div className="max-w-2xl">
                <p className="text-2xl sm:text-3xl text-[#64748B] font-light mb-12 leading-relaxed">
                  So you can focus on what matters most—restoring properties and delighting customers.
                </p>

                {/* CTA */}
                <Link to="/schedule" className="group inline-flex px-8 py-5 bg-[#1e3046] text-white rounded-full font-bold text-lg hover:bg-[#2a4560] transition-all items-center gap-3 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Scroll Prompt */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[#64748B] text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="w-5 h-5 text-[#64748B] animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Section 1 - Packout */}
      <section className="min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2">
          {/* Left - Content */}
          <div className="bg-[#1e3046] p-12 lg:p-20 flex items-center min-h-[600px]">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4611C] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#D4611C] font-bold text-lg">01</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
                PACKOUT<br />MANAGEMENT
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From inventory to storage to pack-in, we manage every item with precision and care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-gray-300">Complete inventory documentation with photos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-gray-300">Secure, climate-controlled storage facilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-gray-300">Seamless pack-in coordination and delivery</p>
                </div>
              </div>

              <Link to="/schedule?service=packout-management" className="text-white font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                EXPLORE SERVICE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Visual/Stats */}
          <div className="bg-[#F8FAFC] p-12 lg:p-20 flex items-center justify-center min-h-[600px]">
            <div className="text-center">
              <div className="text-9xl font-black text-[#D4611C] mb-4">500+</div>
              <div className="text-2xl font-bold text-[#1e3046] mb-2">Packout Projects</div>
              <div className="text-lg text-[#64748B]">Completed This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Section 2 - Estimating (Reversed) */}
      <section className="min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2">
          {/* Left - Visual/Stats */}
          <div className="bg-[#D4611C] p-12 lg:p-20 flex items-center justify-center order-2 lg:order-1 min-h-[600px]">
            <div className="text-center text-white">
              <div className="text-9xl font-black mb-4">98%</div>
              <div className="text-2xl font-bold mb-2">Approval Rate</div>
              <div className="text-lg text-white/80">On Supplement Requests</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="bg-white p-12 lg:p-20 flex items-center order-1 lg:order-2 min-h-[600px]">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1e3046] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#1e3046] font-bold text-lg">02</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-black text-[#1e3046] mb-6 leading-tight">
                ESTIMATING &<br />SUPPLEMENTING
              </h2>

              <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
                Maximize project profitability with our expert Xactimate estimators and supplement specialists.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-[#1e3046]">Xactimate certified professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-[#1e3046]">Thorough supplement documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4611C] rounded-full mt-2"></div>
                  <p className="text-[#1e3046]">Expert negotiation with carriers</p>
                </div>
              </div>

              <Link to="/schedule?service=estimating-supplementing" className="text-[#D4611C] font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                EXPLORE SERVICE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Section 3 - Production */}
      <section className="min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2">
          {/* Left - Content */}
          <div className="bg-[#6B7F35] p-12 lg:p-20 flex items-center min-h-[600px]">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-[#6B7F35]" />
                </div>
                <span className="text-white font-bold text-lg">03</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
                PRODUCTION<br />MANAGEMENT
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Keep projects on track with dedicated production managers who oversee every detail.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Daily progress monitoring and reporting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Quality control and site inspections</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Stakeholder communication management</p>
                </div>
              </div>

              <Link to="/schedule?service=production-management" className="text-white font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                EXPLORE SERVICE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Visual/Stats */}
          <div className="bg-[#1e3046] p-12 lg:p-20 flex items-center justify-center min-h-[600px]">
            <div className="text-center text-white">
              <div className="text-9xl font-black mb-4">24/7</div>
              <div className="text-2xl font-bold mb-2">Support Available</div>
              <div className="text-lg text-gray-400">When You Need Us Most</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1e3046] mb-8 leading-none">
              LET'S WORK<br />
              <span className="text-[#D4611C]">TOGETHER</span>
            </h2>
            <p className="text-2xl text-[#64748B] mb-12 max-w-3xl mx-auto">
              Partner with CBRS Group and experience the difference professional support makes.
            </p>
            <Link to="/contact" className="inline-block px-12 py-6 bg-[#D4611C] text-white rounded-full font-black text-xl hover:bg-[#d65d1a] transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageVariation2;
