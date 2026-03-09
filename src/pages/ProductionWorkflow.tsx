import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, CheckCircle, ArrowRight, Clock, BarChart, Users, Calendar, FileCheck, MessageSquare, AlertCircle } from 'lucide-react';

const ProductionWorkflow: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Daily Progress Tracking',
      description: 'Real-time monitoring of project milestones and team performance'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Clear communication channels and role assignments for every project'
    },
    {
      icon: Clock,
      title: 'Timeline Management',
      description: 'Keep projects on schedule with proactive milestone tracking'
    },
    {
      icon: FileCheck,
      title: 'Quality Control',
      description: 'Systematic checkpoints ensuring work meets standards'
    },
    {
      icon: MessageSquare,
      title: 'Stakeholder Communication',
      description: 'Regular updates to clients, adjusters, and project partners'
    },
    {
      icon: Calendar,
      title: 'Schedule Coordination',
      description: 'Optimize trade scheduling and resource allocation'
    }
  ];

  const commonChallenges = [
    'Production delays and missed deadlines',
    'Poor communication between field teams and office',
    'Lack of visibility into project status',
    'Quality issues discovered too late',
    'Inefficient resource allocation',
    'Client dissatisfaction due to unclear timelines'
  ];

  const benefits = [
    { title: 'Reduce Project Duration', stat: '25-35%', description: 'Average reduction in time to completion' },
    { title: 'Improve Quality', stat: '60%', description: 'Fewer callbacks and rework incidents' },
    { title: 'Better Communication', stat: '3x', description: 'More consistent client updates' },
    { title: 'Higher Margins', stat: '15-20%', description: 'Improved profitability per project' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Production Workflow Management | CBRS Group</title>
        <meta name="description" content="Streamlined production management and project coordination for restoration companies. Daily tracking, team coordination, quality control, and timeline management." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <TrendingUp className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Production Workflow Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamlined production management and project coordination that keeps your restoration projects on schedule and on budget.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Common Production Challenges
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {commonChallenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <p className="text-[#1e3046] font-medium">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              How We Help
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Comprehensive production management support for restoration contractors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#E86C24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-3">{service.title}</h3>
                <p className="text-[#94A3B8]">{service.description}</p>
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
              Results You Can Expect
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-black text-[#E86C24] mb-4">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-2">{benefit.title}</h3>
                <p className="text-[#94A3B8]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E86C24] to-[#d65d1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Improve Your Production Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a consultation to discuss your production challenges
          </p>
          <Link to="/consultation" className="inline-block px-12 py-5 bg-white text-[#E86C24] rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionWorkflow;
