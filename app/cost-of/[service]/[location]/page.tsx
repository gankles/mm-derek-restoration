import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, LOCATIONS, COST_DATA } from "../../../lib/constants";
import { buildSEOTitle } from "../../../lib/utils";
import FAQ from "../../../components/FAQ";

interface LocationCostPageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  
  Object.keys(COST_DATA).forEach((service) => {
    LOCATIONS.forEach((location) => {
      params.push({
        service,
        location: location.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: LocationCostPageProps): Promise<Metadata> {
  const costData = COST_DATA[params.service];
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!costData || !location) return {};

  const title = buildSEOTitle([
    `${costData.serviceName} Cost ${location.name}, MI`,
    `Typical Range ${costData.priceRange}`,
    `${location.county} County 2025 Pricing`,
    `Free Estimates with Direct Insurance Billing`,
    `M&M Restoration`,
  ]);
  const description = `${costData.serviceName} in ${location.name} costs ${costData.priceRange}, avg ${costData.avgPrice}. ${location.responseTime} response. Insurance billed direct. Free estimates — call 616-648-7775.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/cost-of/${params.service}/${params.location}`,
    },
    openGraph: {
      title,
      description,
      url: `https://m-mrestoration.com/cost-of/${params.service}/${params.location}`,
    },
  };
}


function LocalBusinessSchema({ location, serviceName }: { location: typeof LOCATIONS[0]; serviceName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `M&M Restoration - ${serviceName} in ${location.name}`,
    "telephone": BUSINESS_INFO.phone,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Michigan"
      }
    },
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function LocationCostPage({ params }: LocationCostPageProps) {
  const costData = COST_DATA[params.service];
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!costData || !location) {
    notFound();
  }

  const nearbyLocations = LOCATIONS.filter(l => 
    l.county === location.county && l.slug !== location.slug
  ).slice(0, 6);

  const otherCountyLocations = LOCATIONS.filter(l => 
    l.county !== location.county
  ).slice(0, 4);

  const localizedFaqs = costData.faqs.map(faq => ({
    question: faq.question.replace(/Lansing/g, location.name),
    answer: faq.answer.replace(/Lansing/g, location.name).replace(/Greater Lansing/g, `${location.name} and surrounding areas`)
  }));

  return (
    <div className="min-h-screen">
      <LocalBusinessSchema location={location} serviceName={costData.serviceName} />
      
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4 text-sm flex-wrap">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href={`/cost-of/${params.service}`} className="hover:underline">{costData.serviceName} Cost</Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {costData.serviceName} Cost in {location.name}, MI
            </h1>
            
            <p className="text-xl text-slate-300 mb-4">
              Dealing with damage is stressful enough. You shouldn&apos;t have to wonder what it&apos;ll cost to fix. 
              We&apos;ll give you a straight answer with a free estimate - no games, no pressure, no surprises.
            </p>
            
            <p className="text-lg text-slate-400 mb-8">
              We&apos;ve helped {location.casesCompleted}+ {location.name} families get their homes back to normal. 
              We know {location.county} County properties, we work with your insurance, and we can be there 
              in {location.responseTime}. Let us take this problem off your plate.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">Typical Cost Range</p>
                  <p className="text-3xl font-bold">{costData.priceRange}</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">Most People Pay</p>
                  <p className="text-3xl font-bold">{costData.avgPrice}</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">We&apos;ll Be There In</p>
                  <p className="text-3xl font-bold">{location.responseTime}</p>
                </div>
              </div>
              <p className="text-slate-300 mt-4 text-sm">
                *These are estimates based on typical {location.name} jobs - your actual cost depends on your specific situation. 
                The good news? Most insurance covers this, and we handle your claim directly. You typically pay just your deductible.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors animate-pulse hover:animate-none"
              >
                📞 Call Now: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-white/30"
              >
                Get Your Free Estimate
              </Link>
            </div>
            
            <p className="text-emerald-400 text-sm mt-4">
              ✓ Free estimates &nbsp; ✓ We bill your insurance directly &nbsp; ✓ No upfront payment required
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-amber-800">
            <span className="font-bold">⚠️ Acting fast saves money.</span>
            <span>Every hour you wait can increase damage by 10-30%.</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-emerald-700 hover:underline">
              Call now →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Here&apos;s What You Can Expect to Pay in {location.name}
            </h2>
            
            <p className="text-lg text-slate-600 mb-4">
              We believe in transparent pricing. No one should have to stress about hidden costs when 
              they&apos;re already dealing with property damage. Here&apos;s an honest breakdown of what 
              {costData.serviceName.toLowerCase()} typically costs in {location.name}:
            </p>

            <div className="space-y-4 mb-8">
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

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">
                Good News: Your Insurance Probably Covers This
              </h3>
              <p className="text-emerald-700 mb-4">
                Most {location.name} homeowners are surprised to learn their insurance covers {costData.serviceName.toLowerCase()}. 
                We work directly with all major insurance companies and handle the paperwork for you. That means:
              </p>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>No upfront payment</strong> - we bill your insurance directly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>We document everything</strong> - photos, moisture readings, detailed reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>We fight for your claim</strong> - our documentation helps maximize your coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>You pay only your deductible</strong> - and sometimes not even that</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              &quot;How Much Will MY Situation Cost?&quot;
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              The only way to know for sure is a free inspection. We&apos;ll come out, assess the damage, 
              and give you an exact price - in writing - before any work begins. No obligation. No pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                📞 {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Schedule Free Inspection
              </Link>
            </div>
            <p className="text-slate-400 text-sm">
              We can usually get to {location.name} within {location.responseTime}. Emergency? We&apos;re available 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Why {location.name} Homeowners Trust Us
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              When your home is damaged, you need someone who shows up fast, does the job right, 
              and doesn&apos;t leave you with a bigger headache. That&apos;s exactly what we do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">🏃 We Show Up Fast</h3>
                <p className="text-slate-600 mb-3">
                  {location.responseTime} to {location.name}. That&apos;s not a marketing gimmick - 
                  it&apos;s a promise. We know every hour of delay makes damage worse (and more expensive).
                </p>
                <p className="text-slate-600">
                  Our crews are stationed throughout {location.county} County, and we&apos;re on call 24/7. 
                  When you call at 2 AM on a Sunday, someone answers and help is on the way.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">💰 We&apos;re Upfront About Cost</h3>
                <p className="text-slate-600 mb-3">
                  You&apos;ll get a detailed written estimate before we start any work. 
                  The price we quote is the price you pay - no surprise fees, no &quot;we found more damage&quot; games.
                </p>
                <p className="text-slate-600">
                  If something changes during the job, we stop and discuss it with you first. 
                  Your approval, in writing, before any additional work.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">📋 We Handle Your Insurance</h3>
                <p className="text-slate-600 mb-3">
                  Dealing with insurance claims is frustrating. We take it off your plate completely. 
                  We document everything, submit the claim, and communicate directly with your adjuster.
                </p>
                <p className="text-slate-600">
                  We&apos;ve worked with every major insurance company and know exactly what documentation 
                  they need. That means faster approvals and fewer denied claims.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">✅ We Do It Right</h3>
                <p className="text-slate-600 mb-3">
                  Our technicians are IICRC certified - that&apos;s the highest standard in the restoration industry. 
                  We use professional-grade equipment and follow proven protocols.
                </p>
                <p className="text-slate-600">
                  The job isn&apos;t done until it&apos;s done right. We guarantee our work and stand behind it. 
                  If there&apos;s ever an issue, we come back and fix it - no questions asked.
                </p>
              </div>
            </div>

            {location.testimonial && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(location.testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-lg text-emerald-800 italic mb-3">
                  &quot;{location.testimonial.text}&quot;
                </blockquote>
                <p className="text-emerald-700 font-semibold">
                  — {location.testimonial.name}, {location.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Common {costData.serviceName} Jobs in {location.name}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We&apos;ve seen it all. Whatever caused your damage, we know how to fix it properly 
              and get your home back to normal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {costData.commonProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Specific Challenges in {location.name}
              </h3>
              <p className="text-slate-600 mb-4">{location.uniqueFact}</p>
              <p className="text-slate-600 mb-4">
                Based on our {location.casesCompleted}+ jobs in {location.name}, here are the 
                issues we see most often:
              </p>
              <ul className="space-y-2">
                {location.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Get This Fixed?
                </h2>
                <p className="text-emerald-100 mb-4">
                  Stop stressing. Stop Googling. Just call us, and we&apos;ll take it from here.
                </p>
                <ul className="space-y-2 text-emerald-100 mb-6">
                  <li>✓ Free estimate - know your costs upfront</li>
                  <li>✓ {location.responseTime} response to {location.name}</li>
                  <li>✓ We handle your insurance claim</li>
                  <li>✓ Work guaranteed - we stand behind it</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                  >
                    📞 {BUSINESS_INFO.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{location.name} Service Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-emerald-200">Response Time</span>
                    <span className="font-bold text-white">{location.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-emerald-200">Jobs Completed</span>
                    <span className="font-bold text-white">{location.casesCompleted}+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-emerald-200">Availability</span>
                    <span className="font-bold text-white">24/7 Emergency</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Service Area</span>
                    <span className="font-bold text-white">{location.county} County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Affects Your Final Price
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Every situation is different. Here&apos;s what we look at when we give you an estimate:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {costData.factors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <span className="text-emerald-500 font-bold text-lg">•</span>
                  <span className="text-slate-700">{factor}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                💡 The #1 Way to Keep Costs Down
              </h3>
              <p className="text-amber-700">
                <strong>Call us immediately.</strong> Seriously - the single biggest factor in restoration cost 
                is how long damage sits before treatment starts. Water that sits for 48 hours does 3-4x more damage 
                than water extracted within the first few hours. Mold starts growing in 24-48 hours. 
                The faster we start, the less you pay. It&apos;s that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={localizedFaqs} title={`Your ${costData.serviceName} Questions Answered`} />

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {costData.serviceName} in Other {location.county} County Areas
            </h2>
            
            {nearbyLocations.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/cost-of/${params.service}/${nearby.slug}`}
                    className="bg-white hover:bg-emerald-50 rounded-lg p-4 text-center transition-colors border hover:border-emerald-300 shadow-sm"
                  >
                    <div className="font-semibold text-slate-800">{nearby.name}</div>
                    <div className="text-sm text-slate-500">{nearby.responseTime} response</div>
                  </Link>
                ))}
              </div>
            )}

            {otherCountyLocations.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {otherCountyLocations.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/cost-of/${params.service}/${other.slug}`}
                    className="bg-white hover:bg-emerald-50 rounded-lg p-3 text-center transition-colors border hover:border-emerald-300"
                  >
                    <div className="font-semibold text-slate-800 text-sm">{other.name}</div>
                    <div className="text-xs text-slate-500">{other.county} County</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Related Services You Might Need
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {costData.similarServices.slice(0, 4).map((similar, index) => (
                <Link
                  key={index}
                  href={`/services/${similar.slug}/${params.location}`}
                  className="bg-slate-50 rounded-lg p-5 hover:bg-emerald-50 transition-colors border hover:border-emerald-300"
                >
                  <h3 className="font-bold text-slate-800 mb-2">{similar.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">{similar.description}</p>
                  <span className="text-emerald-600 text-sm font-semibold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions? Just Ask.
            </h2>
            <p className="text-slate-300 mb-6">
              Call us anytime. We&apos;re happy to answer questions, give advice, or just talk through your situation - 
              no pressure, no obligation.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              📞 Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-100 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-slate-600">
            <p>
              <Link href={`/cost-of/${params.service}`} className="text-emerald-600 hover:underline">
                All {costData.serviceName} Pricing
              </Link>
              {" • "}
              <Link href={`/services/${params.service}/${params.location}`} className="text-emerald-600 hover:underline">
                {costData.serviceName} in {location.name}
              </Link>
              {" • "}
              <Link href={`/locations/${params.location}`} className="text-emerald-600 hover:underline">
                All {location.name} Services
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
