import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";
import { buildSEOTitle } from "../lib/utils";
import { EmergencyCTA } from "../components/CTAComponents";

export const metadata: Metadata = {
  title: buildSEOTitle([
    "Commercial Restoration Services Greater Lansing",
    "Water, Fire, Mold & Storm Damage for Businesses",
    "Minimize Downtime with 24/7 Emergency Response",
    "Direct Insurance Billing & Free Estimates",
    "M&M Restoration",
  ]),
  description: "Commercial restoration services in Greater Lansing, MI. Water damage, fire cleanup, mold remediation, and storm repair for businesses. 24/7 emergency response, direct insurance billing, IICRC certified. Call (616) 648-7775.",
  alternates: {
    canonical: "/commercial",
  },
  openGraph: {
    title: "Commercial Restoration Services | M&M Restoration",
    description: "Professional commercial restoration for businesses in Greater Lansing. Water, fire, mold, and storm damage. 24/7 emergency response, minimize business downtime.",
  },
};

const INDUSTRIES = [
  {
    slug: "restaurants",
    name: "Restaurant & Food Service",
    icon: "🍽️",
    shortDescription: "Health code compliance, kitchen fires, plumbing failures, and grease trap overflows handled with minimal business disruption.",
  },
  {
    slug: "property-management",
    name: "Property Management",
    icon: "🏢",
    shortDescription: "Multi-unit water damage, tenant displacement coordination, and liability mitigation for residential and commercial properties.",
  },
  {
    slug: "schools-education",
    name: "Schools & Educational Facilities",
    icon: "🏫",
    shortDescription: "Student safety-first restoration with EPA-compliant protocols, air quality testing, and minimal academic calendar disruption.",
  },
  {
    slug: "churches-nonprofits",
    name: "Churches & Nonprofits",
    icon: "⛪",
    shortDescription: "Sensitive restoration of historic buildings, irreplaceable artifacts, and community gathering spaces with budget-conscious approaches.",
  },
];

const COMMERCIAL_SERVICES = [
  { name: "Commercial Water Damage Restoration", description: "Large-scale water extraction, structural drying, and moisture remediation for commercial properties including multi-story buildings and warehouses." },
  { name: "Commercial Fire & Smoke Cleanup", description: "Comprehensive fire damage restoration for businesses including smoke deodorization, soot removal, content cleaning, and structural reconstruction." },
  { name: "Commercial Mold Remediation", description: "EPA-compliant mold remediation for commercial buildings with air quality testing, containment protocols, and clearance certification." },
  { name: "Storm Damage for Commercial Properties", description: "Emergency tarping, board-up, water intrusion mitigation, and full structural repair for storm-damaged commercial properties." },
  { name: "Document & Equipment Restoration", description: "Specialized recovery of business documents, electronics, inventory, and critical equipment damaged by water, fire, or mold." },
  { name: "Large Loss & Catastrophic Events", description: "Project management for large-scale commercial losses with multi-crew coordination, phased restoration, and business continuity planning." },
  { name: "Emergency Preparedness Planning", description: "Pre-loss planning services including emergency response plans, priority contact lists, and property assessments to minimize future damage." },
  { name: "Commercial Cleaning Services", description: "Post-construction cleaning, deep cleaning, carpet and upholstery cleaning for commercial spaces and office buildings." },
];

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">Home</Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-300">Commercial Services</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial <span className="text-emerald-300">Restoration Services</span> in Greater Lansing
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Minimize business downtime with IICRC certified commercial restoration. 24/7 emergency response, direct insurance billing, and a team that understands the urgency of getting your business back online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Emergency: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Get Commercial Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Differs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-6">
              Why Commercial Restoration Is Different
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Commercial properties present unique challenges that require specialized expertise, larger-scale equipment, and a deep understanding of business operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📐</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Scale & Complexity</h3>
                <p className="text-slate-600">
                  Commercial properties are larger, have complex HVAC systems, and often contain specialized equipment. Our team has the industrial-grade extractors, dehumidifiers, and air movers needed to handle spaces from 1,000 to 100,000+ square feet efficiently.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Business Continuity</h3>
                <p className="text-slate-600">
                  Every day your business is closed costs revenue, customer trust, and employee wages. We create phased restoration plans that allow partial operations when possible, work off-hours to minimize disruption, and prioritize getting revenue-generating areas operational first.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Regulatory Compliance</h3>
                <p className="text-slate-600">
                  Commercial properties must meet building codes, health department requirements, OSHA standards, ADA compliance, and industry-specific regulations. We understand these requirements and ensure all restoration work meets or exceeds applicable standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We bring industry-specific knowledge to every commercial restoration project, understanding the unique challenges and compliance requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/commercial/${industry.slug}`}
                className="group bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-3">
                  {industry.name}
                </h3>
                <p className="text-slate-600 mb-4">{industry.shortDescription}</p>
                <div className="text-emerald-600 font-semibold flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Commercial Restoration Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From emergency water extraction to complete structural rebuilds, we handle every aspect of commercial property restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {COMMERCIAL_SERVICES.map((service, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">{service.name}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Restoration Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60</div>
              <div className="text-emerald-100">Minute Response Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BUSINESS_INFO.employeeCount}+</div>
              <div className="text-emerald-100">Certified Technicians</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">Emergency Availability</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BUSINESS_INFO.projectsCompleted.toLocaleString()}+</div>
              <div className="text-emerald-100">Total Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-6">
              Commercial Insurance Claims Made Simple
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Commercial insurance claims are more complex than residential. Our team has extensive experience navigating commercial policies, business interruption claims, and multi-party coverage situations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Immediate Documentation</h3>
                    <p className="text-slate-600 text-sm">We document all damage with photos, moisture readings, thermal imaging, and detailed reports from the moment we arrive on-site.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Xactimate Estimates</h3>
                    <p className="text-slate-600 text-sm">Our estimates are prepared in Xactimate, the industry-standard software used by insurance adjusters, ensuring faster approval and fewer disputes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Adjuster Coordination</h3>
                    <p className="text-slate-600 text-sm">We communicate directly with your commercial insurance adjuster, attend inspections, and provide supplemental documentation when needed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Business Interruption Support</h3>
                    <p className="text-slate-600 text-sm">We provide documentation to support business interruption claims including timelines, progress reports, and certification of completion.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Commercial Insurance Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span>Review your commercial policy annually for adequate coverage limits</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span>Ensure business interruption coverage matches your actual revenue</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span>Document your property condition and inventory annually</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span>Add sewer/drain backup endorsement if not already included</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span>Keep our number on file for immediate emergency response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA
            title="Commercial Emergency? We Respond in 60 Minutes."
            subtitle="Every hour of downtime costs your business money. Our commercial restoration team is standing by 24/7 to minimize damage and get you back in business."
          />
        </div>
      </section>
    </div>
  );
}
