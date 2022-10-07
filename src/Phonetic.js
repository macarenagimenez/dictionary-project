import React from "react";
import "./Phonetic.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>
        {" "}
        <a href={props.phonetic.audio} target="_blank" without rel="noreferrer">
          <FontAwesomeIcon icon={faPlay} className="icon" />
        </a>
      </span>
      <span> {props.phonetic.text}</span>
    </div>
  );
}
