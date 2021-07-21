import React, { useContext } from "react";
import "../assets/styles/components/Player.css";
import AppContext from "../context/AppContext";



const Player = () => {

    const { state } = useContext(AppContext);
    const { playing } = state;


    const hasPlaying = Object.keys(state).length > 0;

    return hasPlaying ? (
        <div className="player-container">
            <div>
                <div className="video-container">
                    <video className="player" color="white" autoPlay controls src={playing.video} />
                </div>
                <h4 className="player-title">{playing.name}</h4>
                <div className="player-info">
                    <p>{playing.message}</p>
                    <p>{playing.website} <a href={playing.url} target="_blank">{playing.url}</a></p>
                </div>
            </div>
        </div>
    ) : <div className="player-container">
        <div>
            <div className="video-container">
                <video className="player" controls autoPlay src="https://firebasestorage.googleapis.com/v0/b/trailers-e06ca.appspot.com/o/Cyberpunk%202077.mp4?alt=media&token=c4ad78b5-dbba-4163-b92b-72b429cfb424" />
            </div>
            <h4 className="player-title">Cyberpunk 2077</h4>
            <div className="player-info">
                <p>Would you rather live in peace as Mr. Nobody... or go down for all times in a blaze of glory?</p>
                <p>Visit the Cyberpunk 2077 website: <a href="https://www.cyberpunk.net/">https://www.cyberpunk.net/</a></p>
            </div>
        </div>
    </div>





};

export default Player;