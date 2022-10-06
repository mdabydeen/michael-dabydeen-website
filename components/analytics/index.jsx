import React from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'

export function Analytics() {
  if (process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    return (
      <GoogleAnalytics />
    )
  }

  return null
}