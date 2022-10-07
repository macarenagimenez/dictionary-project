import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function storeInputForm(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="searchEngine">
        <section className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={storeInputForm}
              placeholder="What word would you like to look for?"
            />
          </form>
          <div className="hint">
            suggested words: sunset, sunrise, travel...
          </div>
        </section>
        <Results results={results} />{" "}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
