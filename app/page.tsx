import { clearCookies } from "../lib/actions";
import { cookies } from "next/headers";
import Script from "next/script";

import HomePage from './home-page';
import LoginPage from './login-page';
import SignInPage from "./auth/page";

import prisma from '../lib/prisma';
 
/*async function getPosts() {
  const res = await fetch('https://...');
  const posts = await res.json();
  return posts;
}*/

async function getProfile() {
    const userProfile = await prisma.userProfile.findMany({
        //where: { userId: 2 },
        include: {
          badges: true,
        },
    });
    return userProfile;
}

async function getBadges() {
  const badges = await prisma.badge.findMany({
      //where: { userId: 2 },
      include: {
      },
  });
  return badges;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const userProfile = await getProfile()
  const badges = await getBadges()

  // Forward fetched data to your Client Component
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        type='module'
        src='https://unpkg.com/@google/model-viewer@^3.4.0/dist/model-viewer.min.js'
      />
      <HomePage userProfile={userProfile} badges={badges} />
    </>
  )
}