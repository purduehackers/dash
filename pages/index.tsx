

import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Profile, { ProfileProps } from "../components/Profile"

import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
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
}

type Props = {
  userProfile: ProfileProps[],
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>PH Dashboard</h1>
        <main>
          {
            //<Profile profile={props.userProfile[0]} />
          }
          {props.userProfile.map((prof) => (
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
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog