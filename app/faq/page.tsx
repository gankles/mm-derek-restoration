'use client';

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_INFO, SERVICES } from "../lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  icon: string;
  faqs: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    name: "Water Damage",
    icon: "💧",
    faqs: [
      {
        question: "How quickly should I address water damage in my home?",
        answer: "You should address water damage within the first 24 to 48 hours to prevent mold growth and structural deterioration. Standing water begins causing secondary damage almost immediately, with mold potentially forming in as little as 24 hours in warm, humid conditions. The sooner extraction and drying begin, the less damage your property will sustain and the lower your overall restoration costs will be."
      },
      {
        question: "What are the three categories of water damage?",
        answer: "Water damage is classified into three categories based on contamination level. Category 1 (clean water) comes from sources like broken supply lines or faucets and poses no immediate health risk. Category 2 (gray water) contains chemical or biological contaminants from sources like dishwasher or washing machine overflows and can cause illness if ingested. Category 3 (black water) is highly contaminated from sewage backups, flooding, or toilet overflows and requires specialized biohazard cleanup protocols."
      },
      {
        question: "Will my homeowners insurance cover water damage restoration?",
        answer: "Most homeowners insurance policies cover sudden and accidental water damage, such as burst pipes or appliance failures. However, damage from gradual leaks, deferred maintenance, or flooding typically requires separate coverage. We work directly with all major insurance carriers and can help you understand your policy, document damage, and maximize your claim. Many of our customers end up paying only their deductible."
      },
      {
        question: "Can I dry out water damage myself instead of hiring professionals?",
        answer: "While you can mop up small spills, professional water damage restoration requires industrial-grade equipment including truck-mounted extractors, commercial dehumidifiers, and moisture detection tools that are not available at consumer retail stores. Without proper extraction and drying, moisture trapped behind walls, under floors, and in subfloors leads to mold growth, warping, and structural decay. Professional restoration also includes antimicrobial treatment and verification testing to confirm the structure is fully dry."
      },
      {
        question: "How long does the water damage restoration process take?",
        answer: "The typical water damage restoration timeline is 3 to 5 days for most residential projects, though this varies based on the extent of damage, water category, and affected materials. Emergency water extraction usually takes a few hours, followed by 3 to 4 days of structural drying with industrial dehumidifiers and air movers. Larger projects involving reconstruction of drywall, flooring, or cabinetry may take 1 to 2 weeks. We provide a detailed timeline during your free assessment."
      },
      {
        question: "What should I do while waiting for the restoration team to arrive?",
        answer: "If it is safe to do so, turn off the water source causing the damage and shut off electricity to affected areas. Move valuable items, electronics, and furniture away from standing water. Take photos and video of all damage for insurance documentation before any cleanup begins. Do not use a household vacuum to remove water, as this creates an electrocution hazard. Place aluminum foil under furniture legs to prevent staining on carpets and flooring."
      }
    ]
  },
  {
    name: "Mold Remediation",
    icon: "🦠",
    faqs: [
      {
        question: "How do I know if I have a mold problem in my house?",
        answer: "Common signs of mold include a persistent musty or earthy odor, visible discoloration on walls, ceilings, or floors, and unexplained respiratory symptoms among occupants. Mold often grows in hidden areas like behind drywall, under carpets, inside HVAC ducts, and in crawl spaces. If you have had any water damage event, even a small leak, there is a high probability that mold is developing in areas you cannot see. Professional mold testing with air quality sampling provides definitive answers."
      },
      {
        question: "Is black mold really more dangerous than other types?",
        answer: "While Stachybotrys chartarum (commonly called black mold) does produce mycotoxins that can cause serious health effects, all mold species can trigger allergic reactions, respiratory issues, and health problems in sensitive individuals. The color of mold does not reliably indicate its species or toxicity. Any mold growth in your home should be treated seriously and remediated by professionals who can properly contain, remove, and treat the affected area."
      },
      {
        question: "Can I remove mold myself with bleach?",
        answer: "Bleach is not recommended for mold remediation and can actually make the problem worse. Bleach only kills surface mold on non-porous materials and does not penetrate porous surfaces like drywall or wood where mold roots grow. The water content in bleach can add moisture to the area, encouraging further mold growth. Professional remediation involves containment with negative air pressure, HEPA filtration, removal of contaminated materials, and antimicrobial treatment to prevent recurrence."
      },
      {
        question: "How long does professional mold remediation take?",
        answer: "Most residential mold remediation projects take 3 to 7 days depending on the size of the affected area and the extent of contamination. This includes initial testing, containment setup, removal of contaminated materials, antimicrobial treatment, and post-remediation clearance testing to verify the mold has been fully eliminated. Larger projects involving multiple rooms or extensive structural contamination may take longer. We provide a detailed scope and timeline before work begins."
      },
      {
        question: "Will mold come back after remediation?",
        answer: "Properly performed mold remediation eliminates existing mold growth, but mold can return if the underlying moisture source is not addressed. Our process includes identifying and helping resolve the moisture source, whether it is a leak, condensation issue, or ventilation problem. We also apply antimicrobial treatments that inhibit future growth. We recommend maintaining indoor humidity below 50% and addressing any water intrusion promptly to prevent recurrence."
      }
    ]
  },
  {
    name: "Fire Damage",
    icon: "🔥",
    faqs: [
      {
        question: "What should I do immediately after a fire in my home?",
        answer: "After the fire department clears you to approach the property, do not enter until a professional assesses structural safety. Contact your insurance company to start the claims process, and take photos and video of all damage from outside the property. Do not attempt to clean soot or smoke damage yourself, as improper cleaning can permanently set stains into materials. Contact a restoration company immediately because soot and smoke residue cause progressive damage, and surfaces become harder to restore with each passing day."
      },
      {
        question: "How does smoke damage affect my home even in areas the fire did not reach?",
        answer: "Smoke travels through your entire HVAC system, ductwork, and even through small gaps in walls, affecting areas far from the fire itself. Smoke residue contains acidic compounds that corrode metals, discolor paints and fabrics, and etch glass and porcelain if not cleaned promptly. Soot particles are microscopic and settle into carpets, upholstery, clothing, and electronics throughout the home. Professional smoke damage cleanup uses specialized equipment like ozone generators, thermal foggers, and hydroxyl generators to neutralize odor molecules."
      },
      {
        question: "Does insurance cover fire damage restoration?",
        answer: "Fire damage is one of the most comprehensively covered perils in homeowners insurance policies. Your policy typically covers structural repairs, content restoration or replacement, smoke and soot cleanup, temporary living expenses while your home is being restored, and additional living expenses. We work directly with your insurance adjuster, handling all documentation and communication to ensure your claim covers the full scope of restoration needed."
      },
      {
        question: "Can personal belongings be saved after a fire?",
        answer: "Many personal belongings can be restored through professional content cleaning and restoration techniques. We use ultrasonic cleaning for hard goods, ozone treatment for smoke-odor removal from fabrics, and specialized techniques for electronics and documents. Items are inventoried, packed out, cleaned at our facility, and returned when your home restoration is complete. The success rate depends on the severity of damage and type of materials, which we assess during our initial inspection."
      },
      {
        question: "How long does fire damage restoration take?",
        answer: "Fire damage restoration typically takes 1 to 3 weeks for minor fires and up to several months for major structural damage. The timeline includes emergency board-up and securing, water removal from firefighting, soot and smoke cleanup, odor elimination, and structural repairs or reconstruction. We provide a detailed timeline and keep you informed throughout every phase. During restoration, we can help coordinate temporary housing through your insurance carrier."
      }
    ]
  },
  {
    name: "Insurance & Claims",
    icon: "🛡️",
    faqs: [
      {
        question: "Do you work with my insurance company directly?",
        answer: "Yes, we work directly with all major insurance carriers including State Farm, Allstate, Farm Bureau, Auto-Owners, and many others. Our team handles damage documentation, prepares detailed estimates in Xactimate (the industry-standard software used by insurance adjusters), communicates with your adjuster, and manages the entire claims process. This means less stress for you and typically faster claim resolution."
      },
      {
        question: "Will I have to pay out of pocket for restoration?",
        answer: "For covered claims, most homeowners only pay their deductible, which typically ranges from $500 to $1,500. We bill your insurance company directly for the balance. If you do not have insurance or your claim is denied, we offer flexible payment options and will provide a transparent, competitive estimate before any work begins. We never perform work without your authorization and clear understanding of costs."
      },
      {
        question: "What if my insurance claim is denied?",
        answer: "Claim denials are not always final. We can help you understand the denial reason, provide additional documentation to support your case, and advise on the appeals process. Common denial reasons include policy exclusions, missed filing deadlines, or insufficient documentation, many of which can be addressed. We also offer competitive self-pay pricing with flexible payment plans for situations where insurance does not cover the restoration."
      },
      {
        question: "How do I document damage for my insurance claim?",
        answer: "Take photos and video of all visible damage before touching or cleaning anything. Include wide shots of each affected room and close-ups of specific damage. Save any damaged items rather than throwing them away, as your adjuster may need to inspect them. Keep receipts for any emergency expenses like hotel stays or meals. When you call M&M Restoration, our technicians create comprehensive documentation using moisture meters, thermal imaging, and detailed photo reports that meet insurance industry standards."
      },
      {
        question: "How long do I have to file an insurance claim for property damage?",
        answer: "Most Michigan homeowners insurance policies require you to report damage promptly, typically within 30 to 60 days of the loss. However, you should contact your insurance company as soon as possible after discovering damage. Delayed reporting can complicate your claim and may give the insurer grounds to reduce or deny coverage. For emergency damage like water, fire, or storms, call your insurer and a restoration company simultaneously to begin mitigation and prevent further loss."
      },
      {
        question: "What is the difference between mitigation and restoration on my insurance claim?",
        answer: "Mitigation refers to the immediate steps taken to prevent further damage, such as water extraction, emergency board-up, and tarping. Restoration covers the repairs needed to return your property to pre-loss condition, including drywall replacement, painting, flooring, and reconstruction. Insurance policies typically require you to take reasonable steps to mitigate damage, and both mitigation and restoration are generally covered under your policy as separate line items."
      }
    ]
  },
  {
    name: "Cost & Pricing",
    icon: "💰",
    faqs: [
      {
        question: "How much does water damage restoration cost?",
        answer: "Water damage restoration in the Greater Lansing area typically costs between $1,200 and $12,000 depending on severity, affected area size, and water category. Minor damage to a single room averages $1,200 to $2,500, while moderate damage to multiple rooms runs $2,500 to $5,000. Major damage affecting entire floors or requiring structural repairs can reach $5,000 to $12,000 or more. Most homeowners with insurance pay only their deductible. We provide free assessments with detailed estimates before any work begins."
      },
      {
        question: "How much does mold remediation cost?",
        answer: "Mold remediation costs in Mid-Michigan typically range from $500 to $10,000 depending on the extent of contamination. A small area under 10 square feet costs $500 to $1,500. Moderate contamination in a single room runs $1,500 to $4,000. Extensive contamination affecting multiple areas or requiring significant material removal can cost $4,000 to $10,000 or more. Factors affecting cost include mold location, accessibility, affected materials, and whether structural repairs are needed."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we provide completely free on-site assessments and detailed estimates for all restoration services. Our technician will inspect the damage, document it with photos and moisture readings, explain the recommended scope of work, and provide a written estimate. There is no obligation, and for insurance claims, our estimate is formatted in Xactimate to facilitate smooth approval from your insurance company."
      },
      {
        question: "Are there hidden fees I should know about?",
        answer: "We believe in complete pricing transparency. Your estimate includes all labor, equipment, materials, and disposal costs. We do not charge hidden fees for after-hours or weekend emergency response, and we clearly explain any potential additional costs that may be discovered during the project, such as hidden mold behind walls. Any scope changes are communicated and approved by you before we proceed. What we quote is what you pay."
      },
      {
        question: "Do you offer payment plans for restoration work?",
        answer: "For insurance claims, we bill your insurance company directly, so you only pay your deductible. For self-pay customers, we offer flexible payment options to make restoration affordable. We provide detailed written estimates upfront so you can plan accordingly. Our goal is to make sure cost is never a barrier to getting your property properly restored and your family safe."
      }
    ]
  },
  {
    name: "Emergency Response",
    icon: "🚨",
    faqs: [
      {
        question: "What is your emergency response time?",
        answer: "Our emergency response team is available 24 hours a day, 7 days a week, 365 days a year. We typically arrive on-site within 60 minutes of your call for locations within the Greater Lansing area. Our dispatch team coordinates the nearest available crew with the right equipment for your specific emergency. We serve over 70 communities across Ingham, Eaton, Clinton, and surrounding counties."
      },
      {
        question: "What qualifies as a restoration emergency?",
        answer: "Restoration emergencies include any situation where delay causes progressive damage or poses health and safety risks. This includes active water leaks or flooding, fire or smoke damage, sewage backups, storm damage with water intrusion, and biohazard situations. If water is actively entering your property, fire has damaged your structure, or you have sewage contamination, call us immediately at 616-648-7775 for 24/7 emergency response."
      },
      {
        question: "Do you charge extra for nights, weekends, or holiday emergency calls?",
        answer: "No, we do not charge extra for after-hours, weekend, or holiday emergency calls. Emergencies do not follow a schedule, and neither do we. Our emergency response pricing is the same regardless of when you call. We believe that charging premiums during your most stressful moments is wrong. You get the same professional service and transparent pricing whether you call at 2 PM on a Tuesday or 2 AM on Christmas."
      },
      {
        question: "What areas do you serve for emergency restoration?",
        answer: "We provide emergency restoration services throughout the Greater Lansing area including Lansing, East Lansing, Okemos, Holt, Mason, DeWitt, Grand Ledge, Charlotte, St. Johns, Williamston, and over 60 additional communities across Ingham, Eaton, Clinton, Shiawassee, and Livingston counties. For locations outside our primary service area, we can still help and will provide an estimated response time when you call."
      },
      {
        question: "What should I have ready when the restoration team arrives?",
        answer: "If possible, have your insurance policy number and agent contact information available. Show the team where the damage is and the suspected source if known. Point out any valuables, electronics, or irreplaceable items in the affected area. Provide access to electrical panels and water shutoffs. If you have already taken photos of the damage, share those as well. Our team handles everything from there, including additional documentation and coordination with your insurance company."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const allFaqs = FAQ_CATEGORIES.flatMap(cat => cat.faqs);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const filteredCategories = activeCategory
    ? FAQ_CATEGORIES.filter(cat => cat.name === activeCategory)
    : FAQ_CATEGORIES;

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">Home</Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-300">FAQ</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions About{" "}
              <span className="text-emerald-300">Restoration Services</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Get answers to common questions about water damage, mold, fire damage, insurance claims, costs, and emergency response from our IICRC certified experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                Call for Answers: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                Send Us a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === null
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.name
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category) => {
              const actualCatIndex = FAQ_CATEGORIES.indexOf(category);
              return (
                <div key={category.name} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                      {category.name} Questions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const isOpen = openItems[`${actualCatIndex}-${faqIndex}`];
                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
                        >
                          <button
                            onClick={() => toggleItem(actualCatIndex, faqIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                            aria-expanded={isOpen}
                            aria-controls={`faq-${actualCatIndex}-${faqIndex}`}
                          >
                            <span className="text-lg font-semibold text-slate-800 pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-6 h-6 flex-shrink-0 text-emerald-600 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <div
                            id={`faq-${actualCatIndex}-${faqIndex}`}
                            className={`transition-all duration-300 ease-in-out ${
                              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                            role="region"
                          >
                            <div className="px-6 pb-6 pt-2">
                              <p className="text-slate-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Service Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
              Learn More About Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter(s => s.emergencyService).map(service => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg p-6 transition-all group"
                >
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                Helpful Articles from Our Blog
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/blog/water-damage-restoration-cost-lansing" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
                  Water Damage Restoration Costs
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/blog/signs-of-water-damage-in-walls" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
                  Signs of Water Damage in Walls
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/blog/homeowners-insurance-water-damage-michigan" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
                  Insurance Coverage for Water Damage
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/blog/mold-remediation-cost-michigan" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
                  Mold Remediation Costs
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/blog/water-damage-restoration-timeline" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
                  Water Damage Restoration Timeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Our IICRC certified team has the answers. Call us 24/7 for free expert advice and on-site assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
              >
                Call Now: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
            <p className="mt-6 text-red-200 text-sm">
              Available 24/7 &bull; Licensed &amp; Insured &bull; Direct Insurance Billing &bull; 60-Minute Emergency Response
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
