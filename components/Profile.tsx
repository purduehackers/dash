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
        name: string,
        description: string
    }[] | null
};

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push("/p/[id]"/*, `/p/${profile.userId}`*/)}>
            <div className="box">
                <h2 className="text-xl font-bold">{profile.name} {profile.surname}</h2>
                <small>{profile.email}</small>
                <ReactMarkdown children={profile.discordId} />
                <p>Level: {profile.level}</p>
                <p>Badges</p>
            </div>
            <div>
                {profile.badges.map((badge) => (
                    <div key={badge.badgeId} className="badge-panel box">
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
                .box {
                    box-shadow: 5px 5px 0px #aaa;
                }
                .box:hover {
                    box-shadow: 5px 5px 0px #fad655;
                }
                .badge-panel {
                    border: 2px solid black;
                }
            `}</style>
        </div>
    );
};

export default Profile;
