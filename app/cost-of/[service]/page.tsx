import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, COST_DATA } from "../../lib/constants";
import FAQ from "../../components/FAQ";

interface CostPageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(COST_DATA).map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: CostPageProps): Promise<Metadata> {
  const costData = COST_DATA[params.service];
  if (!costData) return {};

  const title = `${costData.serviceName} Cost in Lansing, MI | 2025 Pricing Guide`;
  const description = `How much does ${costData.serviceName.toLowerCase()} cost in Lansing? Typical range: ${costData.priceRange}. Average: ${costData.avgPrice}. Get free estimates from M&M Restoration. Call 616-648-7775.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://m-mrestoration.com/cost-of/${params.service}`,
    },
  };
}

function FAQSchema({ faqs }: { faqs: Array<{question: string; answer: string}> }) {
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

export default function CostPage({ params }: CostPageProps) {
  const costData = COST_DATA[params.service];
  if (!costData) {
    notFound();
  }

  const service = SERVICES.find(s => s.slug === params.service);

  return (
    <div className="min-h-screen">
      <FAQSchema faqs={costData.faqs} />
      
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:underline">Services</Link>
              <span>/</span>
              <span className="text-white">Cost of {costData.serviceName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Much Does {costData.serviceName} Cost in Lansing, MI?
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Get transparent pricing information for {costData.serviceName.toLowerCase()} in the Greater Lansing area. 
              We provide free estimates and work directly with your insurance company.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">Typical Price Range</p>
                  <p className="text-3xl font-bold">{costData.priceRange}</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">Average Cost</p>
                  <p className="text-3xl font-bold">{costData.avgPrice}</p>
                </div>
              </div>
              <p className="text-slate-300 mt-4 text-sm">
                *These are estimated ranges based on typical Mid-Michigan jobs. Your actual cost depends on damage extent, materials affected, and other factors. 
                Good news: most homeowners insurance covers this work - and we bill your insurance directly so you only pay your deductible.
              </p>
            </div>
            
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

      <section className="py-4 bg-slate-100 border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#overview" className="text-slate-600 hover:text-emerald-600">Overview</a>
            <span className="text-slate-300">|</span>
            <a href="#projects" className="text-slate-600 hover:text-emerald-600">Common Projects</a>
            <span className="text-slate-300">|</span>
            <a href="#costs" className="text-slate-600 hover:text-emerald-600">Cost Breakdown</a>
            <span className="text-slate-300">|</span>
            <a href="#similar" className="text-slate-600 hover:text-emerald-600">Related Services</a>
            <span className="text-slate-300">|</span>
            <a href="#faq" className="text-slate-600 hover:text-emerald-600">FAQ</a>
          </div>
        </div>
      </section>

      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              {costData.serviceName} Overview
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              {costData.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Common {costData.serviceName} Projects
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Property owners in Lansing commonly need {costData.serviceName.toLowerCase()} for these situations:
            </p>
            
            <div className="space-y-4">
              {costData.commonProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="costs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {costData.serviceName} Cost Breakdown
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Costs vary based on project scope and complexity. Here&apos;s what to expect at different levels:
            </p>
            
            <div className="space-y-6">
              {costData.costTiers.map((tier, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border-l-4 border-emerald-500">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{tier.name}</h3>
                    <span className="text-2xl font-bold text-emerald-600">{tier.range}</span>
                  </div>
                  <p className="text-slate-600">{tier.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-3">Important Cost Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {costData.factors.map((factor, index) => (
                  <div key={index} className="flex items-start gap-2 text-amber-700">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {costData.serviceName} in Greater Lansing
            </h2>
            <div className="text-emerald-100 text-lg leading-relaxed">
              <p>{costData.localContext}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="similar" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Services
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              These services are often needed alongside or instead of {costData.serviceName.toLowerCase()}:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {costData.similarServices.map((similar, index) => (
                <Link
                  key={index}
                  href={`/services/${similar.slug}`}
                  className="bg-white rounded-lg p-5 shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{similar.name}</h3>
                  <p className="text-slate-600 text-sm">{similar.description}</p>
                  <span className="text-emerald-600 text-sm font-semibold mt-2 inline-block">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">How to Save Money</h3>
                <ul className="space-y-3 text-emerald-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">1.</span>
                    <span><strong>Act fast</strong> - Every hour of delay increases damage and cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">2.</span>
                    <span><strong>Document everything</strong> - Photos help maximize insurance claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">3.</span>
                    <span><strong>Skip the DIY</strong> - Amateur attempts often cause more damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">4.</span>
                    <span><strong>Review your policy</strong> - Many costs may already be covered</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose M&M Restoration?</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span>Free, no-obligation estimates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span>Direct insurance billing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span>Transparent pricing - no surprises</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span>IICRC certified technicians</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span>24/7 emergency response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faq">
        <FAQ faqs={costData.faqs} title={`${costData.serviceName} Cost FAQ`} />
      </div>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free {costData.serviceName} Estimate
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Every situation is unique. Contact us for an accurate, no-obligation estimate for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Request Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {service && (
        <section className="py-8 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-600">
              Learn more about our{" "}
              <Link href={`/services/${params.service}`} className="text-emerald-600 hover:underline font-semibold">
                {service.name}
              </Link>{" "}
              services or{" "}
              <Link href="/services" className="text-emerald-600 hover:underline font-semibold">
                view all services
              </Link>.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
