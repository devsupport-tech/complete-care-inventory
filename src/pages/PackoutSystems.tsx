import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, CheckCircle, ArrowRight, Camera, Warehouse, Truck, Shield, FileText, Clock } from 'lucide-react';

const PackoutSystems: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photo Inventory Documentation',
      description: 'Detailed photographic documentation of every item with condition notes'
    },
    {
      icon: Warehouse,
      title: 'Climate-Controlled Storage',
      description: 'Secure storage facilities with optimal conditions for contents preservation'
    },
    {
      icon: FileText,
      title: 'Contents Cleaning',
      description: 'Professional cleaning and restoration of salvageable items'
    },
    {
      icon: Truck,
      title: 'Pack-In Coordination',
      description: 'Seamless delivery and placement when reconstruction is complete'
    },
    {
      icon: Shield,
      title: 'Item Tracking System',
      description: 'Digital inventory system with real-time location tracking'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: '24-48 hour packout mobilization for emergency situations'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'On-site evaluation to determine scope and logistics'
    },
    {
      step: 2,
      title: 'Packout Execution',
      description: 'Systematic inventory, photography, and packing of all contents'
    },
    {
      step: 3,
      title: 'Storage & Cleaning',
      description: 'Secure storage with optional contents cleaning services'
    },
    {
      step: 4,
      title: 'Documentation Delivery',
      description: 'Complete inventory reports with photos for insurance claims'
    },
    {
      step: 5,
      title: 'Pack-In Coordination',
      description: 'Scheduled delivery and placement once work is complete'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Packout Systems & Contents Management | CBRS Group</title>
        <meta name="description" content="Professional packout and contents management for restoration projects. Inventory documentation, climate-controlled storage, contents cleaning, and pack-in coordination." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Package className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Packout Systems &<br />Contents Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Efficient inventory, storage, and contents management systems that streamline your restoration projects.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E86C24] text-white rounded-lg font-bold hover:bg-[#d65d1a] transition-all shadow-xl">
              Request Packout Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Complete Packout Services
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              From initial packout through final pack-in, we handle every detail
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#E86C24]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#E86C24]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3046] mb-3">{service.title}</h3>
                <p className="text-[#64748B]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3046] mb-4">
              Our Packout Process
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-sm flex items-start gap-6">
                <div className="w-16 h-16 bg-[#E86C24] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-black text-white">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3046] mb-2">{step.title}</h3>
                  <p className="text-[#64748B] text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3046] mb-6">
                Why Restoration Companies Choose Our Packout Systems
              </h2>
              <div className="space-y-4">
                {[
                  'Reduce packout time by 40% with systematic processes',
                  '99.8% inventory accuracy with photo documentation',
                  'Improve client satisfaction with organized contents management',
                  'Faster insurance claim processing with detailed reporting',
                  'Eliminate storage coordination headaches',
                  'Professional pack-in reduces damage and callbacks'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#6B7F35] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#1e3046]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#E86C24] to-[#d65d1a] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Streamline Your Packout Operations?</h3>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our packout systems can improve your workflow and client satisfaction.
              </p>
              <Link to="/consultation" className="inline-block px-8 py-4 bg-white text-[#E86C24] rounded-lg font-bold hover:bg-gray-100 transition-all">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackoutSystems;
