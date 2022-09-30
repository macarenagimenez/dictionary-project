import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Looking for ${keyWord}`);
  }

  function storeInputForm(event) {
    console.log(event.target.value);
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
