import React from "react";
import Router from "next/router";
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
        name: string,
        description: string
    }[] | null
};

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
    return (
        <div onClick={() => Router.push("/p/[id]", `/p/${profile.userId}`)}>
            <div>
                <h2>{profile.name} {profile.surname}</h2>
                <small>{profile.email}</small>
                <ReactMarkdown children={profile.discordId} />
                <p>Level: {profile.level}</p>
                <p>Badges</p>
            </div>
            <div>
                {profile.badges.map((badge) => (
                    <div key={badge.badgeId} className="badge-panel">
                        <Badge badge={badge} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                    margin: 1rem 0;
                    border: 2px solid black;
                }
                .badge-panel {
                    border: 2px solid black;
                }
            `}</style>
        </div>
    );
};

export default Profile;
