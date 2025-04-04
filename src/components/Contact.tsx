import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-cbrs-blue/10 text-cbrs-blue rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-cbrs-muted max-w-2xl mx-auto text-lg">
            Our team is ready to assist you with any questions or to schedule services. Contact us for prompt assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="bg-green-100 text-green-700 rounded-full p-4 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cbrs-dark mb-3">Message Sent!</h3>
                <p className="text-cbrs-muted text-center mb-8">
                  Thank you for contacting us. Our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-cbrs-blue hover:text-blue-700 underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cbrs-dark mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-cbrs-blue focus:ring-1 focus:ring-cbrs-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cbrs-dark mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-cbrs-blue focus:ring-1 focus:ring-cbrs-blue outline-none transition-all"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cbrs-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-cbrs-blue focus:ring-1 focus:ring-cbrs-blue outline-none transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cbrs-dark mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-cbrs-blue focus:ring-1 focus:ring-cbrs-blue outline-none transition-all resize-none"
                    placeholder="Tell us about your situation..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cbrs-blue hover:bg-blue-600 text-white font-medium py-4 rounded-md shadow-md transition-all hover:shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-cbrs-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cbrs-blue/10 text-cbrs-blue rounded-full p-3 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cbrs-dark">Phone</p>
                    <a href="tel:+13462986933" className="text-cbrs-blue hover:underline">(346) 298-6933</a>
                    <p className="text-sm text-cbrs-muted mt-1">Urgent services available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cbrs-blue/10 text-cbrs-blue rounded-full p-3 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cbrs-dark">Email</p>
                    <a href="mailto:schedule@cbrsgroup.com" className="text-cbrs-blue hover:underline">schedule@cbrsgroup.com</a>
                    <p className="text-sm text-cbrs-muted mt-1">We'll respond as quickly as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cbrs-blue/10 text-cbrs-blue rounded-full p-3 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cbrs-dark">Location</p>
                    <p className="text-cbrs-muted">Houston and Surrounding Areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cbrs-blue/10 text-cbrs-blue rounded-full p-3 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cbrs-dark">Business Hours</p>
                    <p className="text-cbrs-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-cbrs-muted mt-1">Urgent services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-cbrs-dark mb-6">Service Areas</h3>
              <p className="text-cbrs-muted mb-4">
                We provide packout and inventory services throughout Houston and surrounding areas.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Houston", "Spring", "The Woodlands", "Cypress", "Humble", "Sugar Land", "Pasadena", "Conroe", "Richmond"].map((city) => (
                  <div key={city} className="bg-cbrs-blue/5 rounded-md px-3 py-2 text-sm text-cbrs-dark">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
