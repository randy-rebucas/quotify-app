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
 
  // Check if the user has the 'admin' role
  const user = await fetchUserById(session?.userId);
  if (user.roles.some((role: string) => role === 'user')) {
    res.status(401).json({
      error: 'Unauthorized access: User does not have admin privileges.',
    })
    return
  }
 
  // Proceed with the route for authorized users
  // ... implementation of the API Route
}