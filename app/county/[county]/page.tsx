import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, SERVICES, LOCATIONS, COUNTIES } from "../../lib/constants";
import { EmergencyCTA } from "../../components/CTAComponents";
import { buildSEOTitle } from "../../lib/utils";

interface CountyPageProps {
  params: {
    county: string;
  };
}

export async function generateStaticParams() {
  return COUNTIES.map((county) => ({
    county: county.slug,
  }));
}

export async function generateMetadata({ params }: CountyPageProps): Promise<Metadata> {
  const county = COUNTIES.find(c => c.slug === params.county);
  if (!county) return {};

  const title = buildSEOTitle([
    `Restoration Services ${county.name}, MI`,
    `Serving ${county.majorCities.slice(0, 4).join(", ")} & ${county.cities.length}+ Cities`,
    `Water Damage, Fire, Mold & Storm Repair`,
    `60-Minute Emergency Response with Free Estimates`,
    `M&M Restoration`,
  ]);
  const description = `Restoration services across ${county.name}, MI. Serving ${county.majorCities.slice(0, 3).join(", ")} & ${county.cities.length - 3}+ more cities. Water, fire, mold. 60-min response. Call 616-648-7775.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/county/${params.county}`,
    },
    openGraph: {
      title,
      description,
      url: `https://m-mrestoration.com/county/${params.county}`,
    },
  };
}

export default function CountyPage({ params }: CountyPageProps) {
  const county = COUNTIES.find(c => c.slug === params.county);
  if (!county) {
    notFound();
  }

  const countyLocations = LOCATIONS.filter(loc => 
    county.cities.includes(loc.slug)
  );

  const emergencyServices = SERVICES.filter(s => s.emergencyService);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:underline">Locations</Link>
              <span>/</span>
              <span className="text-white">{county.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restoration Services in {county.name}, Michigan
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              {county.description} M&M Restoration provides 24/7 emergency water damage, fire damage, 
              and mold remediation services to all {county.name} communities.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">{countyLocations.length}+</p>
                <p className="text-slate-300 text-sm">Communities Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">{county.population}</p>
                <p className="text-slate-300 text-sm">Population</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">60 min</p>
                <p className="text-slate-300 text-sm">Response Time</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                📞 Call Now: {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-white/30"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            Cities & Townships We Serve in {county.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            We provide emergency restoration services to all communities in {county.name}, 
            including {county.majorCities.join(", ")}, and surrounding areas.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {countyLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-slate-50 hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-emerald-600 text-lg mb-1">📍</div>
                <div className="font-semibold text-slate-800">{location.name}</div>
                <div className="text-sm text-slate-500">{location.responseTime} response</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            Emergency Services in {county.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            When disaster strikes anywhere in {county.name}, our IICRC certified technicians 
            respond within 60 minutes with professional equipment and expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                <span className="text-emerald-600 font-semibold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              About {county.name} Restoration Services
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                M&M Restoration has been serving {county.name} residents and businesses since 2015. 
                Our local expertise means we understand the unique challenges facing {county.name} properties, 
                from {county.commonIssues.join(" to ")}.
              </p>
              
              <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Notable {county.name} Landmarks We Serve Near</h3>
              <ul className="grid grid-cols-2 gap-2">
                {county.landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-emerald-500">•</span> {landmark}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Common Issues in {county.name}</h3>
              <ul>
                {county.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-500">✓</span> {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title={`Need Restoration Services in ${county.name}?`}
            subtitle={`Our certified technicians respond within 60 minutes anywhere in ${county.name}. Call now for immediate assistance.`}
            showTimer={true}
          />
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">
            View all our{" "}
            <Link href="/locations" className="text-emerald-600 hover:underline font-semibold">
              service areas
            </Link>{" "}
            or{" "}
            <Link href="/services" className="text-emerald-600 hover:underline font-semibold">
              explore our services
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
