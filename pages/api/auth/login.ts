import { NextApiRequest, NextApiResponse } from 'next'
//import { signIn } from '@/auth'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body
 
  try {
    // Redirect client to url if form successfully submitted
    //await handleFormInputAsync({ name, message })
    const AUTH_TYPE = 'code'
    const CLIENT_ID = 'dashboard'
    res.redirect(307, `https://id.purduehackers.com/api/authorize`
        + `?response_type=${AUTH_TYPE}&client_id=${CLIENT_ID}`)

    
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}

/*export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //const { email, password } = req.body
    //await signIn('credentials', { email, password })
 
    res.status(200).json({ success: true })
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}*/