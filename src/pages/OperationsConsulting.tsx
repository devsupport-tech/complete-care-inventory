import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Settings, TrendingUp, Target, CheckCircle, ArrowRight, ClipboardCheck, Users, BarChart, Workflow, Calendar } from 'lucide-react';

const OperationsConsulting: React.FC = () => {
  const assessmentAreas = [
    { icon: Workflow, title: 'Production Workflow', desc: 'Current processes, bottlenecks, efficiency gaps' },
    { icon: ClipboardCheck, title: 'Estimating Workflow', desc: 'Turnaround time, accuracy, supplement process' },
    { icon: Users, title: 'Packout Process', desc: 'Inventory systems, storage, coordination' },
    { icon: Target, title: 'Subcontractor Coordination', desc: 'Trade relationships, scheduling, quality control' },
    { icon: BarChart, title: 'Team Roles', desc: 'Responsibilities, capacity, skill gaps' }
  ];

  const systemsImplemented = [
    'Production workflow structure and documentation',
    'Packout operational systems and inventory management',
    'Estimating process improvements and supplement strategy',
    'Subcontractor coordination and communication systems',
    'Project timeline and milestone tracking',
    'Quality control checkpoints and procedures',
    'Team training and standard operating procedures'
  ];

  const programPhases = [
    {
      phase: 1,
      title: 'Discovery & Assessment',
      duration: 'Week 1-2',
      activities: [
        'Comprehensive operational review',
        'Stakeholder interviews',
        'Workflow analysis and mapping',
        'Bottleneck identification',
        'Current metrics baseline'
      ]
    },
    {
      phase: 2,
      title: 'Strategy Development',
      duration: 'Week 2-3',
      activities: [
        'Operational improvement roadmap',
        'Systems design and documentation',
        'Process optimization recommendations',
        'Technology and tool recommendations',
        'Implementation timeline creation'
      ]
    },
    {
      phase: 3,
      title: 'Implementation Support',
      duration: 'Week 3-8',
      activities: [
        'Systems rollout and deployment',
        'Team training and onboarding',
        'Process documentation creation',
        'Workflow integration',
        'Ongoing optimization and adjustment'
      ]
    },
    {
      phase: 4,
      title: 'Performance Optimization',
      duration: 'Week 8-12',
      activities: [
        'KPI tracking and reporting',
        'Process refinement',
        'Team performance coaching',
        'Scalability planning',
        'Long-term strategy development'
      ]
    }
  ];

  const investmentTiers = [
    {
      name: 'Operational Assessment',
      price: '$5,000',
      description: 'Comprehensive review and improvement roadmap',
      includes: [
        'Full operational assessment',
        'Bottleneck identification report',
        'Improvement recommendations',
        '2-hour strategy session',
        'Written action plan'
      ],
      bestFor: 'Companies wanting to identify issues and get a roadmap'
    },
    {
      name: 'Systems Implementation',
      price: '$15,000',
      description: 'Complete operational systems setup and training',
      includes: [
        'Everything in Assessment tier',
        'Full systems implementation',
        'Team training (4 sessions)',
        'Process documentation',
        '30-day implementation support',
        'Performance tracking setup'
      ],
      bestFor: 'Companies ready to overhaul operations',
      featured: true
    },
    {
      name: 'Full Optimization Program',
      price: '$25,000',
      description: 'End-to-end transformation with ongoing support',
      includes: [
        'Everything in Implementation tier',
        'Extended 90-day support',
        'Weekly coaching calls',
        'Advanced analytics setup',
        'Scalability planning',
        'Priority support access',
        'Quarterly performance reviews'
      ],
      bestFor: 'Companies preparing for significant growth'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Operations Consulting | Restoration Operations Optimization Program | CBRS Group</title>
        <meta name="description" content="Transform your restoration company's operations with CBRS Group's comprehensive consulting program. Operational assessment, systems implementation, and growth support from $5K-$25K." />
        <meta name="keywords" content="restoration operations consulting, restoration business consulting, operational assessment, systems implementation, restoration workflow optimization" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] via-[#2a4560] to-[#1e3046] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E86C24]/20 rounded-full mb-6">
              <Settings className="w-5 h-5 text-[#E86C24]" />
              <span className="text-[#E86C24] font-bold text-sm">Flagship Consulting Program</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Restoration Operations<br />
              <span className="text-[#E86C24]">Optimization Program</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              A comprehensive consulting program that helps restoration companies build better operational systems, streamline workflow, and scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/consultation" className="px-10 py-5 bg-[#E86C24] text-white rounded-lg font-bold text-lg hover:bg-[#d65d1a] transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+18326080535" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                (832) 608-0535
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-black text-[#E86C24] mb-2">$5K-$25K</div>
                <div className="text-sm text-gray-300">Investment Range</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#E86C24] mb-2">8-12</div>
                <div className="text-sm text-gray-300">Week Duration</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#E86C24] mb-2">40%+</div>
                <div className="text-sm text-gray-300">Avg Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              What's Included in the Program
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              A comprehensive approach to transforming your restoration operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#E86C24] to-[#d65d1a] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Operational Assessment</h3>
              <p className="text-white/90 mb-6">
                Comprehensive review of your current operations to identify bottlenecks and opportunities
              </p>
              <div className="space-y-3">
                {assessmentAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <area.icon className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">{area.title}</div>
                      <div className="text-sm text-white/80">{area.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e3046] to-[#2a4560] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Operational Systems Setup</h3>
              <p className="text-white/90 mb-6">
                Implementation of proven systems and processes tailored to your business
              </p>
              <div className="space-y-3">
                {systemsImplemented.map((system, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E86C24] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">{system}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6B7F35] to-[#5a6b2c] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth & Scaling Support</h3>
              <p className="text-white/90 mb-6">
                Prepare your operations for higher volume and improved profitability
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Scalability Planning</div>
                    <div className="text-sm text-white/80">Systems designed to handle 2-3x your current volume</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Profitability Improvements</div>
                    <div className="text-sm text-white/80">Identify and eliminate inefficiencies that drain margins</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Operational Efficiency</div>
                    <div className="text-sm text-white/80">Streamlined processes that reduce time and costs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              How the Program Works
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              A structured 4-phase approach to operational transformation
            </p>
          </div>

          <div className="space-y-8">
            {programPhases.map((phase) => (
              <div key={phase.phase} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#E86C24] rounded-xl flex items-center justify-center">
                        <span className="text-3xl font-black text-white">{phase.phase}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1e3046]">{phase.title}</h3>
                        <div className="text-[#64748B] font-medium">{phase.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 bg-[#F8FAFC] p-4 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-[#6B7F35] flex-shrink-0 mt-0.5" />
                          <span className="text-[#1e3046]">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3046] mb-4">
              Investment Options
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Choose the level of support that matches your operational needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <div key={index} className={`rounded-2xl p-8 ${
                tier.featured
                  ? 'bg-gradient-to-br from-[#E86C24] to-[#d65d1a] text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}>
                {tier.featured && (
                  <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-[#1e3046]'}`}>
                  {tier.name}
                </h3>
                <div className={`text-5xl font-black mb-4 ${tier.featured ? 'text-white' : 'text-[#E86C24]'}`}>
                  {tier.price}
                </div>
                <p className={`mb-6 ${tier.featured ? 'text-white/90' : 'text-[#64748B]'}`}>
                  {tier.description}
                </p>
                <div className="space-y-3 mb-8">
                  {tier.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.featured ? 'text-white' : 'text-[#6B7F35]'
                      }`} />
                      <span className={tier.featured ? 'text-white' : 'text-[#1e3046]'}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className={`text-sm font-semibold mb-6 ${tier.featured ? 'text-white/90' : 'text-[#64748B]'}`}>
                  Best for: {tier.bestFor}
                </div>
                <Link
                  to="/consultation"
                  className={`w-full block py-4 rounded-lg font-bold text-center transition-all ${
                    tier.featured
                      ? 'bg-white text-[#E86C24] hover:bg-gray-100'
                      : 'bg-[#E86C24] text-white hover:bg-[#d65d1a]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Schedule a consultation to discuss your operational challenges and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation" className="px-12 py-6 bg-[#E86C24] text-white rounded-lg font-black text-xl hover:bg-[#d65d1a] transition-all shadow-2xl hover:scale-105">
              Schedule Consultation
            </Link>
            <a href="tel:+18326080535" className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-lg font-black text-xl border-2 border-white hover:bg-white hover:text-[#1e3046] transition-all">
              Call (832) 608-0535
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationsConsulting;
