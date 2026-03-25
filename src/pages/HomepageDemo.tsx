import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Type, Grid, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageVariation1 from '@/components/HomepageVariation1';
import HomepageVariation2 from '@/components/HomepageVariation2';
import HomepageVariation3 from '@/components/HomepageVariation3';
import HomepageVariation4 from '@/components/HomepageVariation4';

const HomepageDemo: React.FC = () => {
  const [selectedVariation, setSelectedVariation] = useState(1);

  const variations = [
    {
      id: 1,
      name: 'Modern Minimalist',
      icon: Layout,
      description: 'Large hero image, clean grid layout, generous spacing',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 2,
      name: 'Bold Typography',
      icon: Type,
      description: 'Massive text, split-screen sections, bold statements',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      id: 3,
      name: 'Card-Based',
      icon: Grid,
      description: 'Information-rich, multiple content sections, FAQ',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 4,
      name: 'Interactive Dynamic',
      icon: Zap,
      description: 'Animated counters, testimonial carousel, interactive elements',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ];

  const renderVariation = () => {
    switch (selectedVariation) {
      case 1:
        return <HomepageVariation1 />;
      case 2:
        return <HomepageVariation2 />;
      case 3:
        return <HomepageVariation3 />;
      case 4:
        return <HomepageVariation4 />;
      default:
        return <HomepageVariation1 />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Homepage Design Variations Demo | CBRS Group</title>
        <meta name="description" content="Preview different homepage design variations for CBRS Group website" />
      </Helmet>

      <Header />

      {/* Sticky Variation Selector */}
      <div className="fixed top-24 left-0 right-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1e3046] mb-2">
                Homepage Design Variations Demo
              </h2>
              <p className="text-sm text-[#64748B]">
                Click on a variation below to preview different homepage designs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {variations.map((variation) => (
                <button
                  key={variation.id}
                  onClick={() => setSelectedVariation(variation.id)}
                  className={`p-4 rounded-lg transition-all duration-300 text-left ${
                    selectedVariation === variation.id
                      ? `${variation.color} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-[#1e3046] hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <variation.icon className="w-6 h-6" />
                    <span className="font-bold text-lg">{variation.name}</span>
                  </div>
                  <p className={`text-xs ${
                    selectedVariation === variation.id ? 'text-white/90' : 'text-[#64748B]'
                  }`}>
                    {variation.description}
                  </p>
                  {selectedVariation === variation.id && (
                    <div className="mt-2 text-xs font-semibold">
                      ✓ Currently Viewing
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header and selector */}
      <div className="h-64"></div>

      {/* Render Selected Variation */}
      <div className="animate-fade-in">
        {renderVariation()}
      </div>

      <Footer />
    </div>
  );
};

export default HomepageDemo;
