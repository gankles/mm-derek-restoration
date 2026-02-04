import { BUSINESS_INFO, SERVICES } from '../lib/constants';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  image: string;
  areaServed?: string;
  isEmergency?: boolean;
}

// Company founder/expert information for GEO author attribution
export const COMPANY_EXPERT = {
  name: "Derek Mikowski",
  title: "Founder & Lead Restoration Specialist",
  credentials: "IICRC Certified Master Restorer",
  yearsExperience: 10,
  foundedYear: 2015,
  bio: "Derek Mikowski founded M&M Restoration after seeing the need for honest, reliable restoration services in the Greater Lansing area, and beyond. With over 10+ years of experience in water damage, fire damage, and mold remediation, Derek holds IICRC Master Restorer certification and leads a team of certified technicians dedicated to helping homeowners recover from property disasters."
};

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://m-mrestoration.com/#organization",
    "name": BUSINESS_INFO.name,
    "url": "https://m-mrestoration.com",
    "logo": "https://m-mrestoration.com/images/logo.png",
    "description": "Professional restoration services in Greater Lansing, Michigan. IICRC certified specialists in water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "@id": "https://m-mrestoration.com/#founder",
      "name": COMPANY_EXPERT.name
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1542 Huntshire Dr",
      "addressLocality": "Holt",
      "addressRegion": "MI",
      "postalCode": "48842",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-616-648-7775",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": {
        "@type": "State",
        "name": "Michigan"
      }
    },
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://m-mrestoration.com/#founder",
    "name": COMPANY_EXPERT.name,
    "jobTitle": COMPANY_EXPERT.title,
    "description": COMPANY_EXPERT.bio,
    "knowsAbout": [
      "Water Damage Restoration",
      "Fire Damage Cleanup",
      "Mold Remediation",
      "Storm Damage Repair",
      "Emergency Restoration Services",
      "Property Damage Assessment",
      "Insurance Claims Process"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": COMPANY_EXPERT.credentials
    },
    "worksFor": {
      "@type": "Organization",
      "@id": "https://m-mrestoration.com/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://m-mrestoration.com/#localbusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://m-mrestoration.com/images/restoration-team-hero.png",
    "telephone": "+1-616-648-7775",
    "email": BUSINESS_INFO.email,
    "url": "https://m-mrestoration.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1542 Huntshire Dr",
      "addressLocality": "Holt",
      "addressRegion": "MI",
      "postalCode": "48842",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.6406",
      "longitude": "-84.5153"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "42.6406",
        "longitude": "-84.5153"
      },
      "geoRadius": "80467"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Restoration Services",
      "itemListElement": SERVICES.slice(0, 6).map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "position": index + 1
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, image, areaServed, isEmergency }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "image": `https://m-mrestoration.com${image}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://m-mrestoration.com/#localbusiness",
      "name": BUSINESS_INFO.name,
      "telephone": "+1-616-648-7775"
    },
    "areaServed": areaServed || "Greater Lansing Area, Michigan",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://m-mrestoration.com/contact",
      "servicePhone": "+1-616-648-7775",
      "availableLanguage": "en"
    },
    "hoursAvailable": isEmergency ? {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    } : undefined,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free estimates available"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://m-mrestoration.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: boolean;
}

export function WebPageSchema({ 
  title, 
  description, 
  url,
  datePublished,
  dateModified,
  author = false
}: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://m-mrestoration.com${url}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": BUSINESS_INFO.name,
      "url": "https://m-mrestoration.com"
    },
    "publisher": {
      "@type": "LocalBusiness",
      "@id": "https://m-mrestoration.com/#localbusiness"
    }
  };

  if (datePublished) {
    schema.datePublished = datePublished;
  }
  
  if (dateModified) {
    schema.dateModified = dateModified;
  }
  
  if (author) {
    schema.author = {
      "@type": "Person",
      "@id": "https://m-mrestoration.com/#founder",
      "name": COMPANY_EXPERT.name
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  reviewerName: string;
  reviewText: string;
  rating: number;
  locationName: string;
}

export function ReviewSchema({ reviewerName, reviewText, rating, locationName }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": reviewerName
    },
    "reviewBody": reviewText,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://m-mrestoration.com/#localbusiness",
      "name": BUSINESS_INFO.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationName,
        "addressRegion": "MI",
        "addressCountry": "US"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
}

export function ArticleSchema({ 
  headline, 
  description, 
  url, 
  image, 
  datePublished, 
  dateModified 
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": `https://m-mrestoration.com${image}`,
    "url": `https://m-mrestoration.com${url}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "@id": "https://m-mrestoration.com/#founder",
      "name": COMPANY_EXPERT.name
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://m-mrestoration.com/#organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://m-mrestoration.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://m-mrestoration.com${url}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AuthorBox() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
          {COMPANY_EXPERT.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm text-slate-500 mb-1">Written by</div>
          <h4 className="text-lg font-bold text-slate-800">{COMPANY_EXPERT.name}</h4>
          <div className="text-emerald-600 font-medium text-sm">{COMPANY_EXPERT.title}</div>
          <div className="text-slate-500 text-sm mt-1">{COMPANY_EXPERT.credentials}</div>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            {COMPANY_EXPERT.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

interface LastUpdatedProps {
  date: string;
}

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="text-sm text-slate-500 flex items-center gap-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Last updated: {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </div>
  );
}
