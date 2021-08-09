import React,{ useContext, useEffect, useState} from "react";
import Player from "../components/Player";
import "../assets/styles/containers/VideoContainer.css";
import ListVideo from "../components/ListVideo";
import AppContext from "../context/AppContext";
import { useParams } from "react-router-dom";

const VideoContainer = () => {
    const { watchVideo } = useParams();
    const { video,state,playVideo } = useContext(AppContext);
    const list = video.map(item => item.info)

    const handleLoad = () => {
        if(Object.keys(state).length === 0){
            const videos = list.map(item => item.find(item => item.name === watchVideo))
            playVideo(videos[0])
           
        }
    }
    
    
    

    return(
        <div className="Video-container" onLoad={handleLoad}>
            <Player />
            <ListVideo videos={list} key={list.id}/>
        </div>
    )
}

export default VideoContainer;