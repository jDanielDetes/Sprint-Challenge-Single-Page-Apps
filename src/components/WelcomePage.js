import React from "react";
import { useHistory } from "react-router-dom"

export default function WelcomePage() {
  const history = useHistory();
  const routeToCharacters = event => {
    console.log("Submitting...");
    setTimeout(() => {
      history.push("/character-list");
    }, 2000);
  }
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
         <button
        onClick={routeToCharacters}
       
      > Grab some characters!</button>
      </header>
    </section>
  );
}
