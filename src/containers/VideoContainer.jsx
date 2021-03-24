import React,{ useContext, useEffect} from "react";
import Player from "../components/Player";
import "../assets/styles/containers/VideoContainer.css";
import ListVideo from "../components/ListVideo";
import AppContext from "../context/AppContext";

const VideoContainer = () => {

    const { video } = useContext(AppContext);

    const list = video.map(item => item.info)
    return(
        <div className="Video-container">
                <Player/>
                <ListVideo videos={list} key={list.id}/>
        </div>
    )
}

export default VideoContainer;