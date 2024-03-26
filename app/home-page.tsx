'use client'

import React from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"

export default async function Dash({ userProfile }) {
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
                    box-shadow: 5px 5px 0 rgb(100, 100, 100);
                }

                .post + .post {
                margin-top: 2rem;
                }
            `}</style>
        </Layout>
    )
}