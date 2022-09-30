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
      </Container>
    </div>
  );
}

export default App;
