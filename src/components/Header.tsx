
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { Button } from "./ui/button";

const newServices = [
  { title: "Operations Consulting", path: "/operations-consulting" },
  { title: "Production Workflow", path: "/production-workflow" },
  { title: "Packout Systems", path: "/packout-systems" },
  { title: "Estimating Workflow", path: "/estimating-workflow" },
  { title: "Subcontractor Network", path: "/subcontractor-network" },
  { title: "Interior & Materials", path: "/interior-materials" }
];

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
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md py-4",
        isScrolled
          ? "bg-white/80 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img 
              src="/lovable-uploads/21eff05e-d58e-4076-99c1-9d0ac0ffe1fc.png" 
              alt="CBRS Group Logo" 
              className="h-[98.28px] md:h-[112.32px] mr-2" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={cn(
              "font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}
          >
            Home
          </Link>
          <div className="relative group">
            <span className={cn(
              "font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange cursor-pointer flex items-center",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}>
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden py-1">
                {newServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-cbrs-blue hover:bg-gray-50 hover:text-cbrs-orange"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/*
          <a
            href="/#testimonials"
            className={cn(
              "font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}
          >
            Testimonials
          </a>
          */}
          <Link
            to="/contact"
            className={cn(
              "font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}
          >
            Contact
          </Link>
          <a
            href="tel:+18326080535"
            className={cn(
              "font-medium text-sm tracking-wide transition-all hover:text-cbrs-orange hover:scale-105 inline-flex items-center border-r pr-6",
              isScrolled ? "text-cbrs-blue border-gray-300" : "text-white border-white/30"
            )}
          >
            <Phone className="w-4 h-4 mr-2" />
            (832) 608-0535
          </a>
          <Link to="/consultation">
            <Button variant="orange" size="default" className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="tel:+18326080535"
            className={cn(
              "inline-flex items-center",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            className={cn(
              "transition-colors",
              isScrolled ? "text-cbrs-blue" : "text-white"
            )}
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
              <div className="border-t border-gray-100 pt-2">
                <p className="text-xs uppercase text-cbrs-muted font-medium mb-2">Services</p>
                {newServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block py-2 text-sm text-cbrs-blue hover:text-cbrs-orange pl-2 border-l-2 border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <a
                href="/#testimonials"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <Link
                to="/contact"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+18326080535"
                className="text-cbrs-blue font-medium py-2 transition-colors hover:text-cbrs-orange flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                (832) 608-0535
              </a>
              <Link
                to="/consultation"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="orange" className="w-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
