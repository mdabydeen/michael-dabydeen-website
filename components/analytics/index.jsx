import React from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'

export function Analytics() {
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    return (
      <GoogleAnalytics />
    )
  }

  return null
}