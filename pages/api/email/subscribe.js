// No subscription is recorded until a newsletter provider is configured.
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Use POST for this endpoint.' })
  }
  return res.status(503).json({
    error: 'Newsletter signup is unavailable. No subscription was created. The free review kit is available at /projects.',
  })
}
