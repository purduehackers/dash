import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type BadgeProps = {
    badgeId: number;
    name: string;
    description: string;
};

const Badge: React.FC<{ badge: BadgeProps }> = ({ badge }) => {
  //console.log(badge)
  const name = badge.name ? badge.name : "Unknown";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${badge.badgeId}`)}>
        <h2>Badge: {name}</h2>
        <small>{badge.badgeId}</small>
        <ReactMarkdown children={badge.description} />

        Badge {badge.badgeId} <br/> <br/>
        {badge.name}  <br/> <br/>
        <style jsx>{`
            div {
                color: inherit;
                padding: 2rem;
            }
        `}</style>
    </div>
  );
};

export default Badge;