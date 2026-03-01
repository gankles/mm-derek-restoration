import { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS, KEYWORD_VARIATIONS, COST_DATA, COUNTIES, BLOG_POSTS } from './lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://m-mrestoration.com'

  // Use stable dates to avoid signaling artificial freshness on every crawl.
  // Update these when actual content changes are deployed.
  const siteLastUpdated = new Date('2026-02-19') // Last deployment date
  const contentLastUpdated = new Date('2026-02-10') // Last content generation date

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Location pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Service + Location combination pages
  const serviceLocationPages: MetadataRoute.Sitemap = []
  SERVICES.forEach((service) => {
    LOCATIONS.forEach((location) => {
      serviceLocationPages.push({
        url: `${baseUrl}/services/${service.slug}/${location.slug}`,
        lastModified: contentLastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  // Keyword variation pages (water-damage-repair, mold-removal, etc.)
  const keywordVariationPages: MetadataRoute.Sitemap = Object.keys(KEYWORD_VARIATIONS).map((variation) => ({
    url: `${baseUrl}/${variation}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Cost/pricing pages
  const costPages: MetadataRoute.Sitemap = Object.keys(COST_DATA).map((service) => ({
    url: `${baseUrl}/cost-of/${service}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cost + Location pages
  const costLocationPages: MetadataRoute.Sitemap = []
  Object.keys(COST_DATA).forEach((service) => {
    LOCATIONS.forEach((location) => {
      costLocationPages.push({
        url: `${baseUrl}/cost-of/${service}/${location.slug}`,
        lastModified: contentLastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  // County pages
  const countyPages: MetadataRoute.Sitemap = COUNTIES.map((county) => ({
    url: `${baseUrl}/county/${county.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // New hub pages (FAQ, Commercial, Calculator)
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/faq`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/restoration-cost-calculator`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Commercial industry pages
  const commercialIndustryPages: MetadataRoute.Sitemap = [
    'restaurants',
    'property-management',
    'schools-education',
    'churches-nonprofits',
  ].map((industry) => ({
    url: `${baseUrl}/commercial/${industry}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog listing page
  const blogListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Individual blog post pages
  const blogPostPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
    ...keywordVariationPages,
    ...costPages,
    ...costLocationPages,
    ...countyPages,
    ...hubPages,
    ...commercialIndustryPages,
    ...blogListingPage,
    ...blogPostPages,
  ]
}
