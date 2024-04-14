'use client'

import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Badge from "./Badge";

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
    const router = useRouter()

    return (
        <div onClick={() => console.log("profile clicked") /*router.push(`/p/${profile.userId}`)*/}>
            <div className="box">
                <h2 className="text-xl font-bold">{profile.name} {profile.surname}</h2>
                <small>{profile.email}</small>
                <p>{profile.discordId}</p>
                <p>Level: {profile.level}</p>
                <p>{profile.badges.length} Badges</p>
            </div>
            <div className="flex justify-between flex-wrap">
                {profile.badges.map((badge) => (
                    <Badge badge={badge}/>
                ))}
            </div>
            <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                    margin: 1rem 0;
                    border: 2px solid rgb(220, 220, 220);
                }
                .box {
                    box-shadow: 5px 5px 0px rgb(155, 94, 255);
                }
                .box:hover {
                    box-shadow: 5px 5px 0px #fad655;
                }
            `}</style>
        </div>
    );
};

export default Profile;
