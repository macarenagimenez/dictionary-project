import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              {" "}
              <p> {definition.definition}</p>
              <p> {definition.example}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
