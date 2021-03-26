import { useState, useLayoutEffect } from "react";
import playData from "../playData.json";

const useInitialState = () => {

    const [video,setVideo] = useState([]);
    const [state, setState] = useState([]);
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
    const removeVideo = (payload) => {
        return({
            ...video,
            
        })
    }
   
        
    return{
        video,
        state,
        playVideo,
        
    }
}

export default useInitialState;