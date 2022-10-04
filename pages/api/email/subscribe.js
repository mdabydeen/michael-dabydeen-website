// Email Subscription API
// Author: Mike Dabydeen <mdabydeen@gmail.com> 

export default function handler(req, res) {

  // Only POST Method allowed
  if (req.method === 'POST') {

    const body = req.body

    // console.log(body)

    try {
      if (!body.email) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ error: 'No email submitted' })
      }

      // TODO: Implement db storage logic here. 

      // TODO: Send a verification email. 

      //res.redirect(307, '/thank-you');
      return res.status(200).json({ data: 'Email submitted success' })


    } catch  (err) {
      res.status(500).send({ error: 'failed to update the email'})
    }
  }

}