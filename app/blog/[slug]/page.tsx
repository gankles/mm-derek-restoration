import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, BLOG_POSTS } from "../../lib/constants";
import { buildSEOTitle } from "../../lib/utils";
import FAQ from "../../components/FAQ";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  
  if (!post) {
    return {};
  }

  const fullTitle = buildSEOTitle([
    post.title,
    `Expert Guide for Mid-Michigan Homeowners`,
    `Free Estimates Available`,
    `M&M Restoration`,
  ]);

  return {
    title: fullTitle,
    description: post.excerpt,
    keywords: `${post.category}, ${post.relatedServices.join(", ")}, Lansing MI, Mid-Michigan`,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [post.image],
    },
  };
}

function renderContent(content: string[]) {
  return content.map((block, index) => {
    if (block.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          {block.replace("# ", "")}
        </h1>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-bold text-slate-800 mt-8 mb-3">
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("|")) {
      const rows = block.split("\n").filter(row => row.trim());
      const headerRow = rows[0];
      const dataRows = rows.slice(2);
      
      const headers = headerRow.split("|").filter(cell => cell.trim()).map(cell => cell.trim());
      
      return (
        <div key={index} className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-emerald-50">
              <tr>
                {headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b border-slate-200">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, rowIndex) => {
                const cells = row.split("|").filter(cell => cell.trim()).map(cell => cell.trim());
                return (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    {cells.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-sm text-slate-600 border-b border-slate-100">
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith("- **") || block.startsWith("- ")) {
      const items = block.split("\n").filter(item => item.trim().startsWith("- "));
      return (
        <ul key={index} className="list-disc list-outside ml-6 my-4 space-y-2">
          {items.map((item, i) => {
            const text = item.replace(/^- /, "");
            return (
              <li key={i} className="text-slate-700" dangerouslySetInnerHTML={{ 
                __html: text
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900">$1</strong>')
              }} />
            );
          })}
        </ul>
      );
    }
    if (block.startsWith("**") && block.includes(":**")) {
      return (
        <p key={index} className="my-4 text-slate-700" dangerouslySetInnerHTML={{
          __html: block
            .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900">$1</strong>')
        }} />
      );
    }
    return (
      <p key={index} className="my-4 text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{
        __html: block
          .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900">$1</strong>')
          .replace(/\"([^"]+)\"/g, '"$1"')
      }} />
    );
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== params.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://m-mrestoration.com${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Owner & Lead Restoration Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "M&M Restoration"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "M&M Restoration",
      "logo": {
        "@type": "ImageObject",
        "url": "https://m-mrestoration.com/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://m-mrestoration.com/blog/${post.slug}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://m-mrestoration.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://m-mrestoration.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://m-mrestoration.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-2 text-emerald-400 mb-6 text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <span>/</span>
                <span className="text-white truncate">{post.title}</span>
              </nav>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                    <div>Owner & Lead Restoration Specialist</div>
                  </div>
                </div>
                <span className="text-slate-500">|</span>
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
              </div>
            </div>
          </div>
        </section>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              <div className="mt-12 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">About the Author</h3>
                    <p className="font-medium text-emerald-700">{post.author}</p>
                    <p className="text-slate-600 text-sm mt-2">
                      Derek is the owner of M&M Restoration and has over 10 years of experience in property restoration. 
                      He&apos;s IICRC certified and has personally overseen more than 2,800 restoration projects in the Greater Lansing area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {post.faqs.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <FAQ faqs={post.faqs} />
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherPosts.map(otherPost => (
                  <Link
                    key={otherPost.slug}
                    href={`/blog/${otherPost.slug}`}
                    className="group bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-32 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📄</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded">
                          {otherPost.category}
                        </span>
                        <span className="text-slate-400 text-xs">{otherPost.readTime}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {otherPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re dealing with an emergency or planning ahead, we&apos;re here to help. 
              Contact us for a free assessment.
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
        </section>
      </div>
    </>
  );
}
