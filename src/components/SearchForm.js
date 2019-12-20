import React, { useState,useEffect} from "react";
import axios from "axios";

export default function SearchForm(props) {
  const[searchTerm,setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = useState(props.character);
 
  useEffect(() => {}, [searchTerm]);


  const handleChange= event=> {
      setSearchTerm(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    props.characterArray(searchTerm);
  }


  
  return (
    <section className="search-form">
    <form onSubmit={submitHandler} >
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <button type="sumbit">Submit</button>
    </form>
    <div >
  
    </div>
  </section>
  );
}
