import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, CheckCircle, ArrowRight, FileText, DollarSign, TrendingUp, Award, Clock, Target } from 'lucide-react';

const EstimatingWorkflow: React.FC = () => {
  const services = [
    {
      icon: Award,
      title: 'Xactimate Certified Estimators',
      description: 'Industry-certified professionals with deep carrier knowledge'
    },
    {
      icon: FileText,
      title: 'Supplement Documentation',
      description: 'Thorough documentation supporting every supplement line item'
    },
    {
      icon: Target,
      title: 'Carrier Negotiation',
      description: 'Expert negotiation to maximize approved scope and pricing'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: '24-48 hour estimate delivery for most projects'
    },
    {
      icon: DollarSign,
      title: 'Desktop Reviews',
      description: 'Quick reviews of carrier estimates to identify missed items'
    },
    {
      icon: TrendingUp,
      title: 'Process Improvement',
      description: 'Ongoing optimization of your estimating workflow'
    }
  ];

  const stats = [
    { number: '98%', label: 'Supplement Approval Rate' },
    { number: '$15K', label: 'Avg Value Added Per Project' },
    { number: '24-48hr', label: 'Typical Turnaround Time' },
    { number: '200+', label: 'Carriers Worked With' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Estimating Workflow & Supplement Support | CBRS Group</title>
        <meta name="description" content="Expert estimating workflow and supplement support for restoration companies. Xactimate certified estimators, carrier negotiation, and process optimization." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Calculator className="w-20 h-20 text-[#D4611C] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Estimating Workflow &<br />Supplement Support
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert Xactimate estimates and supplement support systems that maximize project value and carrier approval rates.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4611C] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Get Estimating Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-black text-[#D4611C] mb-2">{stat.number}</div>
                <div className="text-[#64748B] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Complete Estimating Support
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              From initial estimates to supplement approval, we handle the entire process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#D4611C]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#D4611C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-3">{service.title}</h3>
                <p className="text-[#64748B]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#1e3046] to-[#2a4560] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">The Cost of Poor Estimating</h3>
              <div className="space-y-4 text-lg">
                <p className="text-white/90">• $10K-$30K left on the table per project</p>
                <p className="text-white/90">• 2-4 weeks wasted in supplement rounds</p>
                <p className="text-white/90">• Reduced margins due to underestimating</p>
                <p className="text-white/90">• Strained carrier relationships</p>
                <p className="text-white/90">• Team frustration and turnover</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1e3046] mb-6">
                How We Fix Your Estimating Workflow
              </h2>
              <div className="space-y-4">
                {[
                  'Thorough initial estimates that reduce supplement rounds',
                  'Comprehensive documentation supporting every line item',
                  'Expert carrier negotiation to maximize approved value',
                  'Fast turnaround times keeping projects on schedule',
                  'Process training to improve your internal capabilities',
                  'Ongoing optimization based on carrier feedback'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#6B7F35] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#1e3046]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#D4611C] to-[#d65d1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our estimating support can improve your project profitability
          </p>
          <Link to="/consultation" className="inline-block px-12 py-5 bg-white text-[#D4611C] rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EstimatingWorkflow;
