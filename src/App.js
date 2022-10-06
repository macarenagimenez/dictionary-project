import React from "react";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import "./imagediccionary.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Container>
        <img
          className="photo"
          src={require("./imagediccionary.jpg")}
          alt="imagediccionary"
        />
        <h1 className="title">Dictionary</h1>
        <Dictionary />
        <hr />
        <small>
          {" "}
          <FontAwesomeIcon icon={faCode} />{" "}
          <a
            href="https://github.com/macarenagimenez/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open source code{" "}
          </a>{" "}
          by Macu Gimenez.
        </small>
      </Container>
    </div>
  );
}

export default App;
