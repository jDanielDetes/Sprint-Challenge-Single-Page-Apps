import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { BrowserRouter as  Route,  Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path= "/" >
          <WelcomePage/>
        </Route>
        <Route exact path ="/character-list">
        <CharacterList />
        </Route>
      
      </Switch>
   
    </main>
  );
}
