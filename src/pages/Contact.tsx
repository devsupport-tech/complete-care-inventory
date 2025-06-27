
import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Contact Us | CBRS Group</title>
        <meta name="description" content="Get in touch with CBRS Group for professional contractor support services. Contact us for packout management, estimating, and production management." />
        <meta name="keywords" content="contact CBRS, contractor support contact, packout services contact, restoration services contact" />
        <meta property="og:title" content="Contact Us | CBRS Group" />
        <meta property="og:description" content="Get in touch with CBRS Group for professional contractor support services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbrsgroup.com/contact" />
        <link rel="canonical" href="https://cbrsgroup.com/contact" />
      </Helmet>
      
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
