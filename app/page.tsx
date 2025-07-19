import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO, SERVICES, LOCATIONS, FAQ_GENERAL } from "./lib/constants";
import { EmergencyCTA, ComparisonCTA } from "./components/CTAComponents";
import FAQ from "./components/FAQ";

export default function Home() {
  const emergencyServices = SERVICES.filter(service => service.emergencyService);
  const regularServices = SERVICES.filter(service => !service.emergencyService);
  const popularLocations = LOCATIONS.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
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
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚨 24/7 Emergency Response Available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Emergency <span className="text-emerald-400">Water & Fire</span> Damage Restoration in <span className="text-yellow-300">Lansing, MI</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              IICRC Certified Technicians • 60 Minutes Response Time • Direct Insurance Billing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
              >
                📞 Call Now: {BUSINESS_INFO.phone}
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
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-slate-200">Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">60 Min</div>
                <div className="text-slate-200">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">100%</div>
                <div className="text-slate-200">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Trusted by Homeowners & Businesses</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {BUSINESS_INFO.certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-white px-4 py-2 rounded-lg shadow">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="font-semibold text-slate-700">{cert}</span>
                </div>
              ))}
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow">
                <span className="text-yellow-500 mr-2">⭐</span>
                <span className="font-semibold text-slate-700">5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Emergency Restoration Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When disaster strikes, every minute counts. Our certified technicians are ready 24/7 
              to minimize damage and begin the restoration process immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Emergency
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.icon} {service.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-emerald-600 font-semibold">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-slate-600">
              See the transformative power of professional restoration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/pc.ai_a_photo_that_shows_the_before_and_after_of_the_inside_of__444ee7c8-dbc4-4f0c-84a9-324e6b564590.png"
                  alt="Before and after fire damage restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Fire Damage Restoration</h3>
                <p className="text-slate-600">Complete restoration after kitchen fire in Lansing home</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/jota_03827_nterior_wall_with_visible_water_damage_and_mold_grow_4921e425-69ad-4659-a79e-8cee69b2af5f.png"
                  alt="Water damage restoration project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Water Damage Cleanup</h3>
                <p className="text-slate-600">Basement flooding restoration in Okemos residence</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/hawthornemg34_photograph_of_mild_to_medium_black_mold_in_the_co_58160721-d299-499c-93a1-081a42a754a7.png"
                  alt="Mold remediation before and after"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Mold Remediation</h3>
                <p className="text-slate-600">Complete mold removal in East Lansing property</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose M&M Restoration?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another restoration company. Here's what sets us apart from the competition.
            </p>
          </div>
          
          <ComparisonCTA />
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-slate-600">
              From emergency call to complete restoration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Emergency Call</h3>
              <p className="text-slate-600">
                Call our 24/7 hotline and speak with a certified restoration specialist immediately.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">60-Minute Response</h3>
              <p className="text-slate-600">
                Our certified technicians arrive on-site within 60 minutes to assess and begin mitigation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Professional Cleanup</h3>
              <p className="text-slate-600">
                We use professional-grade equipment to extract water, remove debris, and prevent further damage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Complete Restoration</h3>
              <p className="text-slate-600">
                We restore your property to pre-damage condition with a guarantee on all work performed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Real reviews from satisfied customers across the Greater Lansing Area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-700 mb-4 italic">
                "M&M Restoration saved our home after a burst pipe flooded our basement. They arrived within 45 minutes 
                and had everything dried out and restored perfectly. Professional, fast, and affordable!"
              </p>
              <div className="font-semibold text-slate-800">— Sarah M., Lansing</div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-700 mb-4 italic">
                "After our kitchen fire, we thought our house was ruined. M&M's team worked with our insurance 
                and restored everything to better than new condition. Can't recommend them enough!"
              </p>
              <div className="font-semibold text-slate-800">— Mike & Jennifer K., Okemos</div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-700 mb-4 italic">
                "Found mold in our bathroom and called M&M. They explained everything clearly, handled the 
                remediation professionally, and guaranteed their work. No mold issues since!"
              </p>
              <div className="font-semibold text-slate-800">— David L., East Lansing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Serving the Greater Lansing Area
            </h2>
            <p className="text-xl text-slate-600">
              Fast emergency response to all these communities and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="text-emerald-600 text-2xl mb-2">📍</div>
                <div className="font-semibold text-slate-800">{location.name}</div>
                <div className="text-sm text-slate-500">{location.state}</div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={FAQ_GENERAL} />

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title="Don't Let Damage Get Worse - Call Now!"
            subtitle="Every minute counts when dealing with water, fire, or storm damage. Our emergency response team is standing by 24/7."
          />
        </div>
      </section>
    </div>
  );
}