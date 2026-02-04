import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICES, BLOG_POSTS } from "../lib/constants";

export const metadata: Metadata = {
  title: "Water Damage & Restoration Cost Guides | M&M Restoration Blog",
  description: "Learn about water damage restoration costs, mold remediation pricing, and insurance claims in Mid-Michigan. Expert guides from Lansing's trusted restoration professionals.",
  keywords: "water damage cost, mold removal cost, restoration pricing, Lansing MI, insurance claims, basement flooding",
  openGraph: {
    title: "Water Damage & Restoration Cost Guides | M&M Restoration Blog",
    description: "Expert cost guides and restoration tips from Mid-Michigan's trusted restoration professionals.",
    url: "https://m-mrestoration.com/blog",
  },
};

export default function BlogPage() {
  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-emerald-400 mb-4 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restoration Cost Guides & Expert Tips
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Real pricing, honest advice, and practical guides from our IICRC certified technicians. 
              Learn what restoration actually costs in Mid-Michigan.
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <span 
                  key={category}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-800 to-emerald-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="text-6xl opacity-30">📊</span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Free Estimate?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Get real pricing for your specific situation. We provide free assessments 
              and work directly with your insurance company.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Explore Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {SERVICES.slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {service.icon} {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
