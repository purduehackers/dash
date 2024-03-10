'use client'

import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Profile, { ProfileProps } from "../components/Profile"

/*export const getStaticProps: GetStaticProps = async () => {
  const userProfile = await prisma.userProfile.findMany({
    where: { userId: 0 },
    include: {
      badges: true,
    },
  })
  return { 
    props: { userProfile }, 
    revalidate: 10 
  }
}*/


/*export const getProfile = async () => {
    const userProfile = await prisma.userProfile.findMany({
        where: { userId: 0 },
        include: {
          badges: true,
        },
    })
    return userProfile
}*/

/*type Props = {
  userProfile: ProfileProps[],
}*/

export default async function Dash({ userProfile }) {
    //const userProfile = await getProfile()
    return (
        <Layout>
            <div className="page">
                <h1 className="text-3xl font-bold underline text-amber-500">PH Dashboard</h1>
                <main>
                {
                    //<Profile profile={props.userProfile[0]} />
                }
                {userProfile.map((prof) => (
                    <div key={prof.userId} className="post">
                    <Profile profile={prof} />
                    </div>
                ))}
                </main>
            </div>
            <style jsx>{`
                .post {
                background: white;
                transition: box-shadow 0.1s ease-in;
                box-shadow: 5px 5px 0 black;
                }

                .post + .post {
                margin-top: 2rem;
                }
            `}</style>
        </Layout>
    )
}