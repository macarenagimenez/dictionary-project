import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span className="text-capitalize partOfSpeech">
        {props.meaning.partOfSpeech}:
      </span>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <span key={index}>
              {" "}
              <span> {definition.definition}</span>
              <p className="example"> {definition.example}</p>
              <Synonyms synonyms={definition.synonyms} className="synonyms" />
            </span>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
