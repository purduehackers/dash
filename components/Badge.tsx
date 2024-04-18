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
  let modelPath = `/assets/badge${version}.glb`;

  return (
    <div onClick={() => console.log("badge clicked")/*router.push(`/p/${badge.badgeId}`)*/}
      className="w-[49%] max-w-3xl h-[450px] p-16 my-4 rounded-md border-2 border-solid border-neutral-200">
        <h2 className="text-amber-400 font-bold text-lg">Badge {badge.badgeId}</h2>
        <h2>{name}</h2>
        <small>000{badge.badgeId}</small>
        <p>{badge.description}</p>
        <model-viewer className="badge-model"
          src={`/assets/badge${version}.glb`}
          alt="Badge" with-credentials
          interaction-prompt="none" 
          camera-controls disable-pan disable-tap disable-zoom
          auto-rotate rotation-per-second="90deg" 
          camera-orbit="45deg 65deg 0"
          max-camera-orbit="auto 115deg 0"
          min-camera-orbit="auto 45deg 0"
          shadow-intensity="1"
          environment-image="/assets/courtyard.hdr"
          tone-mapping="neutral"
          ios-src={modelPath}></model-viewer>
    </div>
  );
};

export default Badge;
