'use client'

import React from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"

export default async function Dash({ userProfile }) {
    return (
        <Layout>
            <div className="px-4 py-8">
                <div className="h-[50vh] p-8 flex flex-row justify-between items-center">
                    <div>
                        <h1 className="text-9xl font-bold underline text-amber-400">--dash.</h1>
                        <h1 className="text-3xl font-bold text-amber-500">PH Dashboard</h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-16 ml-4 rounded-md border-2 border-solid border-neutral-200 font-bold ">
                            Register
                        </div>
                        <div className="p-16 ml-4 rounded-md border-2 border-solid border-neutral-200 font-bold ">
                            Sign in with Passport
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold underline">Users ↓</h1>
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
        </Layout>
    )
}