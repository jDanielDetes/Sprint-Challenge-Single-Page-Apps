import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from "./CharacterCard"


export default function CharacterList() {
  const[character,setCharacter] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response=>{
      console.log(response)
      const charData= response.data.results
      setCharacter(charData)
    })
    .catch(error =>{
      console.log("the data was not returned", error)
    })
  
  }, []);

  return (
    <section className="character-list">
      {character.map((characters)=>{
        return(
          <CharacterCard
          name={characters.name}
          status={characters.status}
          gender={characters.gender}
          species={characters.species}
          />
        )
      })}
    </section>
  );
}
