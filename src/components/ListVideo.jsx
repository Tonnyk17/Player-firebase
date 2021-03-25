import React, { useContext } from "react";
import "../assets/styles/components/ListVideo.css";
import AppContext from "../context/AppContext"
import ListItem from "./ListItem";

const ListVideo = ({videos}) => {
    

    
    return(
        <div className="cards-container">
            {videos.map((item) => ( item.map(item => (
                <ListItem card={item} key={item.id}/>
            ))
            ))

            }
        </div>
    );
}

export default ListVideo;