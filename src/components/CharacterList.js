import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"
import { Container, Row, Col } from 'reactstrap';

export default function CharacterList() {
  const[character,setCharacter] = useState([])

  const setCharacterArray = event => {
    const items = character.filter(term =>
      term.name.toLowerCase().includes(event.toLowerCase())
    );
    setCharacter(items);
  };

  const search = charCollection => {
    setCharacter(charCollection)
  }
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
     <SearchForm characters={character}
     characterArray={setCharacterArray}/>
      {character.map((characters)=>{
        return(
          <Container fluid >
            <Row sm>
              <Col sm="3">
          <CharacterCard
          name={characters.name}
          status={characters.status}
          gender={characters.gender}
          species={characters.species}
          image={characters.image}
          />
          </Col>
          </Row>
          </Container>
          
        )
      })}
      
    </section>
    
  );
}
