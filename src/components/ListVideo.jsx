import React from "react";
import "../assets/styles/components/ListVideo.css";


const ListVideo = ({videos}) => {
 
    return(
        <div className="cards-container">
            {videos.map((item) => (
                item.info.map(item => (
                    <div className="card-info">
                    <img src={item.secImage} alt={item.name} className="card-image"/>
                    <div className="card-info-text">
                        <h5 className="video-name">{item.name}</h5>
                        <p className="duration">{item.duration}</p>
                    </div>
                </div>
                ))
            ))

            }
        </div>
    );
}

export default ListVideo;