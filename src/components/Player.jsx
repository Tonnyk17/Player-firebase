import React from "react";
import "../assets/styles/components/Player.css";

const Player = () => {
    return(
       <div className="player-container">
           <div className="video-container">
           <iframe  src="https://mega.nz/embed/h9YxBCBL#t2kPKFwYZAUxWqsDcrUEf7Y91k9jo92JPwAAvY7ap28" allowFullScreen className="player"/>
           </div>
              <h4 className="player-title">Cyberpunk 2077</h4>
            <div className="player-info">
                <p>Would you rather live in peace as Mr. Nobody... or go down for all times in a blaze of glory?</p>
                <p>Visit the Cyberpunk 2077 website: <a href="https://www.cyberpunk.net/">https://www.cyberpunk.net/</a></p>
            </div>

       </div>
    );
}

export default Player;