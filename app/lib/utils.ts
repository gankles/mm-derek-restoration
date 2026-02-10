interface Service {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  icon: string;
  image: string;
  emergencyService: boolean;
  typicalDuration?: string;
  processSteps?: string[];
  equipment?: string[];
  commonCauses?: string[];
  insuranceTips?: string;
}

interface Location {
  name: string;
  slug: string;
  state: string;
  county: string;
  population: string;
  populationNum: number;
  keywords: string[];
  responseTime: string;
  casesCompleted: number;
  uniqueFact: string;
  landmarks: string[];
  commonIssues: string[];
  testimonial: {
    name: string;
    text: string;
    rating: number;
  };
}

interface SchemaData {
  image?: string;
  geo?: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  services?: unknown[];
  name?: string;
  description?: string;
  location?: string;
}

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

/**
 * Builds a long-form SEO title using pipe-separated segments.
 * Each segment covers a DIFFERENT intent/benefit — no keyword stuffing.
 * Formula: Target Keyword | Benefit | Related Intent | Trust Signal | Brand
 * Target: 150-230 chars. Google reads full title for ranking even if truncated.
 */
export function buildSEOTitle(segments: string[], maxTotal: number = 197): string {
  const title = segments.filter(Boolean).join(" | ");
  if (title.length <= maxTotal) return title;
  // Trim from the end, keeping complete segments
  let trimmed = segments[0];
  for (let i = 1; i < segments.length; i++) {
    const next = `${trimmed} | ${segments[i]}`;
    if (next.length > maxTotal) break;
    trimmed = next;
  }
  return trimmed;
}

/** Converts "45 minutes" → "45-Min" */
function shortTime(responseTime: string): string {
  return responseTime.replace(/\s*minutes?/, "-Min");
}

export function generateServiceLocationTitle(
  serviceName: string,
  locationName: string,
  state: string,
  responseTime?: string,
  nearbyAreas?: string[],
): string {
  const rt = responseTime ? shortTime(responseTime) : "";
  const nearbyPhrase = nearbyAreas?.length ? `Also Serving ${nearbyAreas.slice(0, 3).join(", ")}` : "";
  return buildSEOTitle([
    `${serviceName} ${locationName}, ${state}`,
    rt ? `On-Site in ${rt}` : `24/7 Emergency Response`,
    `Free Estimates with Direct Insurance Billing`,
    nearbyPhrase,
    `IICRC Certified Since 2015`,
    `M&M Restoration`,
  ]);
}

export function generateServiceLocationDescription(serviceName: string, locationName: string, state: string, responseTime?: string): string {
  const timePhrase = responseTime ? `${shortTime(responseTime)} response` : `24/7 emergency response`;
  return `Professional ${serviceName.toLowerCase()} in ${locationName}, ${state}. ${timePhrase}, IICRC certified, direct insurance billing. Call (616) 648-7775 for free estimate.`;
}

export function generateServiceLocationKeywords(service: Service, location: Location): string[] {
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

export function getRelatedServices(currentServiceSlug: string, services: Service[], count: number = 3): Service[] {
  return services
    .filter(service => service.slug !== currentServiceSlug)
    .slice(0, count);
}

export function getNearbyLocations(currentLocationSlug: string, locations: Location[], count: number = 4): Location[] {
  return locations
    .filter(location => location.slug !== currentLocationSlug)
    .slice(0, count);
}

export function generateSchema(type: 'Service' | 'LocalBusiness' | 'WebPage', data: SchemaData) {
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