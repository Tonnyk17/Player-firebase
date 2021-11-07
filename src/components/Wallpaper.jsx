import  React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Wallpaper.css";

const Wallpaper = () => {

    return(
        <div>
            
            <div className="wall-container">
                 <div className="container info-container">
                     <div className="grid-info">
                            <img src="https://i.postimg.cc/Y02XCj0q/Cyberpunk-2077-logo.png" alt="Cyberpunk 2077 logo" className="logo"/> 
                             <Link to="/watch/Cyberpunk%202077">
                                <div className="main-play-button btn btn-dark" translate='no'>
                                    <i className="fas fa-play"></i>     Play
                                </div>
                            </Link>
                     </div>
                 </div>
            </div>
        </div>
    );
}

export default Wallpaper;