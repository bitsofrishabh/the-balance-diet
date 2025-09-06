'use client';

'use client';

import { useEffect } from 'react';

export function LocalSEO({ 
  businessName = "The Balance Diet",
  address = {
    streetAddress: "",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN"
  },
  phone = "+91-9149081034",
  email = "rishabhkec17@gmail.com",
  website = "https://thebalancediet.com",
  description = "Expert nutrition coaching and personalized weight loss programs in Delhi. Transform your health with science-based nutrition plans.",
  services = [
    "Weight Loss Programs",
    "Nutrition Coaching", 
    "PCOS Management",
    "Diabetes Diet Planning",
    "Thyroid Management",
    "Women's Health Nutrition"
  ],
  serviceArea = ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Greater Noida","Mumbai","Bangalore","Chennai","Hyderabad","Pune","Kolkata"],
  openingHours = [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-16:00"
  ],
  priceRange = "₹₹",
  rating = 4.9,
  reviewCount = 150
}) {
  
  useEffect(() => {
    // Create structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "NutritionistPractice",
      "name": businessName,
      "description": description,
      "url": website,
      "telephone": phone,
      "email": email,
      "priceRange": priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "openingHoursSpecification": openingHours.map(hours => {
        const [days, time] = hours.split(' ');
        const [open, close] = time.split('-');
        return {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": days.split('-').map(day => {
            const dayMap = {
              'Mo': 'Monday', 'Tu': 'Tuesday', 'We': 'Wednesday',
              'Th': 'Thursday', 'Fr': 'Friday', 'Sa': 'Saturday', 'Su': 'Sunday'
            };
            return dayMap[day];
          }),
          "opens": open,
          "closes": close
        };
      }),
      "areaServed": serviceArea.map(area => ({
        "@type": "City",
        "name": area
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nutrition Services",
        "itemListElement": services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service,
            "provider": {
              "@type": "Organization",
              "name": businessName
            }
          }
        }))
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/thebalancediet",
        "https://www.instagram.com/thebalancediet",
        "https://www.linkedin.com/company/thebalancediet"
      ]
    };

    // Add Organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": businessName,
      "url": website,
      "logo": `${website}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": phone,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      }
    };

    // Add WebSite structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": businessName,
      "url": website,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${website}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas do you serve in Delhi NCR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `We provide nutrition coaching services across ${serviceArea.join(', ')} and surrounding areas in Delhi NCR.`
          }
        },
        {
          "@type": "Question", 
          "name": "Do you offer online nutrition consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer both in-person and online nutrition consultations to serve clients across India."
          }
        },
        {
          "@type": "Question",
          "name": "What health conditions do you specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `We specialize in ${services.join(', ')} with personalized nutrition plans for each condition.`
          }
        }
      ]
    };

    // Insert structured data into page head
    const scripts = [
      { id: 'local-business-schema', data: structuredData },
      { id: 'organization-schema', data: organizationData },
      { id: 'website-schema', data: websiteData },
      { id: 'faq-schema', data: faqData }
    ];

    scripts.forEach(({ id, data }) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
}