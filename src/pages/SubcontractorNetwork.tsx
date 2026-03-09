import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, CheckCircle, ArrowRight, Hammer, Paintbrush, Wrench, Home, Zap, Shield } from 'lucide-react';

const SubcontractorNetwork: React.FC = () => {
  const trades = [
    { icon: Hammer, name: 'Flooring Installers', description: 'Tile, hardwood, LVP, carpet specialists' },
    { icon: Paintbrush, name: 'Painters', description: 'Interior/exterior painting and finishing' },
    { icon: Home, name: 'Cabinetry & Millwork', description: 'Custom cabinets and trim work' },
    { icon: Wrench, name: 'Plumbing & HVAC', description: 'Licensed plumbing and HVAC contractors' },
    { icon: Zap, name: 'Electrical', description: 'Licensed electricians for all project needs' },
    { icon: Shield, name: 'Specialty Trades', description: 'Roofing, gutters, windows, and more' }
  ];

  const benefits = [
    'Pre-vetted, reliable subcontractors in every trade',
    'Consistent pricing and quality standards',
    'Faster project scheduling and coordination',
    'Reduced project delays from sub availability issues',
    'Single point of contact for trade coordination',
    'Performance tracking and quality assurance'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Subcontractor Network & Trade Coordination | CBRS Group</title>
        <meta name="description" content="Access our network of vetted subcontractors and trades for restoration projects. Reliable partners, better scheduling, and coordinated project execution." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Users className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Subcontractor Network &<br />Trade Coordination
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access our network of vetted trades and streamlined coordination systems that keep your restoration projects moving.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Access the Network
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3046] mb-6">
                The Subcontractor Challenge
              </h2>
              <div className="space-y-4 text-lg text-[#94A3B8]">
                <p>Restoration companies often struggle with:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Finding reliable trades who show up on time</li>
                  <li>Coordinating schedules across multiple subcontractors</li>
                  <li>Inconsistent quality and pricing</li>
                  <li>Project delays due to sub availability</li>
                  <li>Time spent vetting new trades</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#E86C24] to-[#d65d1a] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">How CBRS Solves This</h3>
              <div className="space-y-4">
                {[
                  'Access to pre-vetted, reliable trades in all specialties',
                  'Centralized scheduling and coordination',
                  'Consistent quality standards and pricing',
                  'Performance tracking and accountability',
                  'Single point of contact for all trade coordination'
                ].map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Available */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Trades in Our Network
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Vetted professionals across all specialty trades needed for restoration projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((trade, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6">
                  <trade.icon className="w-8 h-8 text-[#E86C24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-3">{trade.name}</h3>
                <p className="text-[#94A3B8]">{trade.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Why Restoration Companies Use Our Network
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6B7F35] flex-shrink-0 mt-1" />
                  <p className="text-[#1e3046] font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Platform Teaser */}
      <section className="py-24 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-[#E86C24]/20 rounded-full mb-6">
            <span className="text-[#E86C24] font-bold text-sm">COMING SOON</span>
          </div>
          <h2 className="text-5xl font-black text-white mb-6">
            The Future of Trade Coordination
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're building a platform that connects restoration companies with vetted subcontractors, streamlines scheduling, and tracks performance—all in one place.
          </p>
          <Link to="/consultation" className="inline-block px-12 py-5 bg-[#E86C24] text-white rounded-lg font-black text-xl hover:bg-[#d65d1a] transition-all shadow-2xl">
            Join Our Network
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubcontractorNetwork;
