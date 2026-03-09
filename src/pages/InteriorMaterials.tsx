import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Palette, CheckCircle, ArrowRight, Home, Layers, Sparkles, SwatchBook, Users2, TrendingUp } from 'lucide-react';

const InteriorMaterials: React.FC = () => {
  const services = [
    {
      icon: Layers,
      title: 'Flooring Selection',
      description: 'Guide clients through tile, hardwood, LVP, and carpet options'
    },
    {
      icon: Home,
      title: 'Cabinet & Finishes',
      description: 'Help select cabinet styles, colors, and hardware'
    },
    {
      icon: SwatchBook,
      title: 'Paint & Color Consultation',
      description: 'Professional color selection for optimal results'
    },
    {
      icon: Sparkles,
      title: 'Tile & Backsplash',
      description: 'Coordinate tile selections for bathrooms and kitchens'
    },
    {
      icon: Users2,
      title: 'Client Support',
      description: 'Reduce decision fatigue with expert guidance'
    },
    {
      icon: TrendingUp,
      title: 'Vendor Coordination',
      description: 'Streamline ordering and delivery logistics'
    }
  ];

  const benefits = [
    'Improve client satisfaction during reconstruction',
    'Reduce delays from indecisive homeowners',
    'Professional guidance on material selections',
    'Better coordination with suppliers and vendors',
    'Fewer change orders and rework',
    'Higher quality finished projects'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Interior & Material Design Consulting | CBRS Group</title>
        <meta name="description" content="Interior and material design consulting for restoration projects. Help clients with flooring, cabinets, paint, tile, and finish selections." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Palette className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Interior & Material<br />Design Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Help your restoration clients navigate material selections with professional design consulting and coordination.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3046] mb-6">
                The Design Decision Challenge
              </h2>
              <p className="text-lg text-[#94A3B8] mb-6">
                Most restoration companies are excellent at reconstruction but struggle to guide homeowners through interior design decisions.
              </p>
              <div className="space-y-3 text-[#1e3046]">
                <p>This leads to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Project delays while clients make decisions</li>
                  <li>Unsatisfied clients overwhelmed by choices</li>
                  <li>Suboptimal material selections</li>
                  <li>Change orders and rework</li>
                  <li>Missed opportunities for upselling</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6B7F35] to-[#5a6b2c] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">How We Help</h3>
              <p className="text-xl text-white/90 mb-6">
                CBRS provides professional interior and material consulting to guide your clients through the design and selection process.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>Expert guidance on flooring, cabinets, paint, and finishes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>Reduce decision fatigue for overwhelmed homeowners</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p>Coordinate materials ordering and delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              What We Cover
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Comprehensive design consulting for all interior finishes and materials
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
              Why Restoration Companies Add Design Consulting
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E86C24] to-[#d65d1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Improve Client Satisfaction with Design Support
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how interior consulting can enhance your restoration projects
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

export default InteriorMaterials;
