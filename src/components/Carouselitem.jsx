import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Carouselitem.css";
import AppContext from "../context/AppContext";

const Carouselitem = ({Character}) => {
   const {id} = Character
    const { playVideo } = useContext(AppContext);

    const handlePlay = () => {
        playVideo(Character)
         
    }

    return(
        <div>
             <div className="item">
                 
                 <img 
                     src={Character.image}
                     alt={Character.name} 
                     className="item-image"
                />
                <Link to="/watch">
                     <div className="item-info" onClick={handlePlay}>
                         <div className="play-button">
                             <i className="fas fa-play-circle size"/>
                         </div>
                            <div className="item-text">
                                <h2 className="item-title">{Character.name}</h2>
                                 <p>{Character.duration}</p>
                            </div>
                     </div> 
                </Link>
            </div>
        </div>
    );

}



export default Carouselitem;