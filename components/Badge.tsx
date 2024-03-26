'use client'

import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export type BadgeProps = {
  badgeId: number;
  majorVersion: number;
  minorVersion: number;
  name: string;
  description: string;
};

const Badge: React.FC<{ badge: BadgeProps }> = ({ badge }) => {
  const router = useRouter();
  const name = badge.name ? badge.name : "Unknown";

  const version = parseFloat(badge.majorVersion + "." + badge.minorVersion);
  const modelPath = `/assets/badge${version}.glb`;

  //const modelViewer = document.querySelector("model-viewer#badge-model");
  //modelViewer.scale = "2 2 2";

  return (
    <div onClick={() => console.log("badge clicked")/*router.push(`/p/${badge.badgeId}`)*/}
      className="h-96">
        <h2>Badge {badge.badgeId}</h2>
        <h2>{name}</h2>
        <small>{badge.badgeId}</small>
        <p>{badge.description}</p>

        {version}  <br/> <br/>
        <model-viewer className="modelViewer"
          id="badge-model" 
          src={modelPath}
          alt="Badge" with-credentials
          interaction-prompt="none" 
          camera-controls disable-pan disable-tap disable-zoom
          auto-rotate rotation-per-second="10deg" 
          camera-orbit="45deg 75deg 0"
          max-camera-orbit="auto 115deg 0"
          min-camera-orbit="auto 65deg 0"
          shadow-intensity="1"
          ios-src={modelPath}></model-viewer>
        
        <style jsx>{`
            div {
              color: inherit;
              padding: 2rem;
            }
            model-viewer {
              width: calc(100% - 1.25rem);
              height: calc(100vh - 1.25rem);
            }
        `}</style>
    </div>
  );
};

export default Badge;
