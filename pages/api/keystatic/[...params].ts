import { makeAPIRouteHandler } from '@keystatic/next/api'
import type { NextApiRequest, NextApiResponse } from 'next'

import config from '../../../keystatic.config'

function isMissingProductionConfig(error: unknown) {
  return error instanceof Error && error.message.includes('Missing required config in Keystatic API setup')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const hasProductionConfig = Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
      process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
      process.env.KEYSTATIC_SECRET,
  )

  if (process.env.NODE_ENV === 'production' && !hasProductionConfig) {
    res.setHeader('Cache-Control', 'no-store')
    res.status(503).json({
      error: 'The production CMS is awaiting its GitHub OAuth configuration.',
    })
    return
  }

  try {
    const apiHandler = makeAPIRouteHandler({ config })
    await apiHandler(req, res)
  } catch (error) {
    if (process.env.NODE_ENV === 'production' && !res.headersSent && isMissingProductionConfig(error)) {
      res.setHeader('Cache-Control', 'no-store')
      res.status(503).json({
        error: 'The production CMS is awaiting its GitHub OAuth configuration.',
      })
      return
    }

    throw error
  }
}
