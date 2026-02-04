import { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS, KEYWORD_VARIATIONS, COST_DATA, COUNTIES, BLOG_POSTS } from './lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://m-mrestoration.com'

  // Get current date for lastModified
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Location pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Service + Location combination pages
  const serviceLocationPages: MetadataRoute.Sitemap = []
  SERVICES.forEach((service) => {
    LOCATIONS.forEach((location) => {
      serviceLocationPages.push({
        url: `${baseUrl}/services/${service.slug}/${location.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  // Keyword variation pages (water-damage-repair, mold-removal, etc.)
  const keywordVariationPages: MetadataRoute.Sitemap = Object.keys(KEYWORD_VARIATIONS).map((variation) => ({
    url: `${baseUrl}/${variation}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Cost/pricing pages
  const costPages: MetadataRoute.Sitemap = Object.keys(COST_DATA).map((service) => ({
    url: `${baseUrl}/cost-of/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cost + Location pages
  const costLocationPages: MetadataRoute.Sitemap = []
  Object.keys(COST_DATA).forEach((service) => {
    LOCATIONS.forEach((location) => {
      costLocationPages.push({
        url: `${baseUrl}/cost-of/${service}/${location.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  // County pages
  const countyPages: MetadataRoute.Sitemap = COUNTIES.map((county) => ({
    url: `${baseUrl}/county/${county.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog listing page
  const blogListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
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
    ...blogListingPage,
    ...blogPostPages,
  ]
}
