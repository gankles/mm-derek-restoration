import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO } from "../../lib/constants";
import { buildSEOTitle } from "../../lib/utils";
import { EmergencyCTA } from "../../components/CTAComponents";

interface IndustryData {
  slug: string;
  name: string;
  icon: string;
  heroSubtitle: string;
  description: string;
  challenges: { title: string; description: string }[];
  commonDamage: { type: string; description: string; frequency: string }[];
  complianceNotes: string[];
  urgencyFactor: string;
  ourApproach: { step: string; detail: string }[];
  whyChooseUs: string[];
}

const INDUSTRIES: IndustryData[] = [
  {
    slug: "restaurants",
    name: "Restaurant & Food Service",
    icon: "🍽️",
    heroSubtitle: "Get Your Kitchen Back Open Fast with IICRC Certified Restoration",
    description: "Restaurants and food service businesses face unique restoration challenges. From health department compliance to perishable inventory loss, every hour of downtime directly impacts your bottom line. M&M Restoration understands the urgency of getting your doors open again and has restored dozens of food service properties throughout the Greater Lansing area.",
    challenges: [
      {
        title: "Health Department Clearance",
        description: "Food service establishments must pass health department inspection before reopening. Our restoration process is designed to meet and exceed Michigan Department of Agriculture and Rural Development standards, ensuring your facility passes inspection on the first visit."
      },
      {
        title: "Grease and Contamination Risks",
        description: "Commercial kitchens present unique contamination hazards during water damage events. Grease trap overflows, commercial refrigeration failures, and hood system water intrusion require specialized cleanup protocols beyond standard water extraction."
      },
      {
        title: "Revenue Loss Per Day",
        description: "The average restaurant loses $3,000 to $10,000 per day when closed. We create accelerated restoration timelines with extended work hours and multi-crew deployment to get your establishment operational as quickly as possible."
      },
      {
        title: "Food Safety & Inventory",
        description: "Contaminated food inventory must be properly documented and disposed of for insurance claims. We photograph and catalog all affected inventory, coordinate with your insurance adjuster, and ensure proper disposal in compliance with health regulations."
      }
    ],
    commonDamage: [
      { type: "Kitchen Fires", description: "Grease fires, hood system failures, and cooking equipment malfunctions requiring specialized fire damage restoration and deodorization.", frequency: "Most common" },
      { type: "Plumbing Failures", description: "Burst pipes, grease trap backups, and dishwasher line failures causing water damage to kitchen floors, walls, and dining areas.", frequency: "Very common" },
      { type: "Refrigeration Failures", description: "Walk-in cooler and freezer failures leading to water damage, mold growth, and biohazard conditions from spoiled food.", frequency: "Common" },
      { type: "Storm Damage", description: "Roof leaks, flooding, and wind damage affecting both front-of-house and back-of-house operations.", frequency: "Seasonal" },
      { type: "Sewage Backups", description: "Commercial sewer line backups and drain overflows requiring Category 3 water extraction and decontamination.", frequency: "Occasional" }
    ],
    complianceNotes: [
      "Michigan Food Law compliance (Act 92 of 2000) requiring approved surfaces and materials",
      "Health department clearance inspection before reopening",
      "Food safety regulations for contaminated inventory disposal and documentation",
      "OSHA requirements for worker safety during restoration in commercial kitchen environments",
      "EPA guidelines for antimicrobial treatments in food preparation areas"
    ],
    urgencyFactor: "Every day a restaurant is closed costs $3,000-$10,000+ in lost revenue, plus the risk of losing regular customers to competitors permanently.",
    ourApproach: [
      { step: "Emergency Response & Assessment", detail: "We arrive within 60 minutes, assess the full scope of damage, and create a prioritized restoration plan focused on getting your kitchen and dining areas operational as quickly as possible." },
      { step: "Health-Compliant Mitigation", detail: "All extraction, drying, and cleaning follows food safety protocols. We use food-safe antimicrobial treatments and ensure all restored surfaces meet health code requirements." },
      { step: "Accelerated Restoration", detail: "We deploy multiple crews, work extended hours, and use commercial-grade equipment to compress timelines. Phased restoration allows partial reopening when possible." },
      { step: "Clearance & Documentation", detail: "We coordinate with health inspectors, provide all required documentation, and ensure your facility passes inspection before reopening." }
    ],
    whyChooseUs: [
      "Experience restoring dozens of food service properties in the Greater Lansing area",
      "Understanding of Michigan health department requirements and food safety regulations",
      "Accelerated restoration timelines with multi-crew deployment to minimize closure days",
      "Direct insurance billing with Xactimate estimates for commercial food service claims",
      "24/7 emergency response, because kitchen emergencies do not wait for business hours",
      "Food-safe antimicrobial treatments and materials that meet health code standards"
    ]
  },
  {
    slug: "property-management",
    name: "Property Management",
    icon: "🏢",
    heroSubtitle: "Protect Your Properties and Tenants with Rapid Professional Restoration",
    description: "Property managers face a unique set of challenges when damage strikes. You are responsible for tenant safety, property preservation, and liability mitigation across multiple units and buildings. M&M Restoration serves as a trusted restoration partner for property management companies throughout the Greater Lansing area, providing fast response, clear communication, and thorough documentation that protects your interests.",
    challenges: [
      {
        title: "Multi-Unit Water Damage",
        description: "Water damage in multi-unit properties cascades quickly, often affecting units above and below the source. A single burst pipe on the third floor can damage multiple apartments, requiring simultaneous extraction and drying across several units while coordinating tenant access and displacement."
      },
      {
        title: "Tenant Communication & Displacement",
        description: "Displaced tenants need immediate housing options, clear timelines for return, and regular progress updates. We provide detailed restoration timelines and progress reports you can share with affected tenants, and we coordinate access schedules to minimize disruption to unaffected residents."
      },
      {
        title: "Liability & Habitability Requirements",
        description: "Michigan law requires landlords to maintain habitable conditions. Unaddressed water damage, mold, or structural issues create significant legal liability. Our thorough documentation and rapid response help demonstrate your compliance with tenant habitability requirements."
      },
      {
        title: "Budget & Multiple Properties",
        description: "Managing restoration costs across multiple properties requires transparent pricing and efficient project management. We provide detailed estimates before work begins, communicate any scope changes immediately, and offer preferred pricing programs for property management partners."
      }
    ],
    commonDamage: [
      { type: "Burst Pipes & Plumbing Failures", description: "The most common cause of property damage in managed buildings, often affecting multiple units simultaneously.", frequency: "Most common" },
      { type: "Tenant-Caused Water Damage", description: "Overflowing bathtubs, washing machine failures, and toilet overflows in individual units cascading to other floors.", frequency: "Very common" },
      { type: "Mold in Vacant or Under-Ventilated Units", description: "Mold growth in unoccupied units, basements, or areas with poor HVAC circulation requiring remediation before re-leasing.", frequency: "Common" },
      { type: "Storm & Roof Damage", description: "Roof leaks, wind damage, and flooding affecting multiple units in the building simultaneously.", frequency: "Seasonal" },
      { type: "Fire Damage", description: "Kitchen fires, electrical fires, and heating equipment failures requiring unit restoration and smoke deodorization of adjacent units.", frequency: "Occasional" }
    ],
    complianceNotes: [
      "Michigan Truth in Renting Act requirements for habitable conditions",
      "Tenant notification and displacement protocols under Michigan landlord-tenant law",
      "Lead paint and asbestos testing requirements for pre-1978 buildings during renovation",
      "Building code compliance for all structural repairs and reconstruction",
      "Fair housing requirements for temporary housing assistance during displacement"
    ],
    urgencyFactor: "Tenant displacement creates immediate liability exposure, potential rent loss, and legal obligation to provide habitable alternatives. Delayed restoration compounds damage and increases costs across multiple units.",
    ourApproach: [
      { step: "Priority Response & Multi-Unit Assessment", detail: "We assess all affected units simultaneously, map the full extent of damage, and create a coordinated restoration plan that addresses the worst-affected areas first." },
      { step: "Tenant Coordination", detail: "We work with your management team to schedule access, provide restoration timelines for each unit, and minimize disruption to unaffected tenants in the building." },
      { step: "Efficient Multi-Unit Restoration", detail: "Our team stages equipment strategically across affected units, running extraction and drying operations simultaneously to compress the overall timeline." },
      { step: "Documentation & Reporting", detail: "We provide detailed progress reports, before-and-after documentation for each unit, and completion certificates you can share with tenants and insurance carriers." }
    ],
    whyChooseUs: [
      "Preferred restoration partner for property management companies across Greater Lansing",
      "Experience with multi-unit buildings, apartment complexes, and commercial rental properties",
      "Detailed per-unit documentation and reporting for insurance and tenant records",
      "Understanding of Michigan landlord-tenant obligations during restoration events",
      "24/7 emergency response with priority scheduling for property management partners",
      "Transparent pricing with detailed estimates before work begins on each unit"
    ]
  },
  {
    slug: "schools-education",
    name: "Schools & Educational Facilities",
    icon: "🏫",
    heroSubtitle: "Student Safety First: EPA-Compliant Restoration for Educational Environments",
    description: "When damage strikes a school or educational facility, student and staff safety is the absolute priority. M&M Restoration has experience restoring schools, universities, and childcare facilities with strict adherence to EPA guidelines, indoor air quality standards, and the unique scheduling demands of academic environments. We work around school calendars and occupancy schedules to minimize educational disruption.",
    challenges: [
      {
        title: "Student & Staff Safety",
        description: "Children and young adults are more vulnerable to environmental hazards like mold, chemical residues, and poor air quality. Our restoration protocols for educational facilities exceed standard requirements, with additional air quality testing and clearance verification before students return to restored areas."
      },
      {
        title: "Academic Calendar Constraints",
        description: "School restoration must often be completed during breaks, weekends, or summer sessions to minimize disruption to learning. We create accelerated restoration plans that align with your academic calendar and can deploy additional crews to meet tight deadlines."
      },
      {
        title: "Large Facility Footprints",
        description: "Schools have expansive footprints with gymnasiums, cafeterias, libraries, and classroom wings that may all be affected differently. We use zoned containment and phased restoration to allow continued use of unaffected areas while damaged sections are being restored."
      },
      {
        title: "Specialized Spaces & Equipment",
        description: "Science labs, computer labs, libraries, and athletic facilities contain specialized equipment and materials that require careful handling during restoration. We inventory and protect high-value items and coordinate with school staff to ensure nothing is overlooked."
      }
    ],
    commonDamage: [
      { type: "Roof Leaks & Flat Roof Failures", description: "Schools commonly have flat or low-slope roofs that are prone to ponding, membrane failures, and storm damage causing interior water intrusion.", frequency: "Most common" },
      { type: "HVAC System Water Damage", description: "Large commercial HVAC systems with condensation lines, cooling towers, and chilled water systems that fail and cause water damage to ceilings and walls.", frequency: "Very common" },
      { type: "Mold in Portable Classrooms", description: "Portable and modular classroom buildings are particularly susceptible to moisture intrusion and mold growth due to construction methods and age.", frequency: "Common" },
      { type: "Cafeteria & Kitchen Damage", description: "Plumbing failures, grease trap issues, and fire events in school cafeteria kitchens requiring food-safe restoration.", frequency: "Common" },
      { type: "Vandalism & Fire", description: "Intentional damage including arson, vandalism causing water system damage, and other security-related incidents requiring emergency restoration.", frequency: "Occasional" }
    ],
    complianceNotes: [
      "EPA Tools for Schools program guidelines for indoor air quality management",
      "ASHRAE Standard 62.1 ventilation requirements for educational facilities",
      "Michigan Department of Education facility standards and safety requirements",
      "ADA accessibility compliance during and after restoration work",
      "Asbestos and lead paint regulations for older school buildings (AHERA compliance)"
    ],
    urgencyFactor: "Every day a school section is closed disrupts education for hundreds of students, creates childcare challenges for families, and may affect the academic calendar for the entire year.",
    ourApproach: [
      { step: "Safety-First Assessment", detail: "Our initial assessment prioritizes identifying any hazards to students and staff. We establish containment and safety zones immediately to protect occupied areas of the building." },
      { step: "EPA-Compliant Protocols", detail: "All restoration work follows EPA guidelines for educational environments, including enhanced air quality monitoring, HEPA filtration, and clearance testing before reoccupation." },
      { step: "Calendar-Aligned Scheduling", detail: "We work with administrators to align restoration timelines with the academic calendar, deploying additional resources during breaks and weekends to compress timelines." },
      { step: "Air Quality Verification", detail: "Before students return to any restored area, we conduct independent air quality testing to verify particle counts, mold spore levels, and VOC concentrations meet or exceed standards for educational environments." }
    ],
    whyChooseUs: [
      "Experience restoring schools and educational facilities with student safety as the top priority",
      "EPA Tools for Schools and ASHRAE air quality standard compliance",
      "Flexible scheduling that works around academic calendars and school events",
      "Enhanced air quality testing and clearance verification for educational environments",
      "Understanding of public entity insurance and multi-party claims processes",
      "Background-checked technicians for working in environments with minors"
    ]
  },
  {
    slug: "churches-nonprofits",
    name: "Churches & Nonprofits",
    icon: "⛪",
    heroSubtitle: "Compassionate Restoration for Sacred Spaces and Community Organizations",
    description: "Churches, nonprofit organizations, and community centers are more than buildings. They are gathering places, sanctuaries, and pillars of the community. M&M Restoration brings a compassionate, preservation-focused approach to restoring these special spaces. We understand the emotional significance, the irreplaceable nature of many items, and the budget realities that nonprofits face.",
    challenges: [
      {
        title: "Historic & Irreplaceable Elements",
        description: "Many churches and community buildings contain stained glass, original woodwork, historic fixtures, and religious artifacts that cannot be replaced. Our restoration approach prioritizes preservation of original materials using careful, specialized techniques that maintain historical integrity."
      },
      {
        title: "Limited Budgets & Insurance",
        description: "Nonprofits often operate on tight budgets, and their insurance coverage may not be as comprehensive as commercial policies. We provide transparent pricing, help maximize insurance claims, and work with organizations to find solutions that fit their financial situation."
      },
      {
        title: "Community Impact",
        description: "When a church or community center is damaged, it affects the entire congregation and community it serves. Services, programs, food banks, support groups, and community events are all disrupted. We prioritize getting gathering spaces and program areas functional as quickly as possible."
      },
      {
        title: "Large Open Spaces & Unique Architecture",
        description: "Sanctuaries, fellowship halls, and auditoriums have high ceilings, unique acoustics, and architectural features that require specialized restoration approaches. Scaffolding, specialized drying equipment for high-volume spaces, and careful treatment of finishes are all part of our approach."
      }
    ],
    commonDamage: [
      { type: "Roof Leaks & Aging Infrastructure", description: "Many churches have aging roofs, steeples, and bell towers that are vulnerable to leaks and storm damage, causing interior water damage to sanctuaries and fellowship halls.", frequency: "Most common" },
      { type: "Burst Pipes in Older Buildings", description: "Aging plumbing systems in older church buildings are prone to freezing, corrosion failures, and joint separations causing flooding.", frequency: "Very common" },
      { type: "Basement & Foundation Moisture", description: "Many older churches have stone or block foundations that allow moisture intrusion, leading to persistent dampness and mold growth in lower levels.", frequency: "Common" },
      { type: "Fire & Electrical Damage", description: "Aging electrical systems, candle use, and kitchen cooking in older buildings create fire risks that can damage irreplaceable interiors.", frequency: "Occasional" },
      { type: "Storm & Wind Damage", description: "Steeples, large roof spans, and stained glass windows are particularly vulnerable to high winds, hail, and fallen trees.", frequency: "Seasonal" }
    ],
    complianceNotes: [
      "Secretary of the Interior Standards for historic preservation when applicable",
      "State Historic Preservation Office requirements for listed or eligible properties",
      "Building code compliance balanced with historic preservation considerations",
      "ADA requirements for restored areas in public gathering spaces",
      "Environmental regulations for lead paint and asbestos in pre-1980 structures"
    ],
    urgencyFactor: "Disruption to worship services, community programs, and support services affects hundreds of families. Irreplaceable items like stained glass, historic woodwork, and religious artifacts suffer progressive damage if not addressed quickly.",
    ourApproach: [
      { step: "Respectful Assessment & Preservation Planning", detail: "We approach every church and nonprofit property with respect for its significance. Our assessment identifies irreplaceable elements that need specialized preservation and creates a restoration plan that prioritizes their protection." },
      { step: "Artifact & Content Protection", detail: "Religious artifacts, documents, musical instruments, and community records are carefully inventoried, packed out, and protected or restored using specialized techniques appropriate for their materials and significance." },
      { step: "Budget-Conscious Restoration", detail: "We work with nonprofit budgets by providing transparent pricing, phased restoration options when helpful, and thorough insurance documentation to maximize coverage. We never recommend unnecessary work." },
      { step: "Community Space Prioritization", detail: "We prioritize restoring gathering spaces, kitchens, and program areas that serve the community first, allowing services and programs to resume while remaining restoration continues." }
    ],
    whyChooseUs: [
      "Compassionate approach that respects the significance of sacred and community spaces",
      "Experience preserving historic building elements including woodwork, plaster, and stained glass",
      "Budget-conscious restoration with transparent pricing and phased options for nonprofits",
      "Specialized content restoration for religious artifacts, documents, and irreplaceable items",
      "Priority scheduling to restore gathering and program spaces for community use",
      "Direct insurance billing with thorough documentation to maximize nonprofit coverage"
    ]
  }
];

interface IndustryPageProps {
  params: {
    industry: string;
  };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = INDUSTRIES.find(i => i.slug === params.industry);

  if (!industry) {
    return {};
  }

  return {
    title: buildSEOTitle([
      `${industry.name} Restoration Services Greater Lansing`,
      `24/7 Emergency Response for ${industry.name.split(" &")[0]} Properties`,
      `IICRC Certified with Direct Insurance Billing`,
      `M&M Restoration`,
    ]),
    description: `Professional restoration services for ${industry.name.toLowerCase()} in Greater Lansing, MI. Water damage, fire, mold, and storm repair with industry-specific expertise. 24/7 emergency response. Call (616) 648-7775.`,
    alternates: {
      canonical: `/commercial/${params.industry}`,
    },
    openGraph: {
      title: `${industry.name} Restoration | M&M Restoration`,
      description: `Specialized restoration for ${industry.name.toLowerCase()} in Greater Lansing. Industry-specific expertise, 24/7 emergency response, direct insurance billing.`,
    },
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRIES.find(i => i.slug === params.industry);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">Home</Link>
              <span className="text-slate-400">/</span>
              <Link href="/commercial" className="text-emerald-400 hover:text-emerald-300 transition-colors">Commercial</Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-300">{industry.name}</span>
            </nav>

            <div className="text-5xl mb-6">{industry.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-emerald-300">{industry.name}</span> Restoration Services
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              {industry.heroSubtitle}
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
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              {industry.description}
            </p>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-2xl flex-shrink-0">&#9888;&#65039;</span>
                <div>
                  <h3 className="font-bold text-amber-800 mb-1">Why Urgency Matters</h3>
                  <p className="text-amber-700">{industry.urgencyFactor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Challenges */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Unique Challenges for {industry.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Damage Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Common Damage Types for {industry.name}
            </h2>

            <div className="space-y-6">
              {industry.commonDamage.map((damage, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-lg p-6">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-800">{damage.type}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        damage.frequency === "Most common" ? "bg-red-100 text-red-700" :
                        damage.frequency === "Very common" ? "bg-orange-100 text-orange-700" :
                        damage.frequency === "Common" ? "bg-yellow-100 text-yellow-700" :
                        damage.frequency === "Seasonal" ? "bg-blue-100 text-blue-700" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {damage.frequency}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{damage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Our Approach for {industry.name}
            </h2>

            <div className="space-y-8">
              {industry.ourApproach.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.step}</h3>
                    <p className="text-slate-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
              Regulatory Compliance &amp; Standards
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              Our {industry.name.toLowerCase()} restoration work meets all applicable regulatory requirements, including:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <ul className="space-y-4">
                {industry.complianceNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1 flex-shrink-0">&#10003;</span>
                    <span className="text-blue-800">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Why Choose M&amp;M Restoration for {industry.name}?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-6 shadow-md">
                  <span className="text-emerald-600 text-xl flex-shrink-0">&#10004;</span>
                  <span className="text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA
            title={`Need ${industry.name} Restoration?`}
            subtitle={`Our team has the industry-specific expertise to handle ${industry.name.toLowerCase()} restoration quickly and properly. Call now for 24/7 emergency response.`}
          />

          <div className="text-center mt-8">
            <Link
              href="/commercial"
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
            >
              &larr; Back to All Commercial Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
