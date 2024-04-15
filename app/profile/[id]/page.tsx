import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../../../components/Layout"
import { PostProps } from "../../../components/Post"

import prisma from "../../../lib/prisma";
import Profile from "../../../components/Profile";

async function getProfile(id) {
  const userProfile = await prisma.userProfile.findMany({
      where: { userId: parseInt(id) },
      include: {
        badges: true,
      },
  });
  return userProfile;
}

export default async function Page({ params }: { params: { id: string } }) {
  // Fetch data directly in a Server Component
  const userProfile = await getProfile(params.id)

  return (
    <Layout>
      {userProfile.map((prof) => (
        <Profile key={prof.userId} profile={prof}/>
      ))}
    </Layout>
  )
}