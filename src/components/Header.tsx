
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { services } from "./Services";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-white/95 shadow-sm py-2" 
          : "bg-white py-4"
      )}
    >
      {/* Emergency Services Bar */}
      <div className="bg-red-600 text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="font-medium">Emergency Services 24/7</span>
          <span className="font-bold text-lg">281-336-1888</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img 
              src="/lovable-uploads/21eff05e-d58e-4076-99c1-9d0ac0ffe1fc.png" 
              alt="CBRS Group Logo" 
              className="h-[80px] md:h-[90px] mr-2" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            About Us
          </Link>
          <div className="relative group">
            <span className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange cursor-pointer flex items-center">
              Residential Restoration
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden py-1">
                {services.slice(0, 3).map((service, index) => (
                  <Link
                    key={index}
                    to={service.detailUrl}
                    className="block px-4 py-2 text-sm text-cbrs-blue hover:bg-gray-50 hover:text-cbrs-orange"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <span className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange cursor-pointer flex items-center">
              Commercial Restoration
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden py-1">
                {services.slice(3).map((service, index) => (
                  <Link
                    key={index}
                    to={service.detailUrl}
                    className="block px-4 py-2 text-sm text-cbrs-blue hover:bg-gray-50 hover:text-cbrs-orange"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/renovations"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Renovations
          </Link>
          <Link
            to="/areas"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Areas We Serve
          </Link>
          <Link
            to="/work"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Our Work
          </Link>
          <Link
            to="/reviews"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="text-cbrs-blue font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="tel:+12813361888"
            className="text-cbrs-blue inline-flex items-center"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button 
            className="text-cbrs-blue" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 shadow-md z-50 animate-fade-in-down">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <p className="text-xs uppercase text-cbrs-muted font-medium mb-2">Services</p>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.detailUrl}
                    className="block py-2 text-sm text-cbrs-blue hover:text-cbrs-orange pl-2 border-l-2 border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a
                href="tel:+12813361888"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                281-336-1888
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
