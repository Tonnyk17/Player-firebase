import  React from "react";
import "../assets/styles/components/Wallpaper.css";

const Wallpaper = () => {

    return(
        <div>
            
            <div className="wall-container">
                 <div className="container info-container">
                     <div className="grid-info">
                            <img src="https://i.postimg.cc/Y02XCj0q/Cyberpunk-2077-logo.png" alt="" className="logo"/>
                            <div className="main-play-button btn btn-dark" onClick={() => (console.log("reproducir"))}>
                            <i className="fas fa-play"></i>     Play
                            </div>
                     </div>
                 </div>
            </div>
        </div>
    );
}

export default Wallpaper;