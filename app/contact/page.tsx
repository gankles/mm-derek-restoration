import type { Metadata } from "next";
import { BUSINESS_INFO } from "../lib/constants";
import { EmergencyCTA, ContactOptionsSection } from "../components/CTAComponents";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact M&M Restoration | Emergency Restoration Services in Lansing, MI",
  description: "Need emergency restoration services? Contact M&M Restoration 24/7 at (616) 648-7775. Fast response times, free estimates, and direct insurance billing in the Greater Lansing Area.",
  keywords: "contact restoration services Lansing MI, emergency restoration contact, water damage emergency, fire damage emergency, restoration company phone number",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact M&M Restoration | Emergency Restoration Services in Lansing, MI",
    description: "Need emergency restoration services? Contact M&M Restoration 24/7 at (616) 648-7775. Fast response times, free estimates, and direct insurance billing.",
  },
};

export default function ContactPage() {
  const contactFAQs = [
    {
      question: "How quickly can you respond to an emergency?",
      answer: "We provide 24/7 emergency response and typically arrive on-site within 60 minutes or less throughout the Greater Lansing Area. Our rapid response helps minimize damage and reduces overall restoration costs."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all restoration services. Our certified technicians will assess the damage and provide you with a detailed written estimate at no cost."
    },
    {
      question: "Do you work directly with insurance companies?",
      answer: "Absolutely. We work with all major insurance companies and can handle the entire claims process for you. We'll communicate directly with your adjuster and help ensure you get the maximum coverage for your claim."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Greater Lansing Area including Lansing, East Lansing, Okemos, Haslett, Holt, Mason, Grand Ledge, and all surrounding communities within a 50-mile radius."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('/images/restoration-team-hero.png')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚨 Emergency? Call Now for Immediate Help!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-emerald-300">M&M Restoration</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              24/7 Emergency Response • Free Estimates • Direct Insurance Billing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">📞</div>
                <div className="text-lg font-semibold mb-2">Call Now</div>
                <div className="text-emerald-300 text-xl font-bold">{BUSINESS_INFO.phone}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-lg font-semibold mb-2">Response Time</div>
                <div className="text-emerald-300 text-xl font-bold">60 Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🕒</div>
                <div className="text-lg font-semibold mb-2">Availability</div>
                <div className="text-emerald-300 text-xl font-bold">24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Emergency Restoration Services</h2>
            <p className="text-xl mb-8 text-red-100">
              Water, fire, storm, or mold damage? Don&apos;t wait - every minute counts!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors shadow-lg"
              >
                📞 {BUSINESS_INFO.phone}
              </a>
              <div className="text-center">
                <div className="text-amber-400 font-bold text-xl">⚡ Emergency Response</div>
                <div className="text-red-100">Available 24/7 - 365 Days a Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h2>
              
              {/* Business Info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600 mb-1">
                      <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="text-sm text-slate-500">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Service Area</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.serviceArea}</p>
                    <p className="text-sm text-slate-500">50-mile radius coverage</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Certifications</h3>
                    <div className="space-y-1">
                      {BUSINESS_INFO.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-emerald-500 mr-2">✓</span>
                          <span className="text-slate-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">💧</span>
                    <span>Water Damage Restoration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">🔥</span>
                    <span>Fire Damage Cleanup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">🦠</span>
                    <span>Mold Remediation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">⛈️</span>
                    <span>Storm Damage Repair</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">⚠️</span>
                    <span>Biohazard Cleanup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">🧽</span>
                    <span>Professional Cleaning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Request Free Estimate</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Homeowners Choose M&M Restoration</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When disaster strikes, you need a restoration company you can trust. Here&apos;s why thousands of 
              homeowners and businesses in the Greater Lansing Area choose us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Rapid Response</h3>
              <p className="text-slate-600">
                We arrive within 60 minutes or less for emergency situations. Our quick response 
                helps minimize damage and reduces overall restoration costs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">IICRC Certified</h3>
              <p className="text-slate-600">
                Our technicians are certified by the Institute of Inspection, Cleaning and 
                Restoration Certification, ensuring professional-grade service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Insurance Direct</h3>
              <p className="text-slate-600">
                We work directly with your insurance company, handling all paperwork and 
                communication to maximize your claim coverage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Advanced Equipment</h3>
              <p className="text-slate-600">
                We use state-of-the-art equipment including industrial dehumidifiers, 
                air movers, and moisture detection technology.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Satisfaction Guarantee</h3>
              <p className="text-slate-600">
                We guarantee our work and stand behind every restoration project with 
                our comprehensive satisfaction guarantee.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-emerald-600 text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Reviews</h3>
              <p className="text-slate-600">
                Consistently rated 5 stars by our customers for professionalism, 
                quality work, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactOptionsSection />

      {/* Contact FAQ */}
      <FAQ faqs={contactFAQs} title="Contact & Service Questions" />

      {/* Final Emergency CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title="Ready to Restore Your Property?"
            subtitle="Don't wait for damage to get worse. Contact our certified restoration specialists now for immediate help."
          />
        </div>
      </section>
    </div>
  );
}