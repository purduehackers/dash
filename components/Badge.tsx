'use client'

import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

import ModelViewerElementBase from "@google/model-viewer/lib/model-viewer-base";

export type BadgeProps = {
    badgeId: number;
    name: string;
    description: string;
};

const Badge: React.FC<{ badge: BadgeProps }> = ({ badge }) => {
  const router = useRouter()
  const name = badge.name ? badge.name : "Unknown";
  const modelPath = "/assets/badge2.2.glb"
  return (
    <div onClick={() => console.log("badge clicked")/*router.push(`/p/${badge.badgeId}`)*/}>
        <h2>Badge: {name}</h2>
        <small>{badge.badgeId}</small>
        <ReactMarkdown children={badge.description} />

        Badge {badge.badgeId} <br/> <br/>
        {badge.name}  <br/> <br/>

        <model-viewer id="badge-model" 
          src={modelPath}
          alt="Badge"
          interaction-prompt="none" 
          camera-controls disable-pan disable-tap disable-zoom
          auto-rotate auto-rotate-delay="1000"
          rotation-per-second="10deg" 
          camera-orbit="30deg 75deg 0deg"
          ios-src="/assets/badge2.2.glb"></model-viewer>
        
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
