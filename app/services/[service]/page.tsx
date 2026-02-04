import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, LOCATIONS, SERVICE_FAQS } from "../../lib/constants";
import { getRelatedServices, getNearbyLocations } from "../../lib/utils";
import { EmergencyCTA, ServiceCTA, ComparisonCTA, IntentAnswer } from "../../components/CTAComponents";
import FAQ from "../../components/FAQ";
import { ServiceSchema, BreadcrumbSchema, AuthorBox, LastUpdated, COMPANY_EXPERT } from "../../components/SchemaMarkup";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find(s => s.slug === params.service);
  
  if (!service) {
    return {};
  }

  return {
    title: `${service.name} in Lansing, MI | M&M Restoration | 24/7 Emergency Response`,
    description: `Professional ${service.name.toLowerCase()} services in Lansing, MI and surrounding areas. IICRC certified technicians, 60-minute response time, direct insurance billing. Call (616) 648-7775 for immediate help.`,
    keywords: `${service.keywords.join(", ")}, Lansing MI, emergency response, IICRC certified, restoration services`,
    alternates: {
      canonical: `/services/${params.service}`,
    },
    openGraph: {
      title: `${service.name} in Lansing, MI | M&M Restoration`,
      description: `Professional ${service.name.toLowerCase()} services in Lansing, MI. IICRC certified, 60-minute response time, direct insurance billing.`,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find(s => s.slug === params.service);
  
  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, SERVICES, 3);
  const nearbyLocations = getNearbyLocations("", LOCATIONS, 6);

  const getServiceFAQs = () => {
    const customFAQs = (service?.slug && SERVICE_FAQS[service.slug]) || [];
    
    const baseFAQs = [
      {
        question: `How quickly can you respond to ${service.name.toLowerCase()} emergencies?`,
        answer: service.emergencyService 
          ? `We provide 24/7 emergency response for ${service.name.toLowerCase()} and typically arrive on-site within 60 minutes or less throughout the Greater Lansing Area. Quick response is critical to prevent further damage.`
          : `We can typically schedule ${service.name.toLowerCase()} within 24-48 hours, or immediately if it's an emergency. We offer flexible scheduling to meet your needs.`
      },
      {
        question: `What does the ${service.name.toLowerCase()} process involve?`,
        answer: service.processSteps 
          ? `Our ${service.name.toLowerCase()} process includes: ${service.processSteps.map((step, i) => `${i + 1}) ${step}`).join(', ')}.`
          : `Our ${service.name.toLowerCase()} process includes assessment, mitigation, professional cleanup, restoration, and final inspection with guarantee.`
      },
      {
        question: `Will insurance cover ${service.name.toLowerCase()}?`,
        answer: service.insuranceTips || `Most homeowner's insurance policies cover ${service.name.toLowerCase()} when it's the result of a covered peril. We work directly with your insurance company to handle claims processing and maximize your coverage.`
      },
      {
        question: `How long does ${service.name.toLowerCase()} take?`,
        answer: service.typicalDuration 
          ? `Most ${service.name.toLowerCase()} projects take ${service.typicalDuration}, depending on the extent of damage. We'll provide you with a detailed timeline during our initial assessment.`
          : `The timeline depends on the extent of damage. We'll provide you with a detailed timeline during our initial assessment.`
      }
    ];

    if (service.emergencyService) {
      baseFAQs.push({
        question: `What should I do while waiting for your ${service.name.toLowerCase()} team?`,
        answer: `For safety, evacuate if necessary and avoid the affected area. Don't attempt cleanup yourself. If safe to do so, take photos for insurance, turn off utilities if instructed, and wait for our certified technicians to arrive.`
      });
    }

    const allFAQs = [...customFAQs, ...baseFAQs];
    const seen = new Set<string>();
    return allFAQs.filter(faq => {
      const key = faq.question.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const serviceFAQs = getServiceFAQs();

  // Service-specific content based on service type
  const getServiceContent = (service: { slug: string }) => {
    const baseContent = {
      process: [
        "Emergency Assessment & Documentation",
        "Immediate Damage Mitigation",
        "Professional Cleanup & Removal", 
        "Complete Restoration",
        "Final Inspection & Guarantee"
      ],
      benefits: [
        "IICRC Certified Technicians",
        "24/7 Emergency Response",
        "Direct Insurance Billing",
        "Advanced Professional Equipment",
        "Satisfaction Guarantee"
      ],
      equipment: [] as string[]
    };

    // Customize content based on service
    switch (service.slug) {
      case 'water-damage-restoration':
        return {
          ...baseContent,
          process: [
            "Emergency Water Extraction",
            "Moisture Detection & Assessment", 
            "Dehumidification & Drying",
            "Cleaning & Sanitization",
            "Restoration & Reconstruction"
          ],
          equipment: [
            "Industrial Water Extractors",
            "High-Powered Dehumidifiers", 
            "Air Movers & Fans",
            "Moisture Detection Equipment",
            "HEPA Air Scrubbers"
          ]
        };
      case 'fire-damage-cleanup':
        return {
          ...baseContent,
          process: [
            "Scene Assessment & Safety",
            "Soot & Smoke Removal",
            "Odor Elimination", 
            "Content Cleaning",
            "Structural Restoration"
          ],
          equipment: [
            "HEPA Air Scrubbers",
            "Ozone Generators",
            "Thermal Foggers",
            "Ultrasonic Cleaners",
            "Industrial Vacuums"
          ]
        };
      case 'mold-remediation':
        return {
          ...baseContent,
          process: [
            "Mold Inspection & Testing",
            "Contamination Containment",
            "Mold Removal & Cleaning",
            "Air Quality Restoration",
            "Prevention Measures"
          ],
          equipment: [
            "HEPA Air Filtration",
            "Negative Air Machines",
            "Antimicrobial Treatments",
            "Moisture Control Equipment",
            "Air Quality Testing"
          ]
        };
      default:
        return baseContent;
    }
  };

  const serviceContent = getServiceContent(service);

  const getIntentData = (serviceSlug: string) => {
    const intentData: Record<string, { question: string; answer: string; keyFacts: Array<{ label: string; value: string }> }> = {
      'water-damage-restoration': {
        question: "What Should You Do If Your Basement Floods?",
        answer: `Call M&M Restoration immediately at ${BUSINESS_INFO.phone}. We arrive within 60 minutes, extract standing water with industrial equipment, set up dehumidifiers to prevent mold, and handle your insurance claim - all in one call. Every hour of delay increases damage and cost.`,
        keyFacts: [
          { label: "Response", value: "60 min" },
          { label: "Typical Cost", value: "$2,500-$7,500" },
          { label: "Timeline", value: "3-5 days" },
          { label: "Insurance", value: "We bill direct" }
        ]
      },
      'mold-remediation': {
        question: "How Do You Know If You Have Mold in Your House?",
        answer: `Look for musty odors, visible dark spots, recent water damage, or allergy symptoms that improve when you leave home. M&M Restoration offers professional mold testing and complete remediation with HEPA air filtration, containment, and post-removal clearance testing.`,
        keyFacts: [
          { label: "Testing", value: "Same-day" },
          { label: "Typical Cost", value: "$1,500-$6,000" },
          { label: "Timeline", value: "3-7 days" },
          { label: "Guarantee", value: "Clearance test" }
        ]
      },
      'fire-damage-cleanup': {
        question: "Who Cleans Up After a House Fire?",
        answer: `Professional fire restoration companies like M&M Restoration handle everything: emergency board-up, water removal from firefighting, soot and smoke cleanup, odor elimination, content restoration, and structural repairs. We work directly with your insurance for full coverage.`,
        keyFacts: [
          { label: "Board-up", value: "Same day" },
          { label: "Typical Cost", value: "$3,000-$15,000" },
          { label: "Timeline", value: "1-3 weeks" },
          { label: "Contents", value: "Often saveable" }
        ]
      },
      'storm-damage-restoration': {
        question: "What Should You Do After Storm Damage?",
        answer: `Document all damage with photos immediately, then call M&M Restoration for emergency tarping and board-up to prevent further water intrusion. Don't wait for your insurance adjuster - they expect you to mitigate damage. We document everything for your claim.`,
        keyFacts: [
          { label: "Emergency", value: "24/7 tarping" },
          { label: "Typical Cost", value: "$2,000-$10,000" },
          { label: "Timeline", value: "1-2 weeks" },
          { label: "Insurance", value: "Usually covered" }
        ]
      },
      'biohazard-cleanup': {
        question: "Who Should You Call for Biohazard Cleanup?",
        answer: `Never attempt biohazard cleanup yourself - it requires OSHA-certified technicians, proper PPE, EPA-registered disinfectants, and legal disposal methods. M&M Restoration provides confidential, compassionate service and can help with insurance or victim assistance programs.`,
        keyFacts: [
          { label: "Response", value: "Discreet & fast" },
          { label: "Typical Cost", value: "$2,000-$8,000" },
          { label: "Timeline", value: "1-3 days" },
          { label: "Coverage", value: "Often covered" }
        ]
      },
      'sewage-cleanup-services': {
        question: "Is Sewage Backup Dangerous to Clean Up Yourself?",
        answer: `Yes - sewage contains dangerous bacteria, viruses, and parasites. Category 3 'black water' requires professional cleanup with proper PPE and hospital-grade disinfection. M&M Restoration extracts contaminated water, removes affected materials, and fully sanitizes the area.`,
        keyFacts: [
          { label: "Health Risk", value: "High - call pros" },
          { label: "Typical Cost", value: "$2,500-$7,000" },
          { label: "Timeline", value: "2-4 days" },
          { label: "Insurance", value: "Needs endorsement" }
        ]
      }
    };
    
    return intentData[serviceSlug] || {
      question: `Do You Need Professional ${service.name}?`,
      answer: `M&M Restoration provides IICRC certified ${service.name.toLowerCase()} throughout the Greater Lansing Area. We offer free estimates, work directly with insurance, and guarantee our work. Call ${BUSINESS_INFO.phone} for immediate assistance.`,
      keyFacts: [
        { label: "Certified", value: "IICRC" },
        { label: "Estimates", value: "Free" },
        { label: "Available", value: "24/7" },
        { label: "Insurance", value: "Direct billing" }
      ]
    };
  };

  const intentData = getIntentData(service.slug);

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name={service.name}
        description={service.description}
        image={service.image}
        isEmergency={service.emergencyService}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` }
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
                  🚨 24/7 Emergency Service Available
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.icon} <span className="text-emerald-300">{service.name}</span> in Lansing, MI
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              {service.description} • IICRC Certified • Direct Insurance Billing
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
                Get Free Estimate
              </Link>
            </div>

            {service.emergencyService && (
              <div className="bg-red-600/80 backdrop-blur-sm rounded-lg p-4 inline-block">
                <div className="text-amber-400 font-bold text-lg">⚡ Emergency Response: 60 Minutes or Less!</div>
                <div className="text-red-100">Available 24/7 throughout the Greater Lansing Area</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <IntentAnswer 
        question={intentData.question}
        answer={intentData.answer}
        keyFacts={intentData.keyFacts}
      />
      
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <LastUpdated date="2025-01-15" />
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Written by {COMPANY_EXPERT.name}, {COMPANY_EXPERT.credentials}</span>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Why Choose a Professional for {service.name}?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                <strong>Professional restoration prevents secondary damage and saves money long-term.</strong>{' '}
                M&M Restoration has been serving the Greater Lansing Area since 2015 with certified technicians 
                who restore your property to pre-damage condition - often better than before.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our IICRC certified technicians use industrial-grade equipment that dries 10x faster than 
                consumer equipment. We also work directly with your insurance company to minimize 
                your out-of-pocket costs and handle all the paperwork.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={`${service.name} in Lansing, MI`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our {service.name} Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven 5-step approach that ensures complete restoration with no surprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {serviceContent.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${service.emergencyService ? 'bg-red-600' : 'bg-emerald-600'} text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section (if available) */}
      {serviceContent.equipment && serviceContent.equipment.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Professional-Grade Equipment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industrial tools that dry faster and clean deeper than consumer alternatives
            </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceContent.equipment.map((equipment, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 text-center">
                  <div className="text-emerald-600 text-3xl mb-3">🔧</div>
                  <h3 className="text-lg font-semibold text-slate-800">{equipment}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service CTA */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <ServiceCTA serviceName={service.name} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ComparisonCTA />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-slate-600">
              {service.name} throughout Greater Lansing
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {nearbyLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-emerald-600 text-lg mb-1">📍</div>
                <div className="text-sm font-semibold text-slate-800">{location.name}</div>
                <div className="text-xs text-slate-500">{location.state}</div>
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

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Services
            </h2>
            <p className="text-xl text-slate-600">
              Water, fire, and mold damage often occur together — we handle it all
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {relatedService.icon} {relatedService.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{relatedService.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={serviceFAQs} title={`${service.name} FAQ`} />

      {/* Author Attribution */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorBox />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title={`Need ${service.name}?`}
            subtitle={`Our certified technicians are ready to help with professional ${service.name.toLowerCase()}. Contact us now for immediate assistance.`}
            showTimer={service.emergencyService}
          />
        </div>
      </section>
    </div>
  );
}