import React, { useEffect, useState } from "react";
import axios from 'axios'



export default function CharacterList() {
  const[character,setCharacter] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response=>{
      console.log(response)
    })
    .catch(error =>{
      console.log("the data was not returned", error)
    })
  
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
