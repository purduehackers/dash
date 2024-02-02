import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

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
    console.log(profile)
    return (
        <div onClick={() => Router.push("/p/[id]", `/p/${profile.userId}`)}>
            <h2>{profile.name} {profile.surname}</h2>
            <small>{profile.email}</small>
            <ReactMarkdown children={profile.discordId} />
            <p>Level: {profile.level}</p>
            <p>Badges: {profile.badges[0].description}</p>
            <p>
                {profile.badges.map((badge) => {
                    <div key={badge.badgeId}>
                        hello dtes asf
                        <p>aflkjslfkj</p>
                        {badge.badgeId} {badge.name} {badge.description}
                    </div>
                })}
            </p>
            <style jsx>{`
                div {
                color: inherit;
                padding: 2rem;
                }
            `}</style>
        </div>
    );
};

export default Profile;
