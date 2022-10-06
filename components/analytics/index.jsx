import React from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'

const isProduction = process.env.NODE_ENV === 'production'

export function Analytics() {
  if (isProduction) {
    return (
      <GoogleAnalytics />
    )
  }

  return null
}