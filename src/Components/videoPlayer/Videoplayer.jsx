import React, { useRef, useState } from "react";
import "./Videoplayer.css";
import video from "./../../assets/ekang.wav";

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
      <audio src={video} autoPlay muted controls ref={videoRef }></audio>
    </div>
  );
};

export default Videoplayer;
