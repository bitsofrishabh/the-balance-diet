import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LocalSEO } from '@/components/LocalSEO';
import { MicrodataNAP } from '@/components/NAP';
import Script from 'next/script';
import { FacebookPixel } from '@/components/FacebookPixel';

const GA_ID = 'G-6FNNY5RCC4';

export const metadata = {
  title: {
    default: 'The Balance Diet - Top Nutritionist in Delhi NCR | Weight Loss Expert',
    template: '%s | The Balance Diet'
  },
  description: 'Leading nutritionist in Delhi, Gurgaon, Noida & Faridabad. Expert weight loss coaching, PCOS management, diabetes diet planning. 300+ successful transformations. Book consultation today!',
  keywords: 'nutritionist Delhi, weight loss coach Delhi NCR, dietitian Gurgaon, PCOS diet plan, diabetes nutritionist, thyroid diet expert, nutrition consultant Noida, health coach Faridabad',
  authors: [{ name: 'The Balance Diet Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebalancediet.com',
    siteName: 'The Balance Diet',
    title: 'The Balance Diet - Top Nutritionist in Delhi NCR | Weight Loss Expert',
    description: 'Leading nutritionist in Delhi, Gurgaon, Noida & Faridabad. Expert weight loss coaching, PCOS management, diabetes diet planning. 300+ successful transformations.',
    images: [
      {
        url: 'https://thebalancediet.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Balance Diet - Nutritionist in Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Balance Diet - Top Nutritionist in Delhi NCR',
    description: 'Leading nutritionist in Delhi, Gurgaon, Noida & Faridabad. Expert weight loss coaching, PCOS management, diabetes diet planning.',
    images: ['https://thebalancediet.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://thebalancediet.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema - Critical for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://thebalancediet.com/#business",
              "name": "The Balance Diet",
              "description": "Leading nutritionist in Delhi NCR providing personalized weight loss programs, PCOS management, and diabetes diet planning.",
              "url": "https://thebalancediet.com",
              "telephone": "+91-9149081034",
              "email": "rishabhkec17@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "areaServed": [
                { "@type": "City", "name": "Delhi" },
                { "@type": "City", "name": "Gurgaon" },
                { "@type": "City", "name": "Noida" },
                { "@type": "City", "name": "Faridabad" }
              ],
              "priceRange": "₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            })
          }}
        />

      </head>
      <body>
         <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <LocalSEO />
        <FacebookPixel />
        <MicrodataNAP />
        <Navigation />
        <main className="min-h-screen mt-1">
          {children}
        </main>
        <Footer />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t6hsgabs1s");
            `,
          }}
        />

      </body>
    </html>
  );
}