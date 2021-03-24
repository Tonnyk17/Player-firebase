import { useState, useLayoutEffect } from "react";
import playData from "../playData.json";

const useInitialState = () => {

    const [video,setVideo] = useState([]);
    const [state, setState] = useState([]);
    const [media, setPlayVideo] = useState([]);
    const play = playData;

    useLayoutEffect(() => {
       fetch("https://trailers-api-5fdd8-default-rtdb.firebaseio.com/results.json")
       .then(response => response.json())
       .then(data => {
           
           return setVideo(data)
       })    
       .catch(err => console.log(err))            
    },[]);
     
    
    const playVideo = (payload) => {
        setState({
            ...play,
            playing: payload
        })
         
    }
    const playMedia = (payload) => {

        setPlayVideo({
            ...video,
            playing: video.id === Number(payload)
        })
    }

    
    
        
    return{
        video,
        state,
        playVideo,
        playMedia,
        media,
    }
}

export default useInitialState;