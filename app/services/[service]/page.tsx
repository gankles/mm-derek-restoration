import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "../../lib/constants";
import { generateServiceLocationTitle, generateServiceLocationDescription, getRelatedServices, getNearbyLocations } from "../../lib/utils";
import { EmergencyCTA, ServiceCTA, ComparisonCTA } from "../../components/CTAComponents";
import FAQ from "../../components/FAQ";

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

  // Create service-specific FAQs
  const getServiceFAQs = (serviceName: string, isEmergency: boolean) => {
    const baseFAQs = [
      {
        question: `How quickly can you respond to ${serviceName.toLowerCase()} emergencies?`,
        answer: isEmergency 
          ? `We provide 24/7 emergency response for ${serviceName.toLowerCase()} and typically arrive on-site within 60 minutes or less throughout the Greater Lansing Area. Quick response is critical to prevent further damage.`
          : `We can typically schedule ${serviceName.toLowerCase()} within 24-48 hours, or immediately if it's an emergency situation. We offer flexible scheduling to meet your needs.`
      },
      {
        question: `What does the ${serviceName.toLowerCase()} process involve?`,
        answer: `Our ${serviceName.toLowerCase()} process includes: 1) Immediate assessment and documentation, 2) Damage containment and mitigation, 3) Professional cleanup and removal, 4) Restoration to pre-damage condition, and 5) Final inspection and guarantee.`
      },
      {
        question: `Will insurance cover ${serviceName.toLowerCase()}?`,
        answer: `Most homeowner's insurance policies cover ${serviceName.toLowerCase()} when it's the result of a covered peril. We work directly with your insurance company to handle claims processing and maximize your coverage.`
      },
      {
        question: `How long does ${serviceName.toLowerCase()} take?`,
        answer: `The timeline depends on the extent of damage. Most ${serviceName.toLowerCase()} projects take 3-7 days, but we'll provide you with a detailed timeline during our initial assessment.`
      }
    ];

    // Add emergency-specific FAQ
    if (isEmergency) {
      baseFAQs.push({
        question: `What should I do while waiting for your ${serviceName.toLowerCase()} team?`,
        answer: `For safety, evacuate if necessary and avoid the affected area. Don't attempt cleanup yourself. If safe to do so, take photos for insurance, turn off utilities if instructed, and wait for our certified technicians to arrive.`
      });
    }

    return baseFAQs;
  };

  const serviceFAQs = getServiceFAQs(service.name, service.emergencyService);

  // Service-specific content based on service type
  const getServiceContent = (service: any) => {
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
      ]
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

  return (
    <div className="min-h-screen">
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
              {service.icon} <span className="text-emerald-400">{service.name}</span> in Lansing, MI
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
                <div className="text-yellow-300 font-bold text-lg">⚡ Emergency Response: 60 Minutes or Less!</div>
                <div className="text-red-100">Available 24/7 throughout the Greater Lansing Area</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Professional {service.name} Services
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                When you need {service.name.toLowerCase()}, you need a team you can trust. M&M Restoration 
                has been serving the Greater Lansing Area with professional, reliable {service.name.toLowerCase()} 
                services that restore your property to pre-damage condition.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our IICRC certified technicians use the latest equipment and proven techniques to ensure 
                complete {service.name.toLowerCase()}. We work with your insurance company to minimize 
                your costs and maximize your coverage.
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
              Every {service.name.toLowerCase()} project follows our proven methodology for optimal results
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
      {serviceContent.equipment && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Professional-Grade Equipment
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We use the latest, most advanced equipment to ensure thorough and effective {service.name.toLowerCase()}
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
          <ServiceCTA serviceName={service.name} serviceSlug={service.slug} />
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
              {service.name} Service Areas
            </h2>
            <p className="text-xl text-slate-600">
              We provide {service.name.toLowerCase()} throughout the Greater Lansing Area
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
              Related Restoration Services
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive restoration solutions for all your needs
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

      {/* Final CTA */}
      <section className="py-16 bg-white">
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