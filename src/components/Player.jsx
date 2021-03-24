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
                            <p>{playing.message}</p>
                            <p>{playing.website} <a href={playing.url}>{playing.url}</a></p>
                        </div>
                    </div>
             </div>
    ):<div className="player-container">
    <div>
           <div className="video-container">
               <iframe src="https://mega.nz/embed/lhowBIbS#uX_Vyb6m71AA_dRs4uWpj_wL5bjQRvtyd_sxdj0TR-o" allowFullScreen className="player"/>
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