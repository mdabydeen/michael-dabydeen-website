// Email Subscription API
// Author: Mike Dabydeen <mdabydeen@gmail.com> 

export default function handler(req, res) {

  // Only POST Method allowed
  if (req.method === 'POST') {

    const body = req.body

    try {
      if (!body || !body.email) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'No email submitted' })
      }

      // TODO: Implement db storage logic here. 

      // TODO: Send a verification email. 

      res.redirect(307, '/thank-you');

    } catch  (err) {
      res.status(500).send({ error: 'failed to update the email'})
    }
  }

}