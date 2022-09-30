import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
        <input type="search" placeholder="Hola" onChange={storeInputForm} />
      </form>
    </div>
  );
}
