import { clearCookies } from "../lib/actions";
import { cookies } from "next/headers";
import Script from "next/script";

import HomePage from './home-page';
import LoginPage from './login-page';
import SignInPage from "./auth/page";

import prisma from '../lib/prisma';
 
async function getPosts() {
  const res = await fetch('https://...');
  const posts = await res.json();
  return posts;
}

async function getProfile() {
    const userProfile = await prisma.userProfile.findMany({
        //where: { userId: 2 },
        include: {
          badges: true,
        },
    });
    return userProfile;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const userProfile = await getProfile()

  // Forward fetched data to your Client Component
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        type='module'
        src='https://unpkg.com/@google/model-viewer@^3.4.0/dist/model-viewer.min.js'
      />
      <HomePage userProfile={userProfile} />
    </>
  )
}

/*export default function Home() {
  const accessToken = cookies().get("phIdAccessToken")?.value;
  const tokenType = cookies().get("phIdTokenType")?.value;
  const expiresIn = cookies().get("phIdExpiresIn")?.value;
  const scopes = cookies().get("phIdScopes")?.value;

  const authObject = {
    accessToken,
    tokenType,
    expiresIn,
    scopes,
  };

  if (accessToken) {
    return (
      <main className="flex min-h-screen flex-col gap-4 items-center p-24">
        <h1 className="text-2xl font-bold">You&apos;re authenticated!</h1>
        <pre>{JSON.stringify(authObject, null, 2)}</pre>
        <form action={clearCookies}>
          <button className="border-2 rounded p-2 font-bold">Sign out</button>
        </form>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <a
          href="https://id.purduehackers.com/api/authorize?client_id=dashboard&response_type=code"
          className="border-2 rounded p-2 font-bold"
        >
          Sign in with passport
        </a>
      </main>
    );
  }
}*/