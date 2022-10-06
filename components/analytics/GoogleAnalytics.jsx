import Script from 'next/script'
import React from 'react'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function logEvent(action, category, label, value) {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
