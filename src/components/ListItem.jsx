import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const ListItem = ({card}) => {
    const { playVideo } = useContext(AppContext);

    const handlePlayVideo = () => {
        playVideo(card)
    }

    return(
        <div className="card-info" onClick={handlePlayVideo}>
        <img src={card.secImage} alt={card.name} className="card-image"/>
        <div className="card-info-text">
            <h5 className="video-name">{card.name}</h5>
            <p className="duration">{card.duration}</p>
        </div>
         </div>
    );
}

export default ListItem