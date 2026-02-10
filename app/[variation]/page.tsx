import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, KEYWORD_VARIATIONS, COST_DATA } from "../lib/constants";
import { VARIATION_CONTENT } from "../lib/variation-content";
import { buildSEOTitle } from "../lib/utils";
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

  const content = VARIATION_CONTENT[params.variation];
  const parentService = SERVICES.find(s => s.slug === variation.parentService);
  const baseTitle = content?.title || variation.title;
  const relatedNames = content?.relatedVariations?.slice(0, 2).map((s: string) => KEYWORD_VARIATIONS[s]?.h1).filter(Boolean) || [];
  const relatedPhrase = relatedNames.length ? `See Also ${relatedNames.join(" & ")}` : "";

  const fullTitle = buildSEOTitle([
    baseTitle,
    parentService?.emergencyService ? `24/7 Emergency Response in Greater Lansing` : `Professional Service in Greater Lansing`,
    `Free Estimates with Direct Insurance Billing`,
    relatedPhrase,
    `M&M Restoration`,
  ]);

  return {
    title: fullTitle,
    description: content?.description || variation.description,
    alternates: {
      canonical: `/${params.variation}`,
    },
    openGraph: {
      title: baseTitle,
      description: content?.description || variation.description,
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

  const content = VARIATION_CONTENT[params.variation];

  // Get related variations for cross-linking
  const relatedSlugs = content?.relatedVariations || [];
  const relatedVariations = relatedSlugs
    .filter((slug: string) => KEYWORD_VARIATIONS[slug])
    .map((slug: string) => ({
      slug,
      h1: KEYWORD_VARIATIONS[slug].h1,
    }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:underline">Services</Link>
              <span>/</span>
              <Link href={`/services/${variationData.parentService}`} className="hover:underline">
                {parentService.name}
              </Link>
              <span>/</span>
              <span className="text-white">{variationData.h1}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {parentService.icon} {variationData.h1} in Mid-Michigan
            </h1>

            {content?.heroTagline && (
              <p className="text-2xl text-emerald-300 font-semibold mb-6">
                {content.heroTagline}
              </p>
            )}

            <p className="text-xl text-slate-300 mb-8">
              {content?.description || `Professional ${variationData.h1.toLowerCase()} with 24/7 emergency response and IICRC certified technicians serving Greater Lansing.`}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Call Now: {BUSINESS_INFO.phone}
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

      {/* Unique Intro Section */}
      {content?.introText && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Professional {variationData.h1} in Greater Lansing
              </h2>
              {content.introText.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-lg text-slate-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Unique Benefits Section */}
      {content?.benefits && content.benefits.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Why Choose M&M for {variationData.h1}?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Unique Process Steps */}
      {content?.processSteps && content.processSteps.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Our {variationData.h1} Process
              </h2>
              <ol className="space-y-4">
                {content.processSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 text-lg pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* What to Expect Section */}
      {content?.whatToExpect && content.whatToExpect.items.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                {content.whatToExpect.heading}
              </h2>
              <div className="space-y-6">
                {content.whatToExpect.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-emerald-500">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Emergency CTA */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-emerald-800 mb-3">
              Need {variationData.h1}?
            </h2>
            <p className="text-emerald-700 mb-6 text-lg">
              Don&apos;t wait &mdash; every hour of delay can increase damage. Call us now for immediate assistance.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Unique FAQs */}
      {content?.faqs && content.faqs.length > 0 && (
        <FAQ faqs={content.faqs} title={`${variationData.h1} FAQ`} />
      )}

      {/* Related Variations Cross-Links */}
      {relatedVariations.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedVariations.map((rv) => (
                  <Link
                    key={rv.slug}
                    href={`/${rv.slug}`}
                    className="bg-white p-4 rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
                  >
                    <span className="text-emerald-600 group-hover:text-emerald-700 font-semibold">
                      {rv.h1} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Emergency CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA
            title={`Need ${variationData.h1}?`}
            subtitle="Our certified technicians are ready to help. Contact us now for immediate assistance."
            showTimer={parentService.emergencyService}
          />
        </div>
      </section>

      {/* Parent Service Link */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">
            Looking for more information? Visit our main{" "}
            <Link href={`/services/${variationData.parentService}`} className="text-emerald-600 hover:underline font-semibold">
              {parentService.name}
            </Link>{" "}
            page
            {COST_DATA[variationData.parentService] && (
              <>, see <Link href={`/cost-of/${variationData.parentService}`} className="text-emerald-600 hover:underline font-semibold">
                {parentService.name} pricing
              </Link></>
            )}
            , or{" "}
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
