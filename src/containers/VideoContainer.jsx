import React from "react";
import Player from "../components/Player";
import "../assets/styles/containers/VideoContainer.css";
import ListVideo from "../components/ListVideo";
const VideoContainer = () => {
    return(
        <div className="Video-container">
                <Player/>
                <ListVideo/>
        </div>
    );
}

export default VideoContainer;