import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001060d577cbd8d4af5a766a9b0ebde6bf6";
    let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsURL, { headers: headers }).then(handlePexelsResponse);
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
        <Results results={results} /> <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
