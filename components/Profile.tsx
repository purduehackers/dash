'use client'

import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Badge from "./Badge";
import Link from "next/link";

export type ProfileProps = {
    userId: number,
    discordId: string,
    name: string,
    surname: string,
    email: string,
    level: number,
    badges: {
        badgeId: number,
        majorVersion: number,
        minorVersion: number,
        name: string,
        description: string
    }[] | null
};

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile = null }) => {
    const router = useRouter();

    return (
        <div className="p-8 my-4 border-2 border-solid border-neutral-200
                        shadow-blocks-md shadow-indigo-500 hover:shadow-amber-400"
                onClick={() => console.log("profile clicked") /*router.push(`/p/${profile.userId}`)*/}>
            <div className="p-8 my-4 border-2 border-solid border-neutral-200
                            shadow-blocks-md shadow-indigo-500 hover:shadow-amber-400">
                <h2 className="text-xl font-bold">{profile.name} {profile.surname}</h2>
                <small>{profile.email}</small>
                <p>{profile.discordId}</p>
                <p>Level: {profile.level}</p>
                <p>{profile.badges.length} Badges</p>
            </div>
            <div className="flex justify-between flex-wrap">
                {profile.badges.map((badge) => (
                    <Badge key={badge.badgeId} badge={badge}/>
                ))}
            </div>
        </div>
    );
};

export default Profile;