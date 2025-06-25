
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Youtube  } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M176,32a8,8,0,0,0-8,8V72a40,40,0,0,1-40-40,8,8,0,0,0-16,0V160a24,24,0,1,1-24-24,8,8,0,0,0,0-16,40,40,0,1,0,40,40V120.7a56.1,56.1,0,0,0,40,15.3,8,8,0,0,0,8-8V40A8,8,0,0,0,176,32Z" />
  </svg>
);

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
                href="https://www.facebook.com/people/Complete-Building-and-Restoration-Solutions/61564870028363/"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@cbrsgroup"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a 
                href="https://www.instagram.com/cbrsgroup/"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@cbrsgroup" // replace with your real YouTube link
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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
            <Link to="/privacy-policy" className="hover:text-cbrs-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-cbrs-orange transition-colors">Terms of Service</Link>
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
