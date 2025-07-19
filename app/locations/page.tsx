import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "../lib/constants";
import { EmergencyCTA } from "../components/CTAComponents";

export const metadata: Metadata = {
  title: "Service Areas | Emergency Restoration Services Throughout Greater Lansing, MI",
  description: "M&M Restoration serves all of Greater Lansing, MI with emergency restoration services. Water damage, fire cleanup, mold remediation in Lansing, East Lansing, Okemos, Haslett, Holt, Mason and surrounding areas. Call (616) 648-7775.",
  keywords: "restoration services Lansing MI, emergency services Greater Lansing, water damage restoration service areas, fire damage cleanup locations, mold remediation service areas Michigan",
  openGraph: {
    title: "Service Areas | Emergency Restoration Services Throughout Greater Lansing, MI",
    description: "M&M Restoration serves all of Greater Lansing, MI with emergency restoration services. 24/7 response to water damage, fire cleanup, mold remediation.",
  },
};

export default function LocationsPage() {
  const emergencyServices = SERVICES.filter(service => service.emergencyService);

  // Group locations by county/region for better organization
  const locationsByRegion = {
    "Ingham County": LOCATIONS.filter(loc => 
      ["lansing", "east-lansing", "haslett", "holt", "mason", "okemos", "williamston", "webberville", "stockbridge"].includes(loc.slug)
    ),
    "Eaton County": LOCATIONS.filter(loc => 
      ["grand-ledge", "charlotte", "dimondale", "potterville", "vermontville", "waverly", "eaton-rapids", "olivet"].includes(loc.slug)
    ),
    "Clinton County": LOCATIONS.filter(loc => 
      ["dewitt", "bath", "eagle", "laingsburg"].includes(loc.slug)
    ),
    "Charter Townships": LOCATIONS.filter(loc => 
      loc.name.includes("Charter Township")
    ),
    "Other Areas": LOCATIONS.filter(loc => 
      ["perry", "lake-odessa"].includes(loc.slug)
    )
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/goldeneyed_a_team_of_restoration_technicians_cleaning_up_water__41dd225b-df4d-49ca-b645-26f8fc8361d6.png')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📍 Serving the Greater Lansing Area
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency Restoration Services <span className="text-emerald-400">Throughout</span> Greater Lansing, MI
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              24/7 Emergency Response • IICRC Certified • Direct Insurance Billing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                🚨 Emergency: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">50+</div>
                <div className="text-slate-200">Communities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">60 Min</div>
                <div className="text-slate-200">Max Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-slate-200">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Comprehensive Coverage Across Greater Lansing
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              M&M Restoration proudly serves the entire Greater Lansing Area with professional emergency 
              restoration services. No matter where you are in our service area, we guarantee rapid response 
              and exceptional service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">🏙️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Urban Areas</h3>
              <p className="text-slate-600">
                Full service coverage in Lansing, East Lansing, and other major urban centers 
                with specialized equipment for high-density areas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Suburban Communities</h3>
              <p className="text-slate-600">
                Rapid response to suburban areas including Okemos, Haslett, Mason, and Holt 
                with residential restoration expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Rural Properties</h3>
              <p className="text-slate-600">
                Specialized service for rural and township areas with understanding of 
                unique property challenges and access requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas by Region */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-slate-600">
              Click on any location to see specific services available in that area
            </p>
          </div>

          {Object.entries(locationsByRegion).map(([region, locations]) => (
            <div key={region} className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">{region}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="group bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="text-emerald-600 text-2xl mb-2 group-hover:scale-110 transition-transform">📍</div>
                    <div className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {location.name}
                    </div>
                    <div className="text-sm text-slate-500">{location.state}</div>
                    <div className="text-xs text-slate-400 mt-1">Pop: {location.population}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Services Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Emergency Services Available in All Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No matter where you are in our service area, these emergency restoration services 
              are available 24/7 with rapid response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <div
                key={service.slug}
                className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="text-red-600 font-semibold text-sm">🚨 24/7 Emergency Response</div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block mt-3 text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              60-Minute Response Guarantee
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              We guarantee arrival within 60 minutes for emergency situations throughout our entire service area. 
              When disaster strikes, every minute counts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-red-700/50 rounded-lg p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold mb-2">Immediate Dispatch</h3>
                <p className="text-red-100">
                  Our emergency team is dispatched immediately upon receiving your call, 
                  24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="bg-red-700/50 rounded-lg p-6">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className="text-xl font-bold mb-2">Fully Equipped Vehicles</h3>
                <p className="text-red-100">
                  Our service vehicles are strategically located and fully equipped with 
                  professional restoration equipment.
                </p>
              </div>

              <div className="bg-red-700/50 rounded-lg p-6">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-xl font-bold mb-2">GPS Tracking</h3>
                <p className="text-red-100">
                  We use GPS tracking to ensure the closest available team responds 
                  to your emergency for fastest arrival times.
                </p>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors shadow-lg inline-block"
            >
              📞 Emergency Line: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service Quality Standards */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Consistent Quality Across All Service Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're in downtown Lansing or rural Eaton County, you receive the same 
              high-quality, professional restoration services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">IICRC Certified</h3>
              <p className="text-slate-600">
                All technicians certified regardless of which area they serve
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Same Equipment</h3>
              <p className="text-slate-600">
                Professional-grade equipment used in every service area
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Insurance Direct</h3>
              <p className="text-slate-600">
                Direct insurance billing available throughout our service area
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Satisfaction Guarantee</h3>
              <p className="text-slate-600">
                Same guarantee applies to all customers in every location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Don't See Your Area Listed?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We're constantly expanding our service area. Contact us to see if we can provide 
              restoration services in your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:616-648-7775"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Call to Check Service Area
              </a>
              <Link
                href="/contact"
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title="Need Emergency Restoration Services?"
            subtitle="Serving the entire Greater Lansing Area with rapid response and professional restoration services."
          />
        </div>
      </section>
    </div>
  );
}