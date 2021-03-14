import { useState, useEffect } from "react";

const initialState = () => {

    const [character,setCharacter] = useState([]);

    useEffect(() => {
       fetch("https://rickandmortyapi.com/api/character")
       .then(response => response.json())
       .then(data => setCharacter(data.results))                
    },[]);
    return character;
}

export default initialState;