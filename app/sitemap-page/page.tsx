import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, LOCATIONS } from "../lib/constants";

export const metadata: Metadata = {
  title: "Sitemap | M&M Restoration",
  description: "Browse all pages on the M&M Restoration website. Find restoration services, service areas, and helpful resources for water damage, fire cleanup, mold remediation in the Greater Lansing Area.",
  alternates: {
    canonical: '/sitemap-page',
  },
};

export default function SitemapPage() {
  const emergencyServices = SERVICES.filter(s => s.emergencyService);
  const regularServices = SERVICES.filter(s => !s.emergencyService);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Sitemap</h1>
        <p className="text-slate-600 mb-12">
          Browse all pages on the M&M Restoration website to find the information you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-600 hover:text-emerald-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-emerald-600 hover:text-emerald-700">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-emerald-600 hover:text-emerald-700">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-600 hover:text-emerald-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Services */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              🚨 Emergency Services
            </h2>
            <ul className="space-y-2">
              {emergencyServices.map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    {service.icon} {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Services */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              Professional Services
            </h2>
            <ul className="space-y-2">
              {regularServices.map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    {service.icon} {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Grouped by County */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {LOCATIONS.map(location => (
                <Link 
                  key={location.slug}
                  href={`/locations/${location.slug}`} 
                  className="text-emerald-600 hover:text-emerald-700 text-sm"
                >
                  📍 {location.name}, {location.state}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-emerald-600 hover:text-emerald-700">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
              Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sitemap.xml" className="text-emerald-600 hover:text-emerald-700">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Need Help Finding Something?</h2>
          <p className="text-slate-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Contact us and we&apos;ll help you right away.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
