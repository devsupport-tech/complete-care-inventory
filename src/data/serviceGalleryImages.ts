
export const serviceGalleryImages: Record<string, string[]> = {
  'packout-management': [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=2940",
    "https://images.unsplash.com/photo-1581342997481-9a3583ea7d0b?auto=format&fit=crop&q=80&w=2970"
  ],
  'estimating': [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2811",
    "https://images.unsplash.com/photo-1607703703674-df96941f39c7?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2970"
  ],
  'production-management': [
    "https://images.unsplash.com/photo-1574358329850-383cf65469c8?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2978",
    "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=2970"
  ],
  'prompt-response': [
    "https://images.unsplash.com/photo-1631382180449-6f2457fa37f3?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?auto=format&fit=crop&q=80&w=2940",
    "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?auto=format&fit=crop&q=80&w=2871"
  ],
  'advanced-inventory': [
    "https://images.unsplash.com/photo-1581342983782-03f54d55e91a?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1627634777217-c864268db30f?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1580674285058-3d5b4f8b2c69?auto=format&fit=crop&q=80&w=2960"
  ],
  'professional-packing': [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=2940",
    "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=2965"
  ],
  'restoration': [
    "https://images.unsplash.com/photo-1617850687389-c587cc246537?auto=format&fit=crop&q=80&w=2972",
    "https://images.unsplash.com/photo-1543525238-54e3306b8b73?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1631382180449-6f2457fa37f3?auto=format&fit=crop&q=80&w=2970"
  ],
  'secure-storage': [
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1606836559739-7b1d6861a9c6?auto=format&fit=crop&q=80&w=2971",
    "https://images.unsplash.com/photo-1618049049816-43a6536382bc?auto=format&fit=crop&q=80&w=2940"
  ],
  'insurance-coverage': [
    "https://images.unsplash.com/photo-1631382180449-6f2457fa37f3?auto=format&fit=crop&q=80&w=2970",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2940",
    "https://images.unsplash.com/photo-1607703703674-df96941f39c7?auto=format&fit=crop&q=80&w=2970"
  ]
};

export const getServiceDetails = (serviceId?: string) => {
  switch(serviceId) {
    case 'prompt-response':
      return {
        title: "Prompt Response Services",
        description: "Our rapid response team minimizes damage by quickly assessing and addressing emergencies.",
        features: [
          "Available during business hours with quick appointment scheduling",
          "Extended availability for urgent situations",
          "Fast response to minimize further damage",
          "Thorough initial assessment of affected items",
          "Immediate mitigation strategies to prevent further damage",
          "On-site evaluation of affected belongings",
          "Emergency board-up and tarping services when needed"
        ],
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=2960"
      };
    case 'advanced-inventory':
      return {
        title: "Advanced Inventory Management",
        description: "Our specialized inventory system ensures nothing is lost and everything is properly documented for insurance.",
        features: [
          "Comprehensive documentation with photographs of each item",
          "Detailed condition reports separating pre-existing and disaster-related damage",
          "Digital inventory system with barcode tracking",
          "Insurance-ready reports specifically formatted for adjusters",
          "Categorization by recovery needs and restoration priority",
          "Chain of custody records throughout the process",
          "Room-by-room inventory for proper return placement"
        ],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2970"
      };
    case 'professional-packing':
      return {
        title: "Professional Packing Services",
        description: "Our expert packing techniques ensure your belongings are protected during the restoration process.",
        features: [
          "Specialized packing materials for different item types",
          "Custom crating for valuable and fragile items",
          "Systematic packing process room by room",
          "Clear labeling system for efficient tracking and unpacking",
          "Protective wrapping for furniture and large items",
          "Special handling procedures for electronics and media",
          "Inventory-integrated packing for seamless tracking"
        ],
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2970"
      };
    case 'restoration':
      return {
        title: "Comprehensive Restoration Services",
        description: "Our state-of-the-art restoration facilities and techniques save items that might otherwise be lost.",
        features: [
          "Advanced cleaning technologies specific to disaster recovery",
          "Specialized treatments for water, fire, and mold damage",
          "Furniture and upholstery restoration services",
          "Electronics recovery and testing",
          "Soft goods processing for clothing and textiles",
          "Document and photo recovery techniques",
          "Specialty item restoration for artwork, antiques, and collectibles"
        ],
        image: "https://images.unsplash.com/photo-1617850687389-c587cc246537?auto=format&fit=crop&q=80&w=2972"
      };
    case 'secure-storage':
      return {
        title: "Secure Storage Solutions",
        description: "Your belongings remain safe in our secure, climate-controlled facility until your property is ready.",
        features: [
          "Climate-controlled environment for sensitive items",
          "24-hour security monitoring and restricted access",
          "Organized inventory management system",
          "Pest and moisture control measures",
          "Fire protection systems",
          "Easy access to your items when needed",
          "Flexible short and long-term storage options"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2970"
      };
    case 'insurance-coverage':
      return {
        title: "Insurance Coverage Assistance",
        description: "We work directly with your insurance company, making the claims process as stress-free as possible.",
        features: [
          "Direct insurance billing to eliminate out-of-pocket expenses",
          "Specialized documentation for insurance adjusters",
          "Claim navigation assistance and advocacy",
          "Coverage verification services",
          "Regular communication with your insurance adjuster",
          "Supplemental claim documentation when needed",
          "Compliance with insurance company requirements"
        ],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2811"
      };
    default:
      return null;
  }
};
