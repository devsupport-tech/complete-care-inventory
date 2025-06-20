
import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Privacy Policy | CBRS Group</title>
        <meta name="description" content="Privacy Policy for CBRS Group contractor support services." />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-cbrs-blue mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Your privacy is important to us. This policy explains what information we collect and how we use it.</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information you provide (such as name, email, or other contact details)</li>
                <li>Information collected automatically (such as IP address, browser type, and pages visited)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your requests</li>
                <li>Communicate with you</li>
                <li>Keep the site secure</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">3. Sharing of Information</h2>
              <p>We do not sell your personal information. We may share it with service providers who help us operate our website or as required by law.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">4. Cookies</h2>
              <p>We use cookies to improve your experience and analyze site traffic. You can adjust your browser settings to disable cookies.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">5. Your Rights</h2>
              <p>You may have rights to access, correct, or delete your personal data. Contact us at <a href="mailto:admin@cbrsgroup.com" className="text-cbrs-orange hover:underline">admin@cbrsgroup.com</a> to make a request.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">6. Changes to This Policy</h2>
              <p>We may update this policy. Changes will be posted on this page.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-cbrs-blue mb-4">7. Contact</h2>
              <p>If you have questions about this policy, contact us at <a href="mailto:admin@cbrsgroup.com" className="text-cbrs-orange hover:underline">admin@cbrsgroup.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
