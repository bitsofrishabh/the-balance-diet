export default function sitemap() {
  const baseUrl = 'https://thebalancediet.com';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/services', 
    '/success-stories',
    '/blog',
    '/recipes',
    '/health-tools',
    '/ebook',
    '/webinar',
    '/programs'
  ];

  // Location-specific pages for local SEO
  const locations = [
    'delhi',
    'gurgaon', 
    'noida',
    'faridabad'
  ];

  const services = [
    'weight-loss',
    'pcos-management',
    'diabetes-diet',
    'thyroid-management',
    'nutrition-coaching'
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Location-based pages for local SEO
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/nutritionist-${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Service-based pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly', 
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages
  ];
}