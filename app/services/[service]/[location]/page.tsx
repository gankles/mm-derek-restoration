import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, LOCATIONS, COUNTIES, COST_DATA } from "../../../lib/constants";
import { generateServiceLocationTitle, generateServiceLocationDescription, generateServiceLocationKeywords, getRelatedServices, getNearbyLocations, buildSEOTitle } from "../../../lib/utils";
import { EmergencyCTA, ServiceCTA, ComparisonCTA } from "../../../components/CTAComponents";
import FAQ from "../../../components/FAQ";
import { ServiceSchema, BreadcrumbSchema } from "../../../components/SchemaMarkup";

interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const params = [];
  
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    }
    for (const county of COUNTIES) {
      params.push({
        service: service.slug,
        location: county.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = SERVICES.find(s => s.slug === params.service);
  const location = LOCATIONS.find(l => l.slug === params.location);
  const county = COUNTIES.find(c => c.slug === params.location);
  
  if (!service || (!location && !county)) {
    return {};
  }

  if (county) {
    const title = buildSEOTitle([
      `${service.name} ${county.name}, MI`,
      `Serving ${county.majorCities.slice(0, 4).join(", ")} & ${county.cities.length}+ Cities`,
      `60-Minute Emergency Response`,
      `Free Estimates with Direct Insurance Billing`,
      `M&M Restoration`,
    ]);
    const description = `Professional ${service.name.toLowerCase()} across ${county.name}, MI. Serving ${county.majorCities.slice(0, 3).join(", ")} & ${county.cities.length - 3}+ more cities. 60-min response. Call 616-648-7775.`;
    return {
      title,
      description,
      keywords: `${service.name.toLowerCase()} ${county.name}, ${county.majorCities.map(c => `${service.name.toLowerCase()} ${c} MI`).join(", ")}, IICRC certified, emergency restoration`,
      alternates: { canonical: `/services/${params.service}/${params.location}` },
      openGraph: { title, description, images: [service.image] },
    };
  }

  const nearby = getNearbyLocations(location!.slug, LOCATIONS, 3).map(l => l.name);
  const title = generateServiceLocationTitle(service.name, location!.name, location!.state, location!.responseTime, nearby);
  const description = generateServiceLocationDescription(service.name, location!.name, location!.state, location!.responseTime);
  const keywords = generateServiceLocationKeywords(service, location!).join(", ");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${params.service}/${params.location}`,
    },
    openGraph: {
      title,
      description,
      images: [service.image],
    },
  };
}

function ServiceCountyPage({ service, county }: { service: typeof SERVICES[number]; county: typeof COUNTIES[number] }) {
  const countyLocations = LOCATIONS.filter(loc => county.cities.includes(loc.slug));
  const relatedServices = getRelatedServices(service.slug, SERVICES, 5);
  const totalCasesCompleted = countyLocations.reduce((sum, loc) => sum + loc.casesCompleted, 0);

  const countyFAQs = [
    {
      question: `Do you provide ${service.name.toLowerCase()} throughout ${county.name}?`,
      answer: `Yes! M&M Restoration provides professional ${service.name.toLowerCase()} to all communities in ${county.name}, Michigan, including ${county.majorCities.join(", ")}, and surrounding areas. We have ${totalCasesCompleted}+ completed projects across the county.`
    },
    {
      question: `How fast can you respond to ${service.name.toLowerCase()} emergencies in ${county.name}?`,
      answer: service.emergencyService
        ? `We provide 24/7 emergency response throughout ${county.name} and typically arrive on-site within 60 minutes. Our teams are strategically positioned to serve all ${county.name} communities quickly.`
        : `We can typically schedule ${service.name.toLowerCase()} in ${county.name} within 24-48 hours. For emergencies, we offer same-day response throughout the county.`
    },
    {
      question: `What areas in ${county.name} do you serve for ${service.name.toLowerCase()}?`,
      answer: `We serve all of ${county.name}, including ${countyLocations.map(l => l.name).join(", ")}. No matter where you are in ${county.name}, our IICRC certified technicians are ready to help.`
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${county.name}?`,
      answer: `Costs vary depending on the extent of damage and specific situation. We provide free, no-obligation estimates throughout ${county.name}. We also work directly with your insurance company to maximize your coverage.`
    },
    {
      question: `Are your ${service.name.toLowerCase()} technicians certified to work in ${county.name}?`,
      answer: `Absolutely. All M&M Restoration technicians are IICRC certified, fully licensed, bonded, and insured for work throughout ${county.name}, Michigan. We maintain all required state and local certifications.`
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name={`${service.name} in ${county.name}, MI`}
        description={`Professional ${service.name.toLowerCase()} services throughout ${county.name}, Michigan. IICRC certified, 60-minute response.`}
        image={service.image}
        areaServed={`${county.name}, MI`}
        isEmergency={service.emergencyService}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
          { name: county.name, url: `/services/${service.slug}/${county.slug}` }
        ]}
      />

      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${service.image}')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {service.emergencyService && (
              <div className="mb-6">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚨 24/7 Emergency Service in {county.name}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.icon} <span className="text-emerald-300">{service.name}</span> in <span className="text-amber-400">{county.name}, MI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Serving {county.majorCities.join(", ")} & all {county.name} communities • IICRC Certified • 60-Minute Response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className={`${service.emergencyService ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors`}
              >
                📞 Call Now: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Free {county.name} Estimate
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">{countyLocations.length}+</div>
                <div className="text-slate-200">Communities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">{totalCasesCompleted}+</div>
                <div className="text-slate-200">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">60 Min</div>
                <div className="text-slate-200">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">24/7</div>
                <div className="text-slate-200">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {service.name} Experts Serving All of {county.name}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {county.description} When {county.name} residents and businesses need professional {service.name.toLowerCase()},
                they trust M&M Restoration for our proven track record of {totalCasesCompleted}+ successful projects across the county.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our IICRC certified technicians understand the unique challenges facing {county.name} properties,
                including {county.commonIssues.slice(0, 2).join(" and ")}. We work with your insurance company to minimize costs and maximize coverage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  `60-minute response throughout ${county.name}`,
                  `${totalCasesCompleted}+ projects completed county-wide`,
                  `Serving all ${countyLocations.length}+ ${county.name} communities`,
                  `Direct insurance billing for ${county.name} claims`,
                  "IICRC certified technicians",
                  `${county.population} residents served`
                ].map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <span className="text-slate-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={`${service.name} in ${county.name}, Michigan`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            {service.name} in Every {county.name} Community
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            We provide {service.name.toLowerCase()} to all cities, villages, and townships in {county.name}. Click any location for specific service details.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {countyLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${service.slug}/${loc.slug}`}
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-emerald-600 text-lg mb-1">{service.icon}</div>
                <div className="font-semibold text-slate-800">{loc.name}</div>
                <div className="text-sm text-slate-500">{loc.responseTime} response</div>
                <div className="text-xs text-emerald-600 mt-1">{loc.casesCompleted}+ projects</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            Common {county.name} {service.name} Issues
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            Our experience in {county.name} has given us deep knowledge of the most common restoration challenges in the area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {county.commonIssues.map((issue, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 flex items-start gap-4">
                <span className="text-emerald-500 text-2xl mt-1">⚠️</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{issue}</h3>
                  <p className="text-slate-600 text-sm">Our team has extensive experience addressing this common {county.name} issue with proven restoration methods.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.emergencyService && (
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Emergency {service.name} Anywhere in {county.name}
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              {county.name} emergency? Every minute counts. Our response teams are positioned to reach any {county.name} community within 60 minutes, 24/7.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors shadow-lg"
            >
              📞 Call {county.name} Emergency: {BUSINESS_INFO.phone}
            </a>
          </div>
        </section>
      )}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            Other Services in {county.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            Complete restoration solutions for {county.name} residents and businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}/${county.slug}`}
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-2xl mb-2">{rs.icon}</div>
                <div className="text-sm font-semibold text-slate-800">{rs.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {COST_DATA[service.slug] && (
        <section className="py-10 bg-emerald-50 border-y border-emerald-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">
                  {service.name} Cost in {county.name}
                </h2>
                <p className="text-slate-600 text-sm">
                  Typical range: <strong>{COST_DATA[service.slug].priceRange}</strong>. See detailed pricing.
                </p>
              </div>
              <Link
                href={`/cost-of/${service.slug}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
              >
                See Pricing Guide →
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ faqs={countyFAQs} title={`${service.name} in ${county.name} - FAQ`} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA
            title={`Need ${service.name} in ${county.name}?`}
            subtitle={`Our certified technicians respond within 60 minutes anywhere in ${county.name}, Michigan. Call now for immediate assistance.`}
            showTimer={service.emergencyService}
          />
        </div>
      </section>
    </div>
  );
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = SERVICES.find(s => s.slug === params.service);
  const county = COUNTIES.find(c => c.slug === params.location);

  if (service && county) {
    return <ServiceCountyPage service={service} county={county} />;
  }

  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!service || !location) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, SERVICES, 3);
  const nearbyLocations = getNearbyLocations(location.slug, LOCATIONS, 5);

  // Create location-specific FAQs
  const getLocationServiceFAQs = (serviceName: string, locationName: string, state: string, isEmergency: boolean) => {
    return [
      {
        question: `Do you provide ${serviceName.toLowerCase()} in ${locationName}, ${state}?`,
        answer: `Yes! M&M Restoration provides professional ${serviceName.toLowerCase()} throughout ${locationName}, ${state} and the surrounding areas. We're proud to serve the ${locationName} community with reliable, professional restoration services.`
      },
      {
        question: `How quickly can you respond to ${serviceName.toLowerCase()} emergencies in ${locationName}?`,
        answer: isEmergency 
          ? `We provide 24/7 emergency response to ${locationName}, ${state} and typically arrive on-site within 60 minutes or less. Our rapid response helps minimize damage and reduces overall restoration costs in the ${locationName} area.`
          : `We can typically schedule ${serviceName.toLowerCase()} in ${locationName} within 24-48 hours, or immediately if it's an emergency situation. We offer flexible scheduling to accommodate ${locationName} residents' needs.`
      },
      {
        question: `Is M&M Restoration licensed to work in ${locationName}, ${state}?`,
        answer: `Yes, M&M Restoration is fully licensed, bonded, and insured to provide ${serviceName.toLowerCase()} throughout ${locationName}, ${state}. Our technicians are IICRC certified and we maintain all required local and state certifications.`
      },
      {
        question: `Do you work with insurance companies for ${serviceName.toLowerCase()} claims in ${locationName}?`,
        answer: `Absolutely! We work with all major insurance companies serving the ${locationName}, ${state} area. We handle the entire claims process and communicate directly with your adjuster to ensure maximum coverage for your ${serviceName.toLowerCase()} claim.`
      },
      {
        question: `What makes M&M Restoration the best choice for ${serviceName.toLowerCase()} in ${locationName}?`,
        answer: `We've been serving ${locationName}, ${state} for years with professional ${serviceName.toLowerCase()}. Our local knowledge, rapid response times, IICRC certification, and commitment to the ${locationName} community make us the trusted choice for restoration services.`
      }
    ];
  };

  const locationServiceFAQs = getLocationServiceFAQs(service.name, location.name, location.state, service.emergencyService);

  const locationContent = {
    localIntro: location.uniqueFact 
      ? `${location.uniqueFact} When ${location.name} residents need ${service.name.toLowerCase()}, they choose M&M Restoration for our proven track record of ${location.casesCompleted}+ successful projects in ${location.county} County.`
      : `When ${location.name}, ${location.state} residents need ${service.name.toLowerCase()}, they trust M&M Restoration for professional service.`,
    whyChooseLocal: [
      `${location.responseTime} guaranteed response to ${location.name}`,
      `${location.casesCompleted}+ projects completed in ${location.county} County`,
      `Understanding of ${location.name}'s common issues: ${location.commonIssues?.[0] || 'local property challenges'}`,
      `Serving all ${location.population} ${location.name} residents`,
      `Strong relationships with ${location.county} County insurance adjusters`
    ],
    serviceAreas: `In addition to ${location.name}, we provide ${service.name.toLowerCase()} throughout ${location.county} County including ${nearbyLocations.slice(0, 3).map(loc => loc.name).join(", ")}.`,
    testimonial: location.testimonial,
    processSteps: service.processSteps || [],
    equipment: service.equipment || [],
    insuranceTips: service.insuranceTips || ''
  };

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name={`${service.name} in ${location.name}, ${location.state}`}
        description={`Professional ${service.name.toLowerCase()} services in ${location.name}, ${location.state}. IICRC certified, 60-minute response.`}
        image={service.image}
        areaServed={`${location.name}, ${location.state}`}
        isEmergency={service.emergencyService}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
          { name: location.name, url: `/services/${service.slug}/${location.slug}` }
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${service.image}')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {service.emergencyService && (
              <div className="mb-6">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚨 24/7 Emergency Service in {location.name}, {location.state}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.icon} <span className="text-emerald-300">{service.name}</span> in <span className="text-amber-400">{location.name}, {location.state}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Professional {service.name.toLowerCase()} serving {location.name} and surrounding areas • IICRC Certified • 60-Minute Response
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className={`${service.emergencyService ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors`}
              >
                📞 Call {location.name}: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Free {location.name} Estimate
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">60 Min</div>
                <div className="text-slate-200">Response to {location.name}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">24/7</div>
                <div className="text-slate-200">{location.name} Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300">Local</div>
                <div className="text-slate-200">{location.name} Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {service.name} Experts Serving {location.name}, {location.state}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {locationContent.localIntro}
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our IICRC certified technicians understand the unique needs of {location.name} properties 
                and use proven techniques specifically designed for the {location.name}, {location.state} area. 
                We work with your insurance company to minimize costs and maximize coverage.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationContent.whyChooseLocal.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <span className="text-slate-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={`${service.name} in ${location.name}, ${location.state}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose M&M for Location */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why {location.name} Residents Choose M&M Restoration
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We&apos;re not just another restoration company. We&apos;re your neighbors in {location.name}, 
              committed to providing exceptional {service.name.toLowerCase()} to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Local {location.name} Knowledge</h3>
              <p className="text-slate-600">
                We understand {location.name}&apos;s unique challenges and have extensive experience 
                with local properties, building codes, and insurance requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fast {location.name} Response</h3>
              <p className="text-slate-600">
                Our proximity to {location.name} ensures rapid response times. We typically 
                arrive within 60 minutes for emergency {service.name.toLowerCase()} situations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Trusted by {location.name}</h3>
              <p className="text-slate-600">
                Hundreds of {location.name} families and businesses have trusted us with their 
                {service.name.toLowerCase()} needs. We&apos;re proud to serve our community.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">IICRC Certified</h3>
              <p className="text-slate-600">
                All our technicians serving {location.name} are certified by the Institute 
                of Inspection, Cleaning and Restoration Certification.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Insurance Partners</h3>
              <p className="text-slate-600">
                We work with all major insurance companies serving {location.name} and 
                handle claims processing to maximize your coverage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Satisfaction Guarantee</h3>
              <p className="text-slate-600">
                We guarantee our {service.name.toLowerCase()} work in {location.name}. 
                If you&apos;re not satisfied, we&apos;ll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response for Location */}
      {service.emergencyService && (
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Emergency {service.name} in {location.name}, {location.state}
              </h2>
              <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
                {location.name} emergency? Don&apos;t wait! The damage gets worse every minute. 
                Our emergency response team is standing by to help {location.name} residents 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors shadow-lg"
                >
                  📞 Call {location.name}: {BUSINESS_INFO.phone}
                </a>
                <div className="text-center">
                  <div className="text-amber-400 font-bold text-xl">⚡ 60 Minutes to {location.name}</div>
                  <div className="text-red-100">Emergency Response Guarantee</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-red-700/50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Call Immediately</h3>
                  <p className="text-red-100 text-sm">
                    Contact our {location.name} emergency line as soon as damage occurs
                  </p>
                </div>
                <div className="bg-red-700/50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Rapid Response</h3>
                  <p className="text-red-100 text-sm">
                    Our certified team arrives in {location.name} within 60 minutes
                  </p>
                </div>
                <div className="bg-red-700/50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Damage Control</h3>
                  <p className="text-red-100 text-sm">
                    Immediate mitigation prevents further damage to your {location.name} property
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service CTA */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <ServiceCTA serviceName={`${service.name} in ${location.name}`} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why {location.name} Homeowners Choose M&M Restoration
            </h2>
          </div>
          <ComparisonCTA />
        </div>
      </section>

      {/* Service Areas Near Location */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {service.name} Service Areas Near {location.name}, {location.state}
            </h2>
            <p className="text-xl text-slate-600">
              {locationContent.serviceAreas}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {nearbyLocations.map((nearbyLocation) => (
              <Link
                key={nearbyLocation.slug}
                href={`/services/${service.slug}/${nearbyLocation.slug}`}
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-emerald-600 text-lg mb-1">📍</div>
                <div className="text-sm font-semibold text-slate-800">{nearbyLocation.name}</div>
                <div className="text-xs text-slate-500">{nearbyLocation.state}</div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/locations"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              View all {service.name.toLowerCase()} service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Other Restoration Services in {location.name}, {location.state}
            </h2>
            <p className="text-xl text-slate-600">
              Complete restoration solutions for {location.name} residents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}/${location.slug}`}
                className="group bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={`${relatedService.name} in ${location.name}, ${location.state}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {relatedService.icon} {relatedService.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">{relatedService.description}</p>
                  <p className="text-emerald-600 text-xs font-semibold">Available in {location.name}, {location.state}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide Link */}
      {COST_DATA[service.slug] && (
        <section className="py-10 bg-emerald-50 border-y border-emerald-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">
                  {service.name} Cost in {location.name}
                </h2>
                <p className="text-slate-600 text-sm">
                  Typical range: <strong>{COST_DATA[service.slug].priceRange}</strong>. See detailed local pricing.
                </p>
              </div>
              <Link
                href={`/cost-of/${service.slug}/${location.slug}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
              >
                See {location.name} Pricing →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ faqs={locationServiceFAQs} title={`${service.name} in ${location.name}, ${location.state} - FAQ`} />

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title={`Need ${service.name} in ${location.name}?`}
            subtitle={`Our certified technicians are ready to help ${location.name}, ${location.state} residents with professional ${service.name.toLowerCase()}. Contact us now!`}
            showTimer={service.emergencyService}
          />
        </div>
      </section>
    </div>
  );
}