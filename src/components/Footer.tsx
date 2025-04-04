
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-cbrs-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/21eff05e-d58e-4076-99c1-9d0ac0ffe1fc.png" 
                alt="CBRS Group Logo" 
                className="h-12 mb-4"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Complete Building and Restoration Services provides professional packout and inventory solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Packout Services", "Inventory Management", "Restoration Solutions", "Storage Options", "Insurance Coordination"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-300 hover:text-cbrs-orange transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "#home" },
                { name: "About Us", link: "#about" },
                { name: "Services", link: "#services" },
                { name: "Contact", link: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-gray-300 hover:text-cbrs-orange transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p>Houston and Surrounding Areas</p>
              <p>
                <a href="tel:+13462986933" className="hover:text-cbrs-orange transition-colors">
                  (346) 298-6933
                </a>
              </p>
              <p>
                <a href="mailto:schedule@cbrsgroup.com" className="hover:text-cbrs-orange transition-colors">
                  schedule@cbrsgroup.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CBRS Group. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cbrs-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cbrs-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cbrs-orange transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      <div className="bg-black/20">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Designed with <span className="text-cbrs-orange">❤</span> for quality restoration services.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center bg-cbrs-orange/20 hover:bg-cbrs-orange/30 rounded-full p-2 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
