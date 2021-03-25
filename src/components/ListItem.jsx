import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const ListItem = ({card}) => {
    const { playVideo } = useContext(AppContext);

    const handlePlayVideo = () => {
        playVideo(card)
        window.scrollTo(0,0)
    }

    return(
        <div className="card-info" onClick={handlePlayVideo}>
            <div className="play">
                <div className="icon-container">
                <i className="fas fa-play-circle second-button"/>
                </div>
               <img src={card.secImage} alt={card.name} className="card-image"/>
            </div>
        <div className="card-info-text">
            <h5 className="video-name">{card.name}</h5>
            <p className="duration">{card.duration}</p>
        </div>
         </div>
    );
}

export default ListItem