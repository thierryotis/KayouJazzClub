import React, { useRef, useState } from "react";
import "./Videoplayer.css";
import video from "./../../assets/college-video.mp4";

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef  = useRef()

  const closePlayer = (e)=>{
    if(e.target === player.current){
        setPlayState(false)
        videoRef.current.pause()

    }
  }

  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls ref={videoRef }></video>
    </div>
  );
};

export default Videoplayer;
