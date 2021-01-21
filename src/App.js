import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults'

function App() {
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState([]);

  const onClick = () => {
    
    setShowResults(!showResults)}

 function inputChange(input) {
    fetch("https://api.giphy.com/v1/stickers/search?q="+ input.target.value +"&limit=9&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.data)
        setData(result.data)
      },
      
    ).catch((err) => console.error(err));
  }

  return (
    <div className="App">
      <input onChange={inputChange} onClick={onClick}/>
      
      { showResults ? <SearchResults data={data}/> : null }
       
    </div>
  );
}

export default App;
