import React, { useContext, useLayoutEffe, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
                    <video className="player" color="white" autoPlay controls src={playing.video}/>
                </div>
                <h4 className="player-title">{playing.name}</h4>
                <div className="player-info">
                    <p className="player-info-text">{playing.message}</p>
                    <p className="player-info-text">{playing.website} <a href={playing.url} target="_blank">{playing.url}</a></p>
                </div>
            </div>
        </div>
    ) : <div className="player-container">
        <div>
            <div className="video-container">
                <video className="player" controls autoPlay src='' />
            </div>
            <h4 className="player-title">Loading...</h4>
           
        </div>
    </div>





};

export default Player;