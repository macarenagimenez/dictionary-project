import React from "react";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        🔈
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
