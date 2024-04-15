'use client'

import React from "react"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Layout from "../components/Layout"
import Profile from "../components/Profile"

export default async function Dash({ userProfile }) {
    const router = useRouter();
    return (
        <Layout>
            <div className="px-4 py-8">
                <div className="h-[50vh] p-8 flex flex-row justify-between items-center">
                    <div>
                        <h1 className="text-9xl font-bold underline text-amber-400">--dash.</h1>
                        <h1 className="text-3xl font-bold text-amber-500">PH Dashboard</h1>
                    </div>
                    <div className="flex flex-row">
                        <Link href="/auth">
                            <button className="p-16 ml-4 font-bold btn-outline
                                            hover:text-indigo-100 hover:border-indigo-400 hover:bg-dark">
                                Sign in with Passport
                            </button>
                        </Link>
                        <Link href="https://passport-data-pages.vercel.app/" target="_blank">
                            <button className="p-16 ml-4 font-bold btn-inverse hover:bg-indigo-700">
                                Become a Citizen
                            </button>
                        </Link>
                    </div>
                </div>
                <h1 className="text-2xl font-bold underline">Users ↓</h1>
                <main>
                {
                    //<Profile profile={props.userProfile[0]} />
                }
                {userProfile.map((prof) => (
                    <div onClick={() => router.push(`/profile/${prof.userId}`)}
                            key={prof.userId} 
                            className="p-4 my-4 rounded-md flex flex-row justify-between items-center
                                border-2 border-solid border-neutral-200">
                        <h2 className="text-lg text-amber-400 font-bold">{prof.name} {prof.surname}</h2>
                        <p>Level: {prof.level}</p>
                        <p>{prof.badges.length} Badges</p>
                        <button className="spray-btn bg-indigo-600 btn1">
                            View Profile
                        </button>
                    </div>
                ))}
                </main>
            </div>
        </Layout>
    )
}