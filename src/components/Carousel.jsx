import React,{useState,useEffect} from "react";
import Carouselitem from "./Carouselitem";
import "../assets/styles/components/Carousel.css";
import rightArrow from "../assets/images/right.svg";
import leftArrow from "../assets/images/left.svg";


const Carousel = ({title,id}) => {
    const [character,setCharacter] = useState([]);
    const fila = document.getElementById(`${id}`);

    const handleMoveRight = () => (
        fila.scrollLeft += fila.offsetWidth
    );
    const handleMoveLeft = () => (
        fila.scrollLeft -= fila.offsetWidth
    );

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setCharacter(data.results));
        
    },[])
    return(
        <>
            <h2 className="Carousel-title h3">{title}</h2>
            <div className="main-carousel-container">
                    <img 
                    src={leftArrow} 
                    alt="Left" 
                    className="left-button" 
                    onClick={handleMoveLeft}
                    />

                    <div className="Carousel-container" id={id}>
                        {character.map(item => (
                            <Carouselitem Character={item} key={item.id}/>
                        ))

                        }
                    </div>
                   <img 
                   src={rightArrow} 
                   alt="Right" 
                   className="right-button" 
                   onClick={handleMoveRight}
                   />
                   
            </div>
        </>
    );

}

export default Carousel;