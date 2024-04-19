'use client';

import React from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Badge from "../components/Badge";

export default async function Dash({ userProfile, badges }) {
    const router = useRouter();
    return (
        <Layout>
            <div className="px-4 py-8">
                <div className="h-[85vh] p-8 flex flex-row justify-between items-center border-solid border-white">
                    <div className="h-full flex flex-col justify-end items-start">
                        <div className="my-4">
                            <h1 className="text-[9rem] leading-tight font-bold underline text-amber-400">--dash.</h1>
                            <h1 className="text-4xl font-bold text-amber-500">PH Dashboard</h1>
                        </div>
                        <div className="w-full flex flex-row justify-start">
                            <Link href="/auth">
                                <button className="px-8 py-4 my-4 rounded-md flex flex-row justify-between items-center
                                        border-2 border-solid border-white spray-btn
                                        transition duration-200 ease-in-out font-bold 
                                        shadow-blocks-md shadow-indigo-500 hover:bg-white hover:text-dark">
                                    <span className="text-lg font-bold">Sign in with&nbsp;</span>
                                    <span className="text-lg text-amber-400 font-bold">Passport</span>
                                </button>
                            </Link>
                            <Link href="https://passport-data-pages.vercel.app/" target="_blank">
                                <button className="px-8 py-4 my-4 ml-8 rounded-md flex flex-row justify-between items-center
                                        border-2 border-solid border-white spray-btn
                                        transition duration-200 ease-in-out font-bold 
                                        shadow-blocks-md shadow-indigo-500 hover:bg-white hover:text-dark">
                                    <span className="text-lg font-bold">Become a&nbsp;</span>
                                    <span className="text-lg text-amber-400 font-bold">Citizen</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row relative top-20">
                        <model-viewer className="badge-model"
                            src={'/assets/hackers-logo.glb'}
                            alt="Badge" with-credentials
                            interaction-prompt="none" 
                            camera-controls disable-pan disable-tap disable-zoom
                            rotation-per-second="15deg" 
                            camera-orbit="calc(45deg + env(window-scroll-y) * 12rad) calc(60deg + env(window-scroll-y) * 9rad) calc(16m - env(window-scroll-y) * .5m)"
                            max-camera-orbit="auto 115deg 0"
                            min-camera-orbit="auto 45deg 0"
                            shadow-intensity="1"
                            environment-image="legacy"
                            tone-mapping="neutral"
                            ios-src={'/assets/hackers-logo.glb'}></model-viewer>
                    </div>
                </div>
                <div className="my-8 w-full">
                    <h1 className="text-2xl font-bold underline">Users ↓</h1>
                    <main>
                    {
                        //<Profile profile={props.userProfile[0]} />
                    }
                    {userProfile.map((prof) => (
                        <div onClick={() => router.push(`/profile/${prof.userId}`)}
                                key={prof.userId} 
                                className="p-4 my-4 rounded-md flex flex-row justify-between items-center
                                    border-2 border-solid border-neutral-200 cursor-pointer
                                    transition duration-200 ease-in-out hover:scale-[.98]
                                    hover:text-indigo-100 hover:border-indigo-400 hover:bg-dark">
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
                <h1 className="text-2xl font-bold underline">Badges ↓</h1>
                <main>
                    <div className="flex justify-between flex-wrap">
                        {badges.map((badge) => (
                            <Badge key={badge.badgeId} badge={badge}/>
                        ))}
                    </div>
                </main>
            </div>
        </Layout>
    )
}