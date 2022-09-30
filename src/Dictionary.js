import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function storeInputForm(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="searchEngine">
      <form onSubmit={handleSearch}>
        <input type="search" onChange={storeInputForm} />
      </form>
      <Results results={results} />{" "}
    </div>
  );
}
