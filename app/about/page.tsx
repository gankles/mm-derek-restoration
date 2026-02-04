import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";
import { EmergencyCTA } from "../components/CTAComponents";

export const metadata: Metadata = {
  title: "About M&M Restoration | Trusted Restoration Experts in Lansing, MI Since 2015",
  description: "Learn about M&M Restoration - IICRC certified restoration experts serving the Greater Lansing Area since 2015. Family-owned, 25+ technicians, 2,800+ projects completed. Call (616) 648-7775.",
  keywords: "about M&M Restoration, restoration company Lansing MI, IICRC certified restoration, family owned restoration company Michigan",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About M&M Restoration | Trusted Restoration Experts Since 2015",
    description: "Family-owned restoration company serving Greater Lansing since 2015. IICRC certified, 2,800+ projects completed.",
  },
};

export default function AboutPage() {
  const milestones = [
    { year: 2015, event: "M&M Restoration founded in Holt, Michigan" },
    { year: 2016, event: "Achieved IICRC certification for all technicians" },
    { year: 2017, event: "Expanded service area to cover all of Ingham County" },
    { year: 2018, event: "Added mold remediation and biohazard services" },
    { year: 2019, event: "Reached 1,000 completed restoration projects" },
    { year: 2020, event: "Expanded team to 20+ certified technicians" },
    { year: 2021, event: "Extended coverage to Eaton and Clinton Counties" },
    { year: 2022, event: "Achieved A+ BBB Rating" },
    { year: 2023, event: "Completed 2,500th restoration project" },
    { year: 2024, event: "Expanded to 25+ team members serving 28 communities" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/restoration-team-hero.png')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-emerald-300">M&M Restoration</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Family-Owned. Community-Focused. Restoration Experts Since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                M&M Restoration was founded in 2015 with a simple mission: to help our neighbors 
                recover from life&apos;s unexpected disasters. What started as a small team operating 
                out of Holt, Michigan has grown into the Greater Lansing Area&apos;s most trusted 
                restoration company.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We understand that when water floods your basement at 2 AM or fire damages your 
                home, you need more than just a contractor - you need a partner who treats your 
                property like their own. That&apos;s why every member of our team is trained not just 
                in restoration techniques, but in compassionate customer service.
              </p>
              <p className="text-lg text-slate-600">
                Today, we&apos;ve completed over {BUSINESS_INFO.projectsCompleted.toLocaleString()} restoration 
                projects across 28 communities in the Greater Lansing Area. Our {BUSINESS_INFO.employeeCount}+ 
                certified technicians are available 24/7 to respond to emergencies within 60 minutes.
              </p>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/restoration-team-hero.png"
                alt="M&M Restoration team members ready to serve the Greater Lansing community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{new Date().getFullYear() - BUSINESS_INFO.foundedYear}+</div>
              <div className="text-emerald-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BUSINESS_INFO.projectsCompleted.toLocaleString()}+</div>
              <div className="text-emerald-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BUSINESS_INFO.employeeCount}+</div>
              <div className="text-emerald-100">Certified Technicians</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">28</div>
              <div className="text-emerald-100">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do, from emergency response to final restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Rapid Response</h3>
              <p className="text-slate-600">
                We understand that every minute counts during an emergency. Our 60-minute response 
                guarantee ensures we&apos;re there when you need us most.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Professional Excellence</h3>
              <p className="text-slate-600">
                Every technician is IICRC certified and receives ongoing training in the latest 
                restoration techniques and equipment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Compassionate Service</h3>
              <p className="text-slate-600">
                We treat every customer like family. Disasters are stressful - we&apos;re here to make 
                the restoration process as smooth as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Honest Communication</h3>
              <p className="text-slate-600">
                We provide clear, upfront pricing and keep you informed throughout the entire 
                restoration process. No surprises, no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quality Workmanship</h3>
              <p className="text-slate-600">
                We don&apos;t cut corners. Our goal is to restore your property to pre-damage condition - 
                or better. We guarantee our work.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Community Focus</h3>
              <p className="text-slate-600">
                We live and work in the communities we serve. Supporting our neighbors through 
                difficult times is more than a job - it&apos;s our purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">
              From humble beginnings to the Greater Lansing Area&apos;s trusted restoration experts
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 bg-emerald-200 flex-1 mt-2"></div>
                  )}
                </div>
                <div className="bg-slate-50 rounded-lg p-4 flex-1">
                  <p className="text-slate-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {BUSINESS_INFO.certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-emerald-600 text-3xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-slate-800">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Visit Our Office</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-800 mb-4">Office Location</h3>
                <div className="space-y-2 text-slate-600">
                  <p className="font-semibold text-lg">{BUSINESS_INFO.name}</p>
                  <p>1542 Huntshire Dr</p>
                  <p>Holt, MI 48842</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-2 text-slate-600">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-emerald-600 hover:text-emerald-700">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-emerald-600 hover:text-emerald-700">
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                  <p><span className="font-semibold">Hours:</span> {BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EmergencyCTA 
            title="Ready to Work with the Best?"
            subtitle="Join the thousands of Greater Lansing residents who trust M&M Restoration for their restoration needs."
          />
        </div>
      </section>
    </div>
  );
}
