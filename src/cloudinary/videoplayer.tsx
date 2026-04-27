import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function CloudinaryPlayer() {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(-1);

  const videoSrc =
    "https://res.cloudinary.com/dvf7qyidg/video/upload/f_m3u8/v1773578653/Attack_on_Titan_-_Die_with_a_smile_AMV_1440p_uhbuch.m3u8";

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hlsRef.current = hls;

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        console.log("Levels:", hls.levels);
        setLevels(hls.levels);
        video.play();
      });
    }
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS
      video.src = videoSrc;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, []);

  const changeQuality = (levelIndex) => {
    if (hlsRef.current) {
      hlsRef.current.currentLevel = levelIndex;
      setCurrentLevel(levelIndex);
    }
  };

  return (
    <div style={{ width: "900px", margin: "auto", marginTop: "40px" }}>
      <video ref={videoRef} controls style={{ width: "100%" }} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => changeQuality(-1)}>
          Auto
        </button>

        {levels.map((level, index) => (
          <button
            key={index}
            onClick={() => changeQuality(index)}
          >
            {level.height}p
          </button>
        ))}
      </div>
    </div>
  );
}