import HomePage from './home-page'
import LoginPage from './login-page'

import prisma from '../lib/prisma'
 
async function getPosts() {
  const res = await fetch('https://...')
  const posts = await res.json()
  return posts
}

async function getProfile() {
    const userProfile = await prisma.userProfile.findMany({
        where: { userId: 0 },
        include: {
          badges: true,
        },
    })
    return userProfile
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const userProfile = await getProfile()

  // Forward fetched data to your Client Component
  return <HomePage userProfile={userProfile} />
  return <LoginPage />
}