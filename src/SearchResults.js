import React from "react";
import "./App.css";

function SearchResults({ data }) {
  let first = 0;
  let last = 3;
  let result = Object.keys(data.slice(first, last)).map((keyName, i) => (
    <div id={data[i]}>
      <p>center top</p>
      <img className="searcimg" src={data[keyName].images.original.url} />
      <p className="centered">center bottom</p>
      <p>center</p>
    </div>
  ))

  function onClick() {
    first += 3;
    last = 3;
    console.log(first, last);
  }

  return (
    <div className="searchResult">
      {result}
      <button onClick={onClick}>Next</button>
    </div>
  );
}

export default SearchResults;
