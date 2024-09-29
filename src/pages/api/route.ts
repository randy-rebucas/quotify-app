import { getSession } from '@/actions/session'
import { fetchUserById } from '@/lib/data'
import { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession()
 
  // Check if the user is authenticated
  if (!session) {
    res.status(401).json({
      error: 'User is not authenticated',
    })
    return
  }
}