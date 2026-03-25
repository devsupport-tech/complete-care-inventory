import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Palette, CheckCircle, ArrowRight, Package, PenTool, FolderOpen, Clock, DollarSign, Users, Handshake } from 'lucide-react';

const InteriorDesign: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Material Sourcing',
      description: 'We source and coordinate quality materials including flooring, tile, cabinets, countertops, and fixtures—so your team can focus on the build.'
    },
    {
      icon: PenTool,
      title: 'Interior Design',
      description: 'Professional design guidance and space planning to help clients visualize their restored space and make confident decisions.'
    },
    {
      icon: FolderOpen,
      title: 'Organization',
      description: 'Systematic organization of selections, orders, and timelines to keep projects running smoothly from design to installation.'
    }
  ];

  const benefits = [
    'Focus on what you do best—restoration and reconstruction',
    'Reduce project delays from client indecision',
    'Professional design expertise without hiring in-house',
    'Seamless integration with your restoration workflow',
    'Improved client satisfaction and referrals',
    'Faster project completion times'
  ];

  const whyOutsource = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Stop spending hours helping clients pick paint colors and tile. We handle all design decisions.'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'No need to hire a full-time designer. Get expert support only when you need it.'
    },
    {
      icon: Users,
      title: 'Happy Clients',
      description: 'Clients get professional guidance, reducing overwhelm and improving satisfaction.'
    },
    {
      icon: Handshake,
      title: 'True Partnership',
      description: 'We work as an extension of your team, maintaining your client relationships.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Interior Design Services | CBRS Group</title>
        <meta name="description" content="Outsourced interior design services for restoration professionals. Material sourcing, interior design, and project organization—so you can focus on the build." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#E86C24]/20 rounded-full mb-6">
              <span className="text-[#E86C24] font-bold text-sm">OUTSOURCED DESIGN SUPPORT</span>
            </div>
            <Palette className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Interior Design Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional interior design support for restoration professionals. We handle material sourcing, design guidance, and organization—so you can focus on the build.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Why Outsource Interior Design?
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Your expertise is restoration—not helping clients choose between 50 shades of gray. Let us handle the design decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOutsource.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-[#E86C24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-3">{item.title}</h3>
                <p className="text-[#64748B]">{item.description}</p>
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
              What We Handle
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Comprehensive design support from material selection to project organization
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#E86C24]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3046] mb-4">{service.title}</h3>
                <p className="text-[#64748B] text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3046] mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#E86C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3046] mb-2">You Refer Your Client</h3>
                    <p className="text-[#64748B]">When a project reaches the design phase, introduce us to your client as your design partner.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#E86C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3046] mb-2">We Guide the Design Process</h3>
                    <p className="text-[#64748B]">Our team works with your client on material selections, design decisions, and sourcing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#E86C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3046] mb-2">You Build with Confidence</h3>
                    <p className="text-[#64748B]">Receive organized selections and timelines so your team can execute the build efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6B7F35] to-[#5a6b2c] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Your Design Partner</h3>
              <p className="text-xl text-white/90 mb-6">
                We work as an extension of your team—not a replacement. Your client relationships stay intact while we handle the design details.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>White-label service that represents your brand</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>Regular communication and project updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>Coordinated timelines with your build schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Benefits for Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6B7F35] flex-shrink-0 mt-1" />
                  <p className="text-[#1e3046] font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E86C24] to-[#d65d1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Outsource Design?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our interior design services can streamline your restoration projects
          </p>
          <Link to="/consultation" className="inline-block px-12 py-5 bg-white text-[#E86C24] rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorDesign;
