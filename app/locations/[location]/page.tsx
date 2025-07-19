import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "../../lib/constants";
import { getNearbyLocations } from "../../lib/utils";
import { EmergencyCTA } from "../../components/CTAComponents";
import FAQ from "../../components/FAQ";

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    location: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!location) {
    return {};
  }

  return {
    title: `Restoration Services in ${location.name}, ${location.state} | M&M Restoration | 24/7 Emergency Response`,
    description: `Professional restoration services in ${location.name}, ${location.state}. Water damage, fire cleanup, mold remediation, emergency response. IICRC certified, 60-minute response time. Call (616) 648-7775 for immediate help.`,
    keywords: `restoration services ${location.name} ${location.state}, water damage restoration ${location.name}, fire damage cleanup ${location.name}, mold remediation ${location.name}, emergency restoration ${location.name}`,
    openGraph: {
      title: `Restoration Services in ${location.name}, ${location.state} | M&M Restoration`,
      description: `Professional restoration services in ${location.name}, ${location.state}. Water damage, fire cleanup, mold remediation. IICRC certified, 60-minute response time.`,
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!location) {
    notFound();
  }

  const emergencyServices = SERVICES.filter(service => service.emergencyService);
  const regularServices = SERVICES.filter(service => !service.emergencyService);
  const nearbyLocations = getNearbyLocations(location.slug, LOCATIONS, 6);

  // Create location-specific FAQs
  const getLocationFAQs = (locationName: string, state: string) => {
    return [
      {
        question: `Do you provide restoration services in ${locationName}, ${state}?`,
        answer: `Yes! M&M Restoration proudly serves ${locationName}, ${state} with comprehensive restoration services including water damage restoration, fire damage cleanup, mold remediation, and emergency response. We're committed to serving the ${locationName} community with professional, reliable service.`
      },
      {
        question: `How quickly can you respond to emergencies in ${locationName}?`,
        answer: `We provide 24/7 emergency response to ${locationName}, ${state} and typically arrive on-site within 60 minutes or less. Our rapid response helps minimize damage and reduces overall restoration costs for ${locationName} residents.`
      },
      {
        question: `Are you licensed to work in ${locationName}, ${state}?`,
        answer: `Yes, M&M Restoration is fully licensed, bonded, and insured to provide restoration services throughout ${locationName}, ${state}. Our technicians are IICRC certified and we maintain all required local and state certifications.`
      },
      {
        question: `Do you work with insurance companies for claims in ${locationName}?`,
        answer: `Absolutely! We work with all major insurance companies serving the ${locationName}, ${state} area. We handle the entire claims process and communicate directly with your adjuster to ensure maximum coverage for your restoration claim.`
      },
      {
        question: `What makes M&M Restoration the best choice for ${locationName} residents?`,
        answer: `We've been serving ${locationName}, ${state} for years with professional restoration services. Our local knowledge, rapid response times, IICRC certification, and commitment to the ${locationName} community make us the trusted choice for restoration services.`
      }
    ];
  };

  const locationFAQs = getLocationFAQs(location.name, location.state);

  // Get location-specific content
  const getLocationContent = (locationName: string, state: string) => {
    const content = {
      intro: `When ${locationName}, ${state} residents need professional restoration services, they trust M&M Restoration. We've been serving the ${locationName} community with reliable, professional restoration services that restore properties to their original condition.`,
      
      localAdvantages: [
        `Expert knowledge of ${locationName} area properties`,
        `Rapid response throughout ${locationName}, ${state}`,
        `Strong relationships with local ${locationName} contractors`,
        `Understanding of ${locationName} building codes and regulations`,
        `Commitment to the ${locationName} community`
      ],

      emergencyResponse: `${locationName} emergency? Don't wait! Restoration damage gets worse every minute. Our emergency response team serves ${locationName}, ${state} 24/7 with guaranteed response times of 60 minutes or less.`,

      serviceDescription: `Our comprehensive restoration services in ${locationName}, ${state} include everything from emergency water damage restoration to complete fire damage cleanup. We understand the unique challenges that ${locationName} properties face and tailor our services accordingly.`
    };

    return content;
  };

  const locationContent = getLocationContent(location.name, location.state);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/goldeneyed_a_team_of_restoration_technicians_cleaning_up_water__41dd225b-df4d-49ca-b645-26f8fc8361d6.png')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📍 Proudly Serving {location.name}, {location.state}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-emerald-400">Restoration Services</span> in <span className="text-yellow-300">{location.name}, {location.state}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              24/7 Emergency Response • IICRC Certified • Direct Insurance Billing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                🚨 Emergency {location.name}: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Free {location.name} Estimate
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">60 Min</div>
                <div className="text-slate-200">Response to {location.name}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-slate-200">{location.name} Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">Local</div>
                <div className="text-slate-200">{location.name} Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Restoration Experts Serving {location.name}, {location.state}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {locationContent.intro}
              </p>
              <p className="text-lg text-slate-600 mb-8">
                {locationContent.serviceDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationContent.localAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <span className="text-slate-700 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/goldeneyed_a_team_of_restoration_technicians_cleaning_up_water__41dd225b-df4d-49ca-b645-26f8fc8361d6.png"
                alt={`M&M Restoration team serving ${location.name}, ${location.state}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 Emergency Services in {location.name}, {location.state}
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              {locationContent.emergencyResponse}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="group bg-red-700/50 border border-red-500 rounded-lg p-6 hover:bg-red-700/70 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-red-100 text-sm mb-3">{service.description}</p>
                  <div className="text-yellow-300 font-semibold text-sm">Available in {location.name}</div>
                  <div className="text-red-200 text-xs mt-1">⚡ 60-minute response</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors shadow-lg"
            >
              📞 {location.name} Emergency: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Cleaning & Restoration Services in {location.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond emergency response, we offer comprehensive cleaning and restoration services 
              to maintain and improve {location.name} properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${location.name}, ${location.state}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {location.name} Service
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.icon} {service.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-emerald-600 font-semibold flex items-center">
                      Learn More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-emerald-500 font-semibold">✓ Free {location.name} Estimate</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose M&M for Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why {location.name} Residents Choose M&M Restoration
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're more than just a restoration company - we're your neighbors in {location.name}, 
              committed to protecting and restoring our community's properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Local {location.name} Knowledge</h3>
              <p className="text-slate-600">
                Deep understanding of {location.name} properties, local building codes, 
                and community-specific restoration challenges.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Rapid {location.name} Response</h3>
              <p className="text-slate-600">
                Strategic positioning ensures 60-minute response times to {location.name} 
                for all emergency restoration situations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Trusted by {location.name}</h3>
              <p className="text-slate-600">
                Hundreds of {location.name} families and businesses have trusted us 
                with their most important restoration needs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">IICRC Certified Team</h3>
              <p className="text-slate-600">
                All technicians serving {location.name} are certified by the Institute 
                of Inspection, Cleaning and Restoration Certification.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Insurance Partnership</h3>
              <p className="text-slate-600">
                Direct billing relationships with all major insurance companies 
                serving the {location.name} area.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-emerald-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Satisfaction Guarantee</h3>
              <p className="text-slate-600">
                We guarantee our restoration work in {location.name}. Your complete 
                satisfaction is our commitment to the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Service Areas Near {location.name}, {location.state}
            </h2>
            <p className="text-xl text-slate-600">
              We also provide restoration services to these nearby communities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {nearbyLocations.map((nearbyLocation) => (
              <Link
                key={nearbyLocation.slug}
                href={`/locations/${nearbyLocation.slug}`}
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
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={locationFAQs} title={`Restoration Services in ${location.name}, ${location.state} - FAQ`} />

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title={`Need Restoration Services in ${location.name}?`}
            subtitle={`Our certified technicians are ready to help ${location.name}, ${location.state} residents and businesses with professional restoration services. Contact us now!`}
          />
        </div>
      </section>
    </div>
  );
}