import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, KEYWORD_VARIATIONS, SERVICE_FAQS } from "../lib/constants";
import { EmergencyCTA } from "../components/CTAComponents";
import FAQ from "../components/FAQ";

interface VariationPageProps {
  params: {
    variation: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(KEYWORD_VARIATIONS).map((variation) => ({
    variation,
  }));
}

export async function generateMetadata({ params }: VariationPageProps): Promise<Metadata> {
  const variation = KEYWORD_VARIATIONS[params.variation];
  if (!variation) return {};

  return {
    title: variation.title,
    description: variation.description,
    alternates: {
      canonical: `/services/${variation.parentService}`,
    },
    openGraph: {
      title: variation.title,
      description: variation.description,
      url: `https://m-mrestoration.com/${params.variation}`,
    },
  };
}

export default function VariationPage({ params }: VariationPageProps) {
  const variationData = KEYWORD_VARIATIONS[params.variation];
  if (!variationData) {
    notFound();
  }

  const parentService = SERVICES.find(s => s.slug === variationData.parentService);
  if (!parentService) {
    notFound();
  }

  const serviceFAQs = SERVICE_FAQS[variationData.parentService] || [];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:underline">Services</Link>
              <span>/</span>
              <span className="text-white">{variationData.h1}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {parentService.icon} {variationData.h1} in Lansing, MI
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              {parentService.description}. Professional {variationData.h1.toLowerCase()} with 24/7 emergency response 
              and IICRC certified technicians serving Greater Lansing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                📞 Call Now: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-white/30"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Professional {variationData.h1} Services
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              M&M Restoration provides expert {variationData.h1.toLowerCase()} throughout the Greater Lansing area. 
              Our IICRC certified technicians respond within 60 minutes and use professional-grade equipment 
              to restore your property quickly and completely.
            </p>

            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose M&M for {variationData.h1}?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700">24/7 emergency response - we answer calls day and night</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700">60-minute response time throughout Greater Lansing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700">IICRC certified technicians with {parentService.typicalDuration} average completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700">Direct insurance billing - we handle the paperwork</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700">Free estimates with no obligation</span>
                </li>
              </ul>
            </div>

            {parentService.processSteps && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our {variationData.h1} Process</h3>
                <ol className="space-y-3">
                  {parentService.processSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Need {variationData.h1}?</h3>
              <p className="text-emerald-700 mb-4">
                Don&apos;t wait - every hour of delay can increase damage. Call us now for immediate assistance.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                📞 {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {serviceFAQs.length > 0 && (
        <FAQ faqs={serviceFAQs} title={`${variationData.h1} FAQ`} />
      )}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title={`Need ${variationData.h1}?`}
            subtitle="Our certified technicians are ready to help. Contact us now for immediate assistance."
            showTimer={parentService.emergencyService}
          />
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">
            Looking for more information? Visit our main{" "}
            <Link href={`/services/${variationData.parentService}`} className="text-emerald-600 hover:underline font-semibold">
              {parentService.name}
            </Link>{" "}
            page or{" "}
            <Link href="/contact" className="text-emerald-600 hover:underline font-semibold">
              contact us
            </Link>{" "}
            for a free consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
