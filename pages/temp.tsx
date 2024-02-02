

import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Profile, { ProfileProps } from "../components/Profile"

import prisma from '../lib/prisma'
//import { UserProfile } from "@prisma/client"

export const getStaticProps: GetStaticProps = async () => {
  const userProfile = await prisma.userProfile.findMany({
    where: { roleId: 2 },
    include: {
      badges: true
    }
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
          {props.userProfile.map((post) => (
            <div key={post.userId} className="post">
              <Profile profile={post} />
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