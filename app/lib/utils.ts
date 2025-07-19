export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function generateServiceLocationTitle(serviceName: string, locationName: string, state: string): string {
  return `${serviceName} in ${locationName}, ${state} | M&M Restoration`;
}

export function generateServiceLocationDescription(serviceName: string, locationName: string, state: string): string {
  return `Professional ${serviceName.toLowerCase()} services in ${locationName}, ${state}. 24/7 emergency response, IICRC certified technicians, and direct insurance billing. Call (616) 648-7775 now!`;
}

export function generateServiceLocationKeywords(service: any, location: any): string[] {
  const baseKeywords = [
    `${service.name} ${location.name} ${location.state}`,
    `${service.name} ${location.name}`,
    `${service.slug.replace(/-/g, ' ')} ${location.name} ${location.state}`,
    `${service.slug.replace(/-/g, ' ')} ${location.name}`,
    ...service.keywords.map((keyword: string) => `${keyword} ${location.name} ${location.state}`),
    ...service.keywords.map((keyword: string) => `${keyword} ${location.name}`),
    ...location.keywords.map((keyword: string) => `${service.name} ${keyword}`),
  ];
  
  return baseKeywords;
}

export function getRelatedServices(currentServiceSlug: string, services: any[], count: number = 3): any[] {
  return services
    .filter(service => service.slug !== currentServiceSlug)
    .slice(0, count);
}

export function getNearbyLocations(currentLocationSlug: string, locations: any[], count: number = 4): any[] {
  return locations
    .filter(location => location.slug !== currentLocationSlug)
    .slice(0, count);
}

export function generateSchema(type: 'Service' | 'LocalBusiness' | 'WebPage', data: any) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case 'LocalBusiness':
      return {
        ...baseSchema,
        "name": "M&M Restoration",
        "image": data.image || "/images/mm-restoration-logo.png",
        "telephone": "+16166487775",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "MI",
          "addressCountry": "US"
        },
        "geo": data.geo || {
          "@type": "GeoCoordinates",
          "latitude": "42.3314",
          "longitude": "-84.5555"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "42.3314",
            "longitude": "-84.5555"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Restoration Services",
          "itemListElement": data.services || []
        }
      };
    
    case 'Service':
      return {
        ...baseSchema,
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "M&M Restoration",
          "telephone": "+16166487775"
        },
        "areaServed": data.location || "Greater Lansing Area, Michigan",
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": "+16166487775",
          "availableLanguage": "en"
        }
      };
    
    default:
      return baseSchema;
  }
}