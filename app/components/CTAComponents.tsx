import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";

export function EmergencyCTA({ 
  title = "Need Emergency Service?", 
  subtitle = "Don't wait! Call now for immediate help.",
  showTimer = true 
}) {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-6 rounded-lg shadow-lg">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-red-100">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
          >
            📞 {BUSINESS_INFO.phone}
          </a>
          
          {showTimer && (
            <div className="text-center">
              <div className="text-amber-400 font-bold text-xl">⚡ 60 Minutes or Less!</div>
              <div className="text-red-100 text-sm">Emergency Response Time</div>
            </div>
          )}
        </div>
        
        <div className="mt-4 text-red-100 text-sm">
          Available 24/7 • Licensed & Insured • Direct Insurance Billing
        </div>
      </div>
    </div>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 text-white shadow-lg lg:hidden">
      <div className="flex">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 border-r border-red-500 hover:bg-red-700 transition-colors"
        >
          <span className="text-xl">📞</span>
          <div className="text-left">
            <div className="font-bold text-sm">Call Now</div>
            <div className="text-xs text-red-200">60-min response</div>
          </div>
        </a>
        
        <a
          href={`sms:${BUSINESS_INFO.phone.replace(/\D/g, '')}?body=I need help with restoration services`}
          className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-red-700 transition-colors"
        >
          <span className="text-xl">💬</span>
          <div className="text-left">
            <div className="font-bold text-sm">Text Us</div>
            <div className="text-xs text-red-200">Quick reply</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export function ServiceCTA({ 
  serviceName, 
  showFreeEstimate = true 
}: { 
  serviceName: string; 
  showFreeEstimate?: boolean;
}) {
  return (
    <div className="bg-slate-100 border-l-4 border-emerald-500 p-6 rounded-r-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Need {serviceName}?
          </h3>
          <div className="space-y-1 text-slate-600">
            <div className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              IICRC Certified Technicians
            </div>
            <div className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              24/7 Emergency Response
            </div>
            {showFreeEstimate && (
              <div className="flex items-center">
                <span className="text-emerald-500 mr-2">✓</span>
                Free Estimates & Insurance Billing
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            📞 Call Now
          </a>
          <Link
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ComparisonCTA() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border border-emerald-200">
      <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">
        Why Choose M&M Restoration?
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-emerald-200">
              <th className="text-left py-2 font-semibold text-slate-700">Feature</th>
              <th className="text-center py-2 font-semibold text-emerald-700">M&M Restoration</th>
              <th className="text-center py-2 font-semibold text-slate-500">Other Companies</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            <tr className="border-b border-emerald-100">
              <td className="py-2 font-medium">Response Time</td>
              <td className="text-center py-2 text-emerald-700 font-semibold">60 Minutes or Less</td>
              <td className="text-center py-2 text-slate-500">24-48 Hours</td>
            </tr>
            <tr className="border-b border-emerald-100">
              <td className="py-2 font-medium">Technicians</td>
              <td className="text-center py-2 text-emerald-700 font-semibold">IICRC Certified</td>
              <td className="text-center py-2 text-slate-500">Often Uncertified</td>
            </tr>
            <tr className="border-b border-emerald-100">
              <td className="py-2 font-medium">Insurance</td>
              <td className="text-center py-2 text-emerald-700 font-semibold">We Handle Direct</td>
              <td className="text-center py-2 text-slate-500">You Handle Paperwork</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Guarantee</td>
              <td className="text-center py-2 text-emerald-700 font-semibold">Full Restoration</td>
              <td className="text-center py-2 text-slate-500">Risk of Return</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
        >
          Experience the M&M Difference - Call Now!
        </a>
      </div>
    </div>
  );
}

export function ContactOptionsSection() {
  return (
    <section className="py-12 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
          How Would You Like to Reach Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-slate-800 mb-2">Call</h3>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="text-emerald-600 font-bold text-xl block mb-2 hover:text-emerald-700"
            >
              {BUSINESS_INFO.phone}
            </a>
            <p className="text-sm text-slate-500">Speak with an expert now</p>
            <p className="text-xs text-slate-400 mt-1">Available 24/7</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-slate-800 mb-2">Text</h3>
            <a 
              href={`sms:${BUSINESS_INFO.phone.replace(/\D/g, '')}?body=I need help with restoration`}
              className="text-emerald-600 font-bold text-xl block mb-2 hover:text-emerald-700"
            >
              {BUSINESS_INFO.phone}
            </a>
            <p className="text-sm text-slate-500">Get a response in minutes</p>
            <p className="text-xs text-slate-400 mt-1">Send photos of damage</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-slate-800 mb-2">Online</h3>
            <Link 
              href="/contact" 
              className="text-emerald-600 font-bold text-xl block mb-2 hover:text-emerald-700"
            >
              Request Estimate
            </Link>
            <p className="text-sm text-slate-500">We respond within 1 hour</p>
            <p className="text-xs text-slate-400 mt-1">Non-emergency requests</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingData {
  low: number;
  high: number;
  average: number;
  factors: string[];
  insuranceNote: string;
}

const PRICING_DATA: Record<string, PricingData> = {
  'water-damage-restoration': {
    low: 2500,
    high: 7500,
    average: 4000,
    factors: ['Size of affected area', 'Water category (clean/gray/black)', 'Materials damaged (drywall, flooring, etc.)', 'Presence of mold'],
    insuranceNote: 'Most homeowners insurance covers sudden water damage'
  },
  'mold-remediation': {
    low: 1500,
    high: 6000,
    average: 3000,
    factors: ['Size of mold colony', 'Location (accessible vs hidden)', 'Type of mold species', 'Structural damage extent'],
    insuranceNote: 'Coverage varies - often covered if caused by covered water damage'
  },
  'fire-damage-cleanup': {
    low: 3000,
    high: 15000,
    average: 8000,
    factors: ['Fire severity and spread', 'Smoke and soot damage', 'Water damage from firefighting', 'Contents requiring cleaning'],
    insuranceNote: 'Fire damage is typically fully covered by homeowners insurance'
  },
  'storm-damage-restoration': {
    low: 2000,
    high: 10000,
    average: 5000,
    factors: ['Type of storm damage', 'Roof and structural damage', 'Water intrusion extent', 'Emergency board-up needs'],
    insuranceNote: 'Usually covered - check your policy for wind/hail specifics'
  },
  'biohazard-cleanup': {
    low: 2000,
    high: 8000,
    average: 4000,
    factors: ['Type of biohazard', 'Affected area size', 'Disposal requirements', 'Decontamination level needed'],
    insuranceNote: 'Often covered under homeowners policies or victim assistance'
  },
  'sewage-cleanup-services': {
    low: 2500,
    high: 7000,
    average: 4500,
    factors: ['Amount of sewage', 'Affected materials', 'Contamination spread', 'Structural drying needs'],
    insuranceNote: 'Requires sewer/drain backup endorsement on most policies'
  }
};

export function PricingTransparency({ serviceSlug }: { serviceSlug: string }) {
  const data = PRICING_DATA[serviceSlug];
  
  if (!data) return null;

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            How Much Does This Cost?
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6 text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              ${data.low.toLocaleString()} - ${data.high.toLocaleString()}
            </div>
            <div className="text-slate-500 mb-4">
              Typical range in Greater Lansing Area
            </div>
            <div className="text-sm text-slate-600">
              Most homeowners pay around <strong className="text-emerald-700">${data.average.toLocaleString()}</strong> after insurance
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <h3 className="font-semibold text-slate-700 mb-3">What affects your cost:</h3>
            <ul className="space-y-2">
              {data.factors.map((factor, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <span className="text-emerald-500 mr-2 mt-1">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">💡</span>
              <div>
                <div className="font-semibold text-blue-800 mb-1">Insurance Coverage</div>
                <div className="text-sm text-blue-700">{data.insuranceNote}</div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <div className="text-emerald-800 font-medium mb-3">
              Get your exact cost with a free on-site estimate
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Call for Free Estimate
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phone.replace(/\D/g, '')}?body=I'd like a free estimate for restoration services`}
                className="bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                💬 Text for Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface IntentAnswerProps {
  question: string;
  answer: string;
  keyFacts: Array<{ label: string; value: string }>;
}

export function IntentAnswer({ question, answer, keyFacts }: IntentAnswerProps) {
  return (
    <section className="py-8 bg-amber-50 border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 text-white rounded-full p-2 flex-shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                {question}
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                {answer}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {keyFacts.map((fact, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{fact.label}</div>
                    <div className="text-sm font-bold text-emerald-700">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}