
import { PackageCheck, Calculator, UserCog } from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  description: string;
  detailUrl: string;
  features: string[];
  longDescription: string;
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "packout-management",
    title: "Packout & Content Management",
    icon: PackageCheck,
    iconColor: "text-cbrs-blue",
    description: "Comprehensive inventory, professional packing, storage, and restoration of belongings after property damage.",
    detailUrl: "/services/packout-management",
    features: [
      "Advanced inventory documentation",
      "Secure packing and transportation",
      "Climate-controlled storage",
      "Specialized restoration services",
      "Complete return and placement",
      "Insurance-approved reporting"
    ],
    longDescription: "Our Packout & Content Management service provides comprehensive solutions for homeowners and businesses affected by water, fire, or storm damage. We carefully document, pack, transport, and store all salvageable contents while restoration work is completed on the property.",
    processSteps: [
      { title: "Assessment", description: "Complete evaluation of damaged contents and creation of a recovery plan" },
      { title: "Documentation", description: "Detailed photographic inventory of all items with barcode tracking" },
      { title: "Packing", description: "Professional packing with specialized materials for different item types" },
      { title: "Transportation", description: "Secure transport to our climate-controlled storage facility" },
      { title: "Storage", description: "Safe storage with continuous monitoring until property restoration is complete" },
      { title: "Restoration", description: "Specialized cleaning and restoration of damaged items" },
      { title: "Return", description: "Complete return and placement of items in their original or designated locations" }
    ],
    faqs: [
      { 
        question: "How long does the packout process take?", 
        answer: "The duration varies based on the size of the property and extent of damage, typically ranging from 1-3 days for residential properties and longer for commercial spaces."
      },
      { 
        question: "Will my insurance cover packout services?", 
        answer: "In most cases, yes. Packout services are typically covered under property insurance policies when contents are damaged due to a covered peril. We work directly with insurance adjusters to ensure proper documentation and approval."
      },
      { 
        question: "Can you handle valuable or fragile items?", 
        answer: "Absolutely. Our team is trained to handle items of all values and fragility levels, from everyday household items to fine art, antiques, and electronics. We use specialized packing materials and techniques for delicate items."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2970"
  },
  {
    id: "estimating",
    title: "Estimating & Insurance Supplementing",
    icon: Calculator,
    iconColor: "text-[#637636]",
    description: "Expert estimating services that ensure contractors receive proper compensation for all necessary work.",
    detailUrl: "/services/estimating",
    features: [
      "Detailed damage assessments",
      "Insurance-compliant documentation",
      "Scope of work development",
      "Xactimate estimating",
      "Supplement negotiation",
      "Payment expediting"
    ],
    longDescription: "Our Estimating & Insurance Supplementing service provides contractors with expert support in creating accurate, comprehensive estimates and navigating the often complex insurance claim process to ensure fair compensation.",
    processSteps: [
      { title: "Initial Assessment", description: "Thorough on-site evaluation of all damage and required repairs" },
      { title: "Documentation", description: "Detailed photos, measurements, and notes of affected areas" },
      { title: "Estimate Creation", description: "Development of comprehensive Xactimate estimates with proper line items" },
      { title: "Submission", description: "Professional submission of estimates to insurance companies" },
      { title: "Negotiation", description: "Expert advocacy and negotiation with adjusters for fair compensation" },
      { title: "Supplementing", description: "Identification and documentation of additional necessary work" },
      { title: "Payment Processing", description: "Assistance with payment tracking and expediting when needed" }
    ],
    faqs: [
      { 
        question: "What is Xactimate and why is it important?", 
        answer: "Xactimate is the industry-standard software for property damage estimating used by most insurance companies. Our expertise with this platform ensures your estimates are accepted by insurance adjusters with minimal pushback."
      },
      { 
        question: "What is supplementing and when is it needed?", 
        answer: "Supplementing is the process of requesting additional funds when damages are discovered after the initial estimate or when the initial estimate doesn't adequately cover the necessary repairs. It's common in restoration projects as some damage isn't visible until work begins."
      },
      { 
        question: "How do you handle insurance adjuster disagreements?", 
        answer: "We build strong, evidence-based cases for our estimates using industry-standard pricing, detailed documentation, and code compliance requirements. Our experienced team knows how to effectively communicate with adjusters to resolve disagreements professionally."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2811"
  },
  {
    id: "production-management",
    title: "Production Management",
    icon: UserCog,
    iconColor: "text-[#e7672b]",
    description: "Comprehensive project oversight from start to finish, ensuring quality restoration on time and within budget.",
    detailUrl: "/services/production-management",
    features: [
      "Project scheduling and coordination",
      "Quality control inspections",
      "Subcontractor management",
      "Progress documentation",
      "Client communication",
      "Regulatory compliance"
    ],
    longDescription: "Our Production Management service provides comprehensive oversight of restoration projects, handling scheduling, coordination, quality control, and documentation so contractors can focus on their core competencies.",
    processSteps: [
      { title: "Project Planning", description: "Development of detailed project schedule and resource allocation" },
      { title: "Team Coordination", description: "Management of all restoration specialists and subcontractors" },
      { title: "Daily Supervision", description: "On-site supervision ensuring work meets quality standards" },
      { title: "Progress Tracking", description: "Detailed documentation of all work completed for insurance and records" },
      { title: "Client Updates", description: "Regular communication with property owners about restoration progress" },
      { title: "Quality Assurance", description: "Comprehensive inspections at key project milestones" },
      { title: "Project Completion", description: "Final walkthrough and documentation of completed restoration" }
    ],
    faqs: [
      { 
        question: "How does your production management save contractors time?", 
        answer: "We handle the time-consuming aspects of project management—scheduling, subcontractor coordination, quality control, and documentation—allowing contractors to take on more projects or focus on their specialized work."
      },
      { 
        question: "Do you handle all communications with the property owner?", 
        answer: "We can serve as the primary point of contact or work alongside your team. Our approach is flexible and designed to complement your business model while ensuring clear, consistent communication."
      },
      { 
        question: "How do you ensure quality control throughout the project?", 
        answer: "We conduct regular on-site inspections, create detailed progress reports with photos, and hold subcontractors accountable to established quality standards. Our documentation process creates accountability at every project stage."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1574358329850-383cf65469c8?auto=format&fit=crop&q=80&w=2970"
  }
];
