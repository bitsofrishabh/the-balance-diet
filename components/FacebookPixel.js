'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'
import * as fpixel from '../lib/fpixel'

const FacebookPixel = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!fpixel.FB_PIXEL_ID) {
        console.warn("Facebook Pixel ID is not set. Tracking is disabled.");
        return;
    }
    fpixel.pageview()
  }, [pathname, searchParams])

  if (!fpixel.FB_PIXEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fpixel.FB_PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fpixel.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

export default FacebookPixel
