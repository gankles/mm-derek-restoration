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
              <div className="text-yellow-300 font-bold text-xl">⚡ 60 Minutes or Less!</div>
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 text-white p-4 shadow-lg lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-bold">Emergency Service</div>
          <div className="text-sm text-red-100">Call Now - 60 Min Response</div>
        </div>
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
        >
          📞 Call
        </a>
      </div>
    </div>
  );
}

export function ServiceCTA({ 
  serviceName, 
  serviceSlug,
  showFreeEstimate = true 
}: { 
  serviceName: string; 
  serviceSlug: string;
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