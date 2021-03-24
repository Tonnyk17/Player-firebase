import React, { useContext} from "react";
import "../assets/styles/components/Player.css";
import AppContext from "../context/AppContext";



const Player = () => {
    
    const { state } = useContext(AppContext);
    const { playing } = state;

    
    const hasPlaying = Object.keys(state).length > 0;

    return hasPlaying ? (
        <div className="player-container">
             <div>
                    <div className="video-container">
                         <iframe src={`https://mega.nz/embed/${playing.video}`} allowFullScreen className="player"/>
                    </div>
                      <h4 className="player-title">{playing.name}</h4>
                        <div className="player-info">
                            <p>Would you rather live in peace as Mr. Nobody... or go down for all times in a blaze of glory?</p>
                            <p>Visit the Cyberpunk 2077 website: <a href="https://www.cyberpunk.net/">https://www.cyberpunk.net/</a></p>
                        </div>
                    </div>
             </div>
    ):<div className="player-container">
    <div>
           <div className="video-container">
               <iframe src="https://mega.nz/embed/QsRx1YBK#Q6pVfYf8jQepFBx4VfBj2CpAToTcN9TrR9rQPJb-kK4" allowFullScreen className="player"/>
           </div>
             <h4 className="player-title">Cyberpunk 2077</h4>
               <div className="player-info">
                   <p>Would you rather live in peace as Mr. Nobody... or go down for all times in a blaze of glory?</p>
                   <p>Visit the Cyberpunk 2077 website: <a href="https://www.cyberpunk.net/">https://www.cyberpunk.net/</a></p>
               </div>
           </div>
    </div>
        
        
     
        
    
};

export default Player;