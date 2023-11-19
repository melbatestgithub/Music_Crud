// AudioPlayer.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import defImg from "./assets/defImg.jpg";
import { useSelector } from "react-redux";
const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  padding: 2rem 1rem;
  max-width: 200px;
  height: 300px;
  justify-content: end;
  margin: 0 auto;
`;

const AudioControls = styled.div`
  display: flex;
  align-items: end;
`;

const StyledAudio = styled.audio`
  width: 100%;
`;

const PlayPauseButton = styled.button`
  background: red;
  offset: none;
  border-radius: 50%;
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 10px;
  cursor: pointer;
  border: none;
`;

const Progress = styled.div`
  margin: 1rem 0;
  width: 100%;
  padding: 0;
  height: 2px;
`;
const MusicContent = styled.div`
display:flex;
flex-direction:column;
justify:content:center;
margin:1rem 0 0 0;
align-items:center;
width:300px;
height:400px;
color:white;
padding:1rem;
.image{
    width:80%;
    height:80%;
    opacity:.5;
}
font-family:var(--font-family);
color:var(--color-golden);
font-size:10px;
`;

const AudioPlayer = ({ audioSrc, closeModal, showModal }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const music = useSelector((state) => state.selectedMusic);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnd = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnd);
    };
  }, []);
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newPosition =
      (e.nativeEvent.offsetX / e.target.offsetWidth) * audio.duration;
    audio.currentTime = newPosition;
  };

  return (
    <>
      <AudioPlayerWrapper>
        <StyledAudio ref={audioRef} src={audioSrc} />
        <MusicContent key={music.id}>
          <img src={music[0]?.background ||  defImg } className="image" />
          <h2>{music[0]?.artist}</h2>
          <h2>{music[0]?.title}</h2>
        </MusicContent>
        <Progress>
          <progress value={progress} max="100" onClick={handleSeek} />
        </Progress>

        <AudioControls>
          <PlayPauseButton onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause
                style={{ color: "#ffffff", background: "none" }}
                size={24}
              />
            ) : (
              <FaPlay
                style={{ color: "#ffffff", background: "none" }}
                size={24}
              />
            )}
          </PlayPauseButton>
        </AudioControls>
      </AudioPlayerWrapper>
    </>
  );
};

export default AudioPlayer;
