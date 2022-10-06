import React from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'

const isProduction = process.node.NODE_ENV === 'production'

export function index() {
  if (isProduction) {
    return (
      <GoogleAnalytics />
    )
  }

  return null
}