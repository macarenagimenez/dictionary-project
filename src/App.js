import React from "react";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Dictionary</h1>
        <Dictionary />
        <hr />
        <small>
          {" "}
          A{" "}
          <a
            href="https://github.com/macarenagimenez/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open source code{" "}
          </a>{" "}
          by Macu Gimenez.
        </small>
      </Container>
    </div>
  );
}

export default App;
