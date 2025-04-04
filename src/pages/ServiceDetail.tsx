
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { services } from "@/data/services";
import { serviceGalleryImages, getServiceDetails } from "@/data/serviceGalleryImages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceContent from "@/components/service-detail/ServiceContent";
import ServiceSidebar from "@/components/service-detail/ServiceSidebar";
import ServiceFaq from "@/components/service-detail/ServiceFaq";
import RelatedServices from "@/components/service-detail/RelatedServices";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);
  const galleryImages = serviceId ? serviceGalleryImages[serviceId as keyof typeof serviceGalleryImages] || [] : [];
  const details = serviceId ? getServiceDetails(serviceId) || {
    title: service?.title || "",
    description: service?.description || "",
    features: ["Customized service solutions", "Professional staff", "Insurance coordination", "Quality assurance"],
    image: "https://images.unsplash.com/photo-1606836559739-7b1d6861a9c6?auto=format&fit=crop&q=80&w=2971"
  } : { title: "", description: "", features: [], image: "" };

  useEffect(() => {
    if (!service) {
      navigate('/services/prompt-response');
    }

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

    window.scrollTo(0, 0);
  }, [service, navigate, serviceId]);

  if (!service) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <ServiceHero 
          title={details.title} 
          description={details.description} 
          galleryImages={galleryImages} 
        />

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <ServiceContent service={service} details={details} />
              <ServiceSidebar serviceId={service.id} title={service.title} />
            </div>
          </div>
        </section>

        <ServiceFaq service={service} />
        <RelatedServices currentServiceId={service.id} services={services} />
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
