import React, { useState } from "react";
import WaterDripping from "../../animations/waterDripping";
import PartOne from "../partone";

const Facade = () => {
  const video = [
    "women-walking.mp4",
    "hand-movement.mp4"
  ];

  const [currentVideo, SetCurrentVideo] = useState(0);

  const handleVideo = () => {
    SetCurrentVideo((prev) => (prev + 1) % video.length);
  };

  const headerStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "black !important",
    transform: "translate(-50%, -50%)"
  }

  return (
    <>
      <div className="relative">
        <video
          key={currentVideo}
          className="video-container"
          autoPlay
          muted
          playsInline
          onEnded={handleVideo}
        >
          <source src={`/videos/${video[currentVideo]}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={headerStyle}>
          <h1 className="fade-in md:text-nowrap text-[black]">Grow: Nurturing Nature, One Leaf at a Time.</h1>
        </div>
      </div>
      <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#3E7B27] to-[#85A947]">
        <div className="grid-cols-1 lg:grid-cols-2 grid items-center container mx-auto">
          <WaterDripping />
          <div className="text-[100px] lg:text-[160px] text-center py-2 animate-glowingText text-[#3E7B27]">
            Grow.
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <PartOne />
      </div>
    </>
  );
};

export default Facade;
