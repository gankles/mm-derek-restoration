import { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS } from './lib/constants'

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

  // Combine all pages
  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
  ]
}
