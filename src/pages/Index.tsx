
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /#services)
    if (location.hash) {
      // Get the element with the ID matching the hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to the element
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Apply to all elements with the reveal class
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [location]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white scroll-smooth">
      <Helmet>
        <title>CBRS Group | Professional Contractor Support Services</title>
        <meta name="description" content="CBRS Group provides essential support services for restoration contractors, including packout management, estimating, and production management." />
        <meta name="keywords" content="contractor support, packout services, estimating, insurance supplementing, production management, restoration services" />
        <meta property="og:title" content="CBRS Group | Professional Contractor Support Services" />
        <meta property="og:description" content="Professional support services for restoration contractors including packout management, estimating, and production management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbrsgroup.com" />
        <meta property="og:image" content="/lovable-uploads/21eff05e-d58e-4076-99c1-9d0ac0ffe1fc.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://cbrsgroup.com" />
        <meta name="theme-color" content="#1A2A3A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1A2A3A" />
      </Helmet>
      
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />

    </div>
  );
};

export default Index;
