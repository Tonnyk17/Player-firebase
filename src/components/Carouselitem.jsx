import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/components/Carouselitem.css";
import AppContext from "../context/AppContext";

const Carouselitem = ({Character}) => {
    const { playVideo } = useContext(AppContext);
    const history = useHistory();

    const handlePlay = () => {
        
        playVideo(Character)
        window.scrollTo(0,0)
        history.push(`/watch/${Character.name}`)

    }

    return(
        <div>
             <div className="item">
                 
                 <img 
                     src={Character.image}
                     alt={Character.name} 
                     className="item-image"
                />
               
                     <div className="item-info" onClick={handlePlay}>
                         <div className="play-button">
                             <i className="fas fa-play-circle size"/>
                         </div>
                            <div className="item-text">
                                <h2 className="item-title">{Character.name}</h2>
                                 <p>{Character.duration}</p>
                            </div>
                     </div> 
             
            </div>
        </div>
    );

}



export default Carouselitem;