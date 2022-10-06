import React from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'

export function Analytics() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <GoogleAnalytics />
    )
  }

  return null
}