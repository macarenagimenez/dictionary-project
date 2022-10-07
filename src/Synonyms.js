import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonym text-capitalize">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="synonymWord" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
