/**
 * Programmatic content generation system.
 * Produces genuinely unique content blocks for service+location pages
 * by combining location data, service data, and deterministic variation.
 */

// Simple deterministic hash to pick variations consistently per slug pair
function hashPair(a: string, b: string): number {
  const str = `${a}:${b}`;
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickN<T>(arr: T[], hash: number, n: number): T[] {
  const result: T[] = [];
  const pool = [...arr];
  let h = hash;
  while (result.length < n && pool.length > 0) {
    const idx = h % pool.length;
    result.push(pool[idx]);
    pool.splice(idx, 1);
    h = ((h << 3) + 7) | 0;
    h = Math.abs(h);
  }
  return result;
}

interface LocationData {
  name: string;
  slug: string;
  state: string;
  county: string;
  population: string;
  populationNum: number;
  responseTime: string;
  casesCompleted: number;
  uniqueFact: string;
  landmarks: string[];
  commonIssues: string[];
  testimonial: { name: string; text: string; rating: number };
}

interface ServiceData {
  name: string;
  slug: string;
  description: string;
  emergencyService: boolean;
  typicalDuration?: string;
  processSteps?: string[];
  equipment?: string[];
  commonCauses?: string[];
  insuranceTips?: string;
}

// ---------------------------------------------------------------------------
// 1. Unique Intro Paragraph Generator
// ---------------------------------------------------------------------------
export function generateServiceLocationIntro(
  service: ServiceData,
  location: LocationData,
): string {
  const h = hashPair(service.slug, location.slug);
  const issue = location.commonIssues[h % location.commonIssues.length];
  const cause = service.commonCauses?.[h % (service.commonCauses?.length || 1)] || "unexpected property damage";
  const landmark = location.landmarks.length > 0
    ? location.landmarks[h % location.landmarks.length]
    : location.name;

  const intros = [
    `${location.uniqueFact} Properties near ${landmark} and throughout ${location.name} frequently experience ${issue.toLowerCase()}. When ${cause.toLowerCase()} strikes, M&M Restoration's ${service.name.toLowerCase()} team responds within ${location.responseTime} — drawing on ${location.casesCompleted}+ completed projects across ${location.county} County to restore your property quickly and thoroughly.`,

    `In ${location.name}, ${location.state}, homes and businesses face distinct restoration challenges — from ${issue.toLowerCase()} to damage caused by ${cause.toLowerCase()}. ${location.uniqueFact} Our certified technicians have completed ${location.casesCompleted}+ ${service.name.toLowerCase()} projects in ${location.county} County and understand the building styles, soil conditions, and weather patterns unique to the ${location.name} area.`,

    `${location.name} residents know that ${issue.toLowerCase()} is a reality of living in ${location.county} County. ${location.uniqueFact} With ${location.casesCompleted}+ local projects completed, our ${service.name.toLowerCase()} team understands the specific needs of ${location.name} properties — from historic homes near ${landmark} to newer developments on the outskirts of town.`,

    `When ${cause.toLowerCase()} affects your ${location.name} property, fast action is critical. ${location.uniqueFact} M&M Restoration has been serving the ${location.name} community since 2015, completing ${location.casesCompleted}+ restoration projects in ${location.county} County. Our ${location.responseTime} response time means we reach ${location.name} homes and businesses before damage compounds.`,

    `The ${location.population} residents of ${location.name}, ${location.state} deserve a restoration company that understands their community. ${location.uniqueFact} Common challenges like ${issue.toLowerCase()} require local expertise — and with ${location.casesCompleted}+ projects completed in ${location.county} County, M&M Restoration brings proven ${service.name.toLowerCase()} experience to every ${location.name} job.`,
  ];

  return intros[h % intros.length];
}

// ---------------------------------------------------------------------------
// 2. Unique "Why Choose" Reasons (not generic boilerplate)
// ---------------------------------------------------------------------------
export function generateWhyChooseReasons(
  service: ServiceData,
  location: LocationData,
): { title: string; description: string }[] {
  const h = hashPair(service.slug, location.slug);
  const issue0 = location.commonIssues[0] || "local property challenges";
  const issue1 = location.commonIssues[1] || "seasonal damage";
  const equip = service.equipment?.slice(0, 2).join(" and ") || "professional-grade equipment";
  const landmark = location.landmarks[0] || location.name;

  const pool = [
    {
      title: `${location.responseTime} to ${location.name}`,
      description: `Our crews are positioned throughout ${location.county} County to reach ${location.name} in ${location.responseTime}. For ${service.emergencyService ? "emergencies like " + (service.commonCauses?.[0]?.toLowerCase() || "sudden damage") + ", " : ""}every minute counts — our proximity means less damage and lower costs for you.`,
    },
    {
      title: `${location.casesCompleted}+ ${location.county} County Projects`,
      description: `We've handled ${location.casesCompleted}+ ${service.name.toLowerCase()} projects across ${location.county} County, including common ${location.name} issues like ${issue0.toLowerCase()}. That local track record means we know what to expect and how to handle it efficiently.`,
    },
    {
      title: `${location.name}-Specific Expertise`,
      description: `Properties near ${landmark} and throughout ${location.name} have distinct characteristics. We understand the building codes, construction styles, and environmental factors that affect ${service.name.toLowerCase()} outcomes in this area.`,
    },
    {
      title: `${location.county} County Insurance Relationships`,
      description: `We've worked with every major insurance company serving ${location.name}, ${location.state}. Our documentation standards help maximize your claim — and we bill your insurance directly so you pay only your deductible.`,
    },
    {
      title: `Equipment for ${location.name} Conditions`,
      description: `We bring ${equip} specifically suited for ${location.county} County conditions. For ${issue1.toLowerCase()}, our certified technicians deploy the right tools from day one — no guesswork, no wasted time.`,
    },
    {
      title: `Proven Process for ${service.name}`,
      description: service.processSteps && service.processSteps.length > 0
        ? `Our ${service.name.toLowerCase()} process starts with ${service.processSteps[0].toLowerCase()} and follows IICRC protocols through completion. ${location.name} residents get a detailed timeline and daily updates throughout the ${service.typicalDuration || "restoration"} process.`
        : `Our IICRC-certified ${service.name.toLowerCase()} process follows industry best practices from assessment through final inspection. ${location.name} residents get a clear timeline and daily progress updates.`,
    },
  ];

  return pickN(pool, h, 4);
}

// ---------------------------------------------------------------------------
// 3. Unique FAQ Generator — varied questions per service+location pair
// ---------------------------------------------------------------------------
export function generateServiceLocationFAQs(
  service: ServiceData,
  location: LocationData,
): { question: string; answer: string }[] {
  const h = hashPair(service.slug, location.slug);
  const issue = location.commonIssues[h % location.commonIssues.length];
  const cause = service.commonCauses?.[h % (service.commonCauses?.length || 1)] || "unexpected damage";
  const duration = service.typicalDuration || "several days";

  const faqBank = [
    {
      question: `How quickly can M&M respond to ${service.name.toLowerCase()} emergencies in ${location.name}?`,
      answer: service.emergencyService
        ? `We guarantee ${location.responseTime} response time to ${location.name}, ${location.state} for ${service.name.toLowerCase()} emergencies. Our crews are stationed throughout ${location.county} County with fully equipped trucks ready 24/7. When you call, a live dispatcher sends the nearest team immediately.`
        : `We typically schedule ${service.name.toLowerCase()} in ${location.name} within 24-48 hours. For urgent situations, same-day service is often available. Our ${location.county} County teams stay busy, so calling early helps us fit your ${location.name} job into the schedule quickly.`,
    },
    {
      question: `What causes most ${service.name.toLowerCase()} needs in ${location.name}?`,
      answer: `Based on our ${location.casesCompleted}+ projects in ${location.county} County, the most common causes in ${location.name} include ${issue.toLowerCase()} and damage from ${cause.toLowerCase()}. ${location.uniqueFact} These local factors mean ${location.name} properties benefit from restoration teams who understand the area's specific challenges.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take in a typical ${location.name} home?`,
      answer: `Most ${service.name.toLowerCase()} projects in ${location.name} take ${duration}. The exact timeline depends on the damage extent, affected materials, and your property's layout. We provide a detailed schedule during our initial assessment and keep you updated daily. ${service.emergencyService ? `Emergency mitigation starts within ${location.responseTime} of your call.` : "We work efficiently to minimize disruption to your household."}`,
    },
    {
      question: `Does insurance cover ${service.name.toLowerCase()} in ${location.name}, ${location.state}?`,
      answer: `${service.insuranceTips || `Most homeowner policies in ${location.name} cover ${service.name.toLowerCase()} when damage results from sudden, accidental events.`} We work directly with all major insurance companies serving ${location.county} County — handling documentation, adjuster communication, and direct billing so you typically pay only your deductible.`,
    },
    {
      question: `What equipment do you use for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: service.equipment && service.equipment.length > 0
        ? `For ${service.name.toLowerCase()} in ${location.name}, we deploy ${service.equipment.slice(0, 3).join(", ")}, and more — all commercial-grade, IICRC-approved tools. The specific equipment mix depends on your situation. During assessment, our ${location.county} County technicians determine exactly what your ${location.name} property needs.`
        : `We use commercial-grade, IICRC-approved equipment for all ${service.name.toLowerCase()} in ${location.name}. During our initial assessment, our ${location.county} County technicians determine the exact equipment your property requires for complete restoration.`,
    },
    {
      question: `What's the first step in your ${service.name.toLowerCase()} process?`,
      answer: service.processSteps && service.processSteps.length >= 2
        ? `In ${location.name}, our ${service.name.toLowerCase()} process begins with: ${service.processSteps[0]} After that initial step, we move to ${service.processSteps[1].toLowerCase()} — always following IICRC protocols. Every ${location.name} project gets a customized restoration plan based on the specific damage to your property.`
        : `We start every ${location.name} project with a thorough damage assessment to understand exactly what your property needs. This initial step determines the restoration plan, timeline, and cost estimate — all provided in writing before any work begins.`,
    },
    {
      question: `Are your ${location.name} technicians certified for ${service.name.toLowerCase()}?`,
      answer: `Every M&M Restoration technician serving ${location.name} holds IICRC certification specific to ${service.name.toLowerCase()}. We're fully licensed, bonded, and insured in Michigan. Our ${location.county} County team undergoes regular continuing education to stay current with restoration best practices and equipment advances.`,
    },
    {
      question: `What should ${location.name} homeowners do before you arrive for ${service.name.toLowerCase()}?`,
      answer: service.emergencyService
        ? `For ${service.name.toLowerCase()} emergencies in ${location.name}: ensure everyone's safe, stop the source of damage if possible (like shutting off the water main), document everything with photos for insurance, and call us immediately at 616-648-7775. Don't attempt cleanup yourself — improper handling can worsen damage. We'll be there within ${location.responseTime}.`
        : `Before our ${location.name} team arrives: document the current condition with photos, clear access paths to affected areas, and gather your insurance policy information. If you've already filed a claim, have your claim number ready. Our technicians will handle everything from there.`,
    },
    {
      question: `How do you prevent recurring ${service.name.toLowerCase()} issues in ${location.name} properties?`,
      answer: `After completing ${service.name.toLowerCase()} at your ${location.name} property, we identify the root cause and recommend prevention measures. Common ${location.name} issues like ${issue.toLowerCase()} often have addressable underlying causes. We provide a written prevention plan specific to your property's location and construction type.`,
    },
    {
      question: `Can M&M handle both residential and commercial ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `Yes. Our ${location.county} County team handles ${service.name.toLowerCase()} for ${location.name} homes, businesses, and multi-unit properties. Commercial jobs may require different equipment and scheduling — we've completed projects for retail, office, and industrial spaces throughout ${location.name} and the broader ${location.county} County area.`,
    },
  ];

  return pickN(faqBank, h, 5);
}

// ---------------------------------------------------------------------------
// 4. Unique Cost Page FAQ Generator (replaces string-replace pattern)
// ---------------------------------------------------------------------------
export function generateCostLocationFAQs(
  serviceName: string,
  priceRange: string,
  avgPrice: string,
  location: LocationData,
): { question: string; answer: string }[] {
  const h = hashPair(serviceName, location.slug);
  const issue = location.commonIssues[h % location.commonIssues.length];

  const faqBank = [
    {
      question: `How much does ${serviceName.toLowerCase()} typically cost in ${location.name}, ${location.state}?`,
      answer: `${serviceName} in ${location.name} typically costs ${priceRange}, with most homeowners paying around ${avgPrice}. Costs depend on the extent of damage, affected materials, and your property's specific needs. We provide free, detailed estimates for all ${location.name} jobs and bill your insurance directly.`,
    },
    {
      question: `Does insurance cover ${serviceName.toLowerCase()} costs in ${location.name}?`,
      answer: `Most homeowner policies in ${location.name} cover ${serviceName.toLowerCase()} when it results from sudden, accidental events. We work directly with all major insurance companies serving ${location.county} County, handling documentation and billing so you typically pay only your deductible. We've helped ${location.casesCompleted}+ ${location.name} families navigate insurance claims.`,
    },
    {
      question: `Why do ${serviceName.toLowerCase()} costs vary in ${location.name}?`,
      answer: `In ${location.name}, costs vary based on damage extent, affected square footage, materials involved, and how quickly restoration begins. ${location.name} properties face specific challenges including ${issue.toLowerCase()}, which can affect complexity. Getting a professional assessment within the first hours keeps costs down — every hour of delay can increase damage by 10-30%.`,
    },
    {
      question: `Can I get a free ${serviceName.toLowerCase()} estimate in ${location.name}?`,
      answer: `Yes. We provide free, no-obligation estimates for all ${serviceName.toLowerCase()} in ${location.name} and throughout ${location.county} County. Our certified technicians assess the damage on-site and provide a detailed written estimate before any work begins. For emergencies, we can usually reach ${location.name} within ${location.responseTime}.`,
    },
    {
      question: `Is ${serviceName.toLowerCase()} in ${location.name} more expensive than other areas?`,
      answer: `${serviceName} costs in ${location.name} are comparable to the broader ${location.county} County area, typically in the ${priceRange} range. Local factors like ${issue.toLowerCase()} may affect project scope, but our pricing is consistent and transparent across all communities we serve. No hidden fees — the written estimate is what you pay.`,
    },
    {
      question: `What happens if ${serviceName.toLowerCase()} costs exceed the estimate in ${location.name}?`,
      answer: `We stand behind our written estimates for ${location.name} jobs. If we discover additional damage during the project, we stop and discuss it with you before proceeding — including updated costs and insurance coverage implications. No surprise charges. Your approval is required in writing before any scope changes.`,
    },
    {
      question: `How can I reduce ${serviceName.toLowerCase()} costs in ${location.name}?`,
      answer: `The #1 way to keep costs down: call immediately. In ${location.name}, we can be on-site in ${location.responseTime}. Fast response prevents secondary damage — water that sits 48 hours does 3-4x more damage than water extracted promptly. Also, maintain your insurance coverage and document damage before cleanup for maximum claim value.`,
    },
    {
      question: `Do you offer payment plans for ${serviceName.toLowerCase()} in ${location.name}?`,
      answer: `Most ${location.name} homeowners pay only their insurance deductible since we bill insurance directly. For non-insured work, we offer straightforward pricing with payment due upon completion. Contact us to discuss your specific situation — we work with ${location.name} families to find manageable solutions.`,
    },
  ];

  return pickN(faqBank, h, 6);
}

// ---------------------------------------------------------------------------
// 5. Unique Location Hub FAQ Generator (replaces mad-libs pattern)
// ---------------------------------------------------------------------------
export function generateLocationHubFAQs(
  location: LocationData,
  serviceCount: number,
): { question: string; answer: string }[] {
  const h = hashPair("location-hub", location.slug);
  const issue0 = location.commonIssues[0] || "water damage";
  const issue1 = location.commonIssues[1] || "storm damage";
  const landmark = location.landmarks[0] || location.name;

  const faqBank = [
    {
      question: `What restoration services are available in ${location.name}, ${location.state}?`,
      answer: `M&M Restoration provides ${serviceCount} professional restoration services in ${location.name}, including water damage restoration, fire damage cleanup, mold remediation, storm damage repair, and specialized cleaning services. We've completed ${location.casesCompleted}+ projects in ${location.county} County and understand ${location.name}'s specific property needs.`,
    },
    {
      question: `How fast can M&M Restoration reach ${location.name}?`,
      answer: `Our average response time to ${location.name}, ${location.state} is ${location.responseTime}. We maintain crews throughout ${location.county} County with fully equipped trucks ready for dispatch 24/7. When you call our emergency line at 616-648-7775, a live dispatcher sends the nearest available team to ${location.name} immediately.`,
    },
    {
      question: `What are the most common restoration needs in ${location.name}?`,
      answer: `Based on our ${location.casesCompleted}+ projects in the area, ${location.name} properties most commonly need help with ${issue0.toLowerCase()} and ${issue1.toLowerCase()}. ${location.uniqueFact} These local factors shape the types of restoration work we perform most often in ${location.name}.`,
    },
    {
      question: `Do you work with insurance companies for ${location.name} restoration claims?`,
      answer: `Yes — we work directly with all major insurance companies serving ${location.name} and ${location.county} County. We document damage thoroughly with photos, moisture readings, and detailed reports, then handle claim filing and adjuster communication. Most ${location.name} homeowners pay only their deductible.`,
    },
    {
      question: `What makes M&M Restoration different from other companies serving ${location.name}?`,
      answer: `Local knowledge matters. We've completed ${location.casesCompleted}+ projects in ${location.county} County and understand ${location.name}'s building styles, weather patterns, and common property challenges. Our IICRC-certified technicians reach ${location.name} within ${location.responseTime}, and we handle your insurance claim directly — no middlemen, no surprise bills.`,
    },
    {
      question: `Is M&M Restoration licensed to work in ${location.name}, ${location.state}?`,
      answer: `Yes. M&M Restoration is fully licensed, bonded, and insured for all restoration work in ${location.name} and throughout Michigan. Every technician holds IICRC certification — the highest standard in the restoration industry. We've been serving ${location.county} County since 2015.`,
    },
    {
      question: `What areas near ${location.name} do you also serve?`,
      answer: `Beyond ${location.name}, we serve all communities in ${location.county} County and surrounding counties including Ingham, Eaton, Clinton, and Shiawassee. Our service area covers a 60-mile radius from our ${location.county} County base, with the same response-time guarantee for emergency situations.`,
    },
    {
      question: `Do you serve commercial properties in ${location.name}?`,
      answer: `Yes. We provide restoration services for residential homes, commercial buildings, rental properties, and industrial facilities throughout ${location.name}. Properties near ${landmark} and throughout the ${location.name} business district receive the same fast response and insurance-direct billing as residential clients.`,
    },
  ];

  return pickN(faqBank, h, 5);
}
