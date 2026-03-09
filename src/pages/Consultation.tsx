import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    revenue: '',
    teamSize: '',
    biggestChallenge: '',
    services: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // In production, this would send to your backend or scheduling system
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const serviceOptions = [
    'Operations Consulting',
    'Production Workflow',
    'Packout Systems',
    'Estimating Workflow',
    'Subcontractor Network',
    'Interior & Materials Consulting'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Schedule Operations Consultation | CBRS Group</title>
        <meta name="description" content="Schedule a consultation to discuss your restoration company's operational challenges and how CBRS Group can help improve workflow and efficiency." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#1e3046] to-[#2a4560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Calendar className="w-20 h-20 text-[#E86C24] mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Schedule Operations<br />Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your operational challenges and explore how CBRS Group can help streamline your restoration business.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3046] mb-4">
              What to Expect from This Consultation
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E86C24] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3046] mb-2">30-45 Minutes</h3>
              <p className="text-[#94A3B8]">Focused conversation about your specific operational needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E86C24] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3046] mb-2">No Obligations</h3>
              <p className="text-[#94A3B8]">Free consultation with no pressure to commit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E86C24] rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3046] mb-2">Clear Next Steps</h3>
              <p className="text-[#94A3B8]">Walk away with actionable recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3046] mb-8 text-center">
              Tell Us About Your Business
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Business Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Annual Revenue Range *
                  </label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="<500k">Under $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-3m">$1M - $3M</option>
                    <option value="3m-5m">$3M - $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                    Team Size *
                  </label>
                  <select
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-10">6-10 employees</option>
                    <option value="11-25">11-25 employees</option>
                    <option value="26-50">26-50 employees</option>
                    <option value="50+">50+ employees</option>
                  </select>
                </div>
              </div>

              {/* Biggest Challenge */}
              <div>
                <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                  What's Your Biggest Operational Challenge? *
                </label>
                <select
                  required
                  value={formData.biggestChallenge}
                  onChange={(e) => setFormData({...formData, biggestChallenge: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="production-delays">Production delays and workflow bottlenecks</option>
                  <option value="packout">Disorganized packout and contents management</option>
                  <option value="estimating">Estimating backlogs and supplement delays</option>
                  <option value="subcontractors">Subcontractor coordination challenges</option>
                  <option value="systems">Unclear operational systems and processes</option>
                  <option value="scaling">Scaling difficulties and inefficiencies</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Services Interested In */}
              <div>
                <label className="block text-sm font-semibold text-[#1e3046] mb-3">
                  Which Services Are You Interested In? (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#F8FAFC] transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 text-[#E86C24] border-gray-300 rounded focus:ring-[#E86C24]"
                      />
                      <span className="text-[#1e3046]">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-semibold text-[#1e3046] mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us more about your specific challenges or goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E86C24] focus:border-transparent"
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-[#E86C24] text-white rounded-lg font-bold text-lg hover:bg-[#d65d1a] transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule My Consultation
                </button>
                <p className="text-sm text-[#94A3B8] mt-4">
                  We'll reach out within 24 hours to schedule your consultation
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#1e3046] mb-6">
            Prefer to Talk Now?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18326327225" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3046] text-white rounded-lg font-bold hover:bg-[#2a4560] transition-all">
              <Phone className="w-5 h-5" />
              (832) 632-7225
            </a>
            <a href="mailto:info@cbrsgroup.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e3046] border-2 border-[#1e3046] rounded-lg font-bold hover:bg-[#1e3046] hover:text-white transition-all">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
