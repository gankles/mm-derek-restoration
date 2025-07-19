import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO, SERVICES, FAQ_GENERAL } from "../lib/constants";
import { EmergencyCTA } from "../components/CTAComponents";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Restoration Services | Water Damage, Fire, Mold & Emergency Cleanup in Lansing, MI",
  description: "Complete restoration services in Lansing, MI. Water damage restoration, fire cleanup, mold remediation, storm damage repair, biohazard cleanup. IICRC certified, 24/7 emergency response. Call (616) 648-7775.",
  keywords: "restoration services Lansing MI, water damage restoration, fire damage cleanup, mold remediation, storm damage repair, emergency restoration, biohazard cleanup, IICRC certified",
  openGraph: {
    title: "Restoration Services | Water Damage, Fire, Mold & Emergency Cleanup in Lansing, MI",
    description: "Complete restoration services in Lansing, MI. Water damage restoration, fire cleanup, mold remediation, storm damage repair. IICRC certified, 24/7 emergency response.",
  },
};

export default function ServicesPage() {
  const emergencyServices = SERVICES.filter(service => service.emergencyService);
  const regularServices = SERVICES.filter(service => !service.emergencyService);

  const servicesFAQs = [
    {
      question: "What types of restoration services do you offer?",
      answer: "We offer comprehensive restoration services including water damage restoration, fire damage cleanup, mold remediation, storm damage repair, biohazard cleanup, and various professional cleaning services. Our IICRC certified technicians handle both emergency and non-emergency situations."
    },
    {
      question: "How do you handle insurance claims?",
      answer: "We work directly with all major insurance companies and can handle the entire claims process for you. We'll document the damage, communicate with your adjuster, and help ensure you receive maximum coverage for your claim."
    },
    {
      question: "What equipment do you use for restoration?",
      answer: "We use state-of-the-art, professional-grade equipment including industrial dehumidifiers, air movers, HEPA air scrubbers, moisture detection equipment, thermal imaging cameras, and specialized cleaning tools to ensure thorough and effective restoration."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes! We provide 24/7 emergency response for water damage, fire damage, storm damage, and biohazard situations. We typically arrive on-site within 60 minutes to begin damage mitigation and prevent further loss."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/u5886296838_damage_restoration_--v_7_2e35d18c-2821-4280-a7b0-2d0bd110691d_3.png')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-emerald-400">Restoration Services</span> in Lansing, MI
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              IICRC Certified • 24/7 Emergency Response • Direct Insurance Billing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                🚨 Emergency: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              🚨 Emergency Restoration Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When disaster strikes, every minute counts. Our emergency response team is available 24/7 
              to minimize damage and begin the restoration process immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-red-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    24/7 Emergency
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                    {service.icon} {service.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-red-600 font-semibold flex items-center">
                      Learn More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-red-500 font-semibold">⚡ 60 Min Response</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-2">Emergency Situation?</h3>
              <p className="text-red-700 mb-4">
                Don't wait! Water, fire, and storm damage gets worse every minute. Call now for immediate response.
              </p>
              <a
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
              >
                📞 Call Emergency Line: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Cleaning & Restoration Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond emergency response, we offer comprehensive cleaning and restoration services 
              to maintain and improve your property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Professional Service
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
                    <span className="text-xs text-emerald-500 font-semibold">✓ Free Estimate</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Proven Restoration Process
            </h2>
            <p className="text-xl text-slate-600">
              Every restoration project follows our proven methodology for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Assessment & Documentation</h3>
              <p className="text-slate-600">
                Thorough inspection and documentation of all damage for insurance and restoration planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Damage Mitigation</h3>
              <p className="text-slate-600">
                Immediate action to prevent further damage using professional equipment and techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cleanup & Removal</h3>
              <p className="text-slate-600">
                Complete removal of damaged materials and thorough cleaning of affected areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Restoration & Guarantee</h3>
              <p className="text-slate-600">
                Complete restoration to pre-damage condition with our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose M&M Restoration?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When your property is damaged, you need a restoration company you can trust. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">IICRC Certified Technicians</h3>
              <p className="text-slate-600">
                All our technicians are certified by the Institute of Inspection, Cleaning and Restoration 
                Certification, ensuring the highest standards of professional service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Rapid Emergency Response</h3>
              <p className="text-slate-600">
                Available 24/7 with typical response times of 60 minutes or less for emergency situations 
                throughout the Greater Lansing Area.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Direct Insurance Billing</h3>
              <p className="text-slate-600">
                We work directly with all major insurance companies, handling paperwork and communication 
                to maximize your claim and minimize your out-of-pocket expenses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Professional Equipment</h3>
              <p className="text-slate-600">
                State-of-the-art equipment including industrial dehumidifiers, air movers, HEPA filtration, 
                and moisture detection technology for thorough restoration.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Satisfaction Guarantee</h3>
              <p className="text-slate-600">
                We stand behind our work with a comprehensive satisfaction guarantee. If you're not 
                completely satisfied, we'll make it right.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">5-Star Customer Reviews</h3>
              <p className="text-slate-600">
                Consistently rated 5 stars by our customers for professionalism, quality work, 
                and exceptional customer service throughout the restoration process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={servicesFAQs} title="Restoration Services FAQ" />

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title="Need Professional Restoration Services?"
            subtitle="Whether it's an emergency or scheduled service, our IICRC certified technicians are ready to help restore your property."
          />
        </div>
      </section>
    </div>
  );
}