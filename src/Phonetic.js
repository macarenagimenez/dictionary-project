import React from "react";
import "./Phonetic.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div>
      <Row>
        <Col>
          <a
            href={props.phonetic.audio}
            target="_blank"
            without
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faPlay} className="icon" />
          </a>
        </Col>
        <Col className="textPhonetic">{props.phonetic.text}</Col>
        <Col xs={7}></Col>
      </Row>
    </div>
  );
}
