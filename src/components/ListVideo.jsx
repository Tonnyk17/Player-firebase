import React from "react";
import "../assets/styles/components/ListVideo.css";
import initialState from "../initialState";

const ListVideo = () => {

    initialState();
    return(
        <div className="cards-container">
            {initialState().map((item) => (
                <div className="card-info">
                    <img src={item.image} alt={item.name} className="card-image"/>
                    <div className="card-info-text">
                        <h5 className="video-name">{item.name}</h5>
                        <p className="duration">{item.status}</p>
                    </div>
                </div>
            ))

            }
        </div>
    );
}

export default ListVideo;