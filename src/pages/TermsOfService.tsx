
import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Terms of Service | CBRS Group</title>
        <meta name="description" content="Terms of Service for CBRS Group contractor support services." />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-cbrs-blue mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Welcome to our website. By using this site, you agree to the following terms. Please read them carefully.</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">1. Use of This Website</h2>
              <p>You agree to use this site only for lawful purposes. You must not misuse or interfere with the site or its services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">2. Accounts</h2>
              <p>If you create an account, you are responsible for keeping your login information secure. Let us know right away if you believe your account has been compromised.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">3. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, and graphics, is owned by us or our licensors. You may not use or reproduce it without permission.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">4. Disclaimer</h2>
              <p>We provide this website and its content "as is." We do not guarantee that the site will always be error-free or uninterrupted.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">5. Limitation of Liability</h2>
              <p>We are not liable for any damages that may arise from your use of this website.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">6. Changes to These Terms</h2>
              <p>We may update these terms at any time. Updates will be posted on this page. By continuing to use the site, you accept any changes.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">7. Contact</h2>
              <p>If you have questions about these terms, please contact us at <a href="mailto:admin@cbrsgroup.com" className="text-cbrs-orange hover:underline">admin@cbrsgroup.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
