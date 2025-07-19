import Link from "next/link";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emergencyServices = SERVICES.filter(service => service.emergencyService).slice(0, 6);
  const regularServices = SERVICES.filter(service => !service.emergencyService).slice(0, 6);
  const popularLocations = LOCATIONS.slice(0, 8);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-slate-300 mb-4">
              Professional damage restoration services serving the Greater Lansing Area. 
              Available 24/7 for emergency response.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">📞</span>
                <a href="tel:616-648-7775" className="hover:text-emerald-400 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">📍</span>
                <span>{BUSINESS_INFO.serviceArea}</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">🕒</span>
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-emerald-400 mb-2">Certifications</h4>
              <div className="space-y-1 text-sm text-slate-300">
                {BUSINESS_INFO.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-emerald-400 mr-2">✓</span>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">🚨 Emergency Services</h4>
            <div className="space-y-2">
              {emergencyServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {service.icon} {service.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="block text-sm text-emerald-400 hover:text-emerald-300 font-semibold mt-3"
              >
                View All Services →
              </Link>
            </div>
          </div>

          {/* Regular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Services</h4>
            <div className="space-y-2">
              {regularServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {service.icon} {service.name}
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
                  className="block text-sm text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  📍 {location.name}, {location.state}
                </Link>
              ))}
              <Link
                href="/locations"
                className="block text-sm text-emerald-400 hover:text-emerald-300 font-semibold mt-3"
              >
                View All Locations →
              </Link>
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
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}