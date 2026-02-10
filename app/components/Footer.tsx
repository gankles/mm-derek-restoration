import Link from "next/link";
import { BUSINESS_INFO, SERVICES, LOCATIONS, COST_DATA, COUNTIES } from "../lib/constants";

const COST_SLUGS = Object.keys(COST_DATA).slice(0, 6);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emergencyServices = SERVICES.filter(service => service.emergencyService).slice(0, 6);
  const popularLocations = LOCATIONS.slice(0, 8);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-slate-300 mb-4">
              Professional damage restoration services serving the Greater Lansing Area.
              Available 24/7 for emergency response.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-emerald-300 mr-2">📞</span>
                <a href="tel:616-648-7775" className="hover:text-emerald-300 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-300 mr-2">📍</span>
                <span>{BUSINESS_INFO.serviceArea}</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-300 mr-2">🕒</span>
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Link href="/about" className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors">
                Blog & Cost Guides
              </Link>
              <Link href="/contact" className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Emergency Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">🚨 Emergency Services</h4>
            <div className="space-y-2">
              {emergencyServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  {service.icon} {service.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="block text-sm text-emerald-300 hover:text-emerald-300 font-semibold mt-3"
              >
                View All Services →
              </Link>
            </div>
          </div>

          {/* Cost Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Cost Guides</h4>
            <div className="space-y-2">
              {COST_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`/cost-of/${slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  {COST_DATA[slug].serviceName} Cost
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="space-y-2">
              {popularLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  📍 {location.name}, {location.state}
                </Link>
              ))}
              <Link
                href="/locations"
                className="block text-sm text-emerald-300 hover:text-emerald-300 font-semibold mt-3"
              >
                View All Locations →
              </Link>
            </div>
          </div>

          {/* Counties */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Counties We Serve</h4>
            <div className="space-y-2">
              {COUNTIES.map((county) => (
                <Link
                  key={county.slug}
                  href={`/county/${county.slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  {county.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="hover:text-emerald-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-emerald-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap-page" className="hover:text-emerald-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
