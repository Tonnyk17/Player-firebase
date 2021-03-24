import React,{ useContext, useEffect} from "react";
import Player from "../components/Player";
import "../assets/styles/containers/VideoContainer.css";
import ListVideo from "../components/ListVideo";
import AppContext from "../context/AppContext";
import NotFound from "../containers/NotFound";
const VideoContainer = (props) => {

    const { video } = useContext(AppContext);
    return(
        <div className="Video-container">
                <Player/>
                <ListVideo videos={video} key={video.id}/>
        </div>
    )
}

export default VideoContainer;