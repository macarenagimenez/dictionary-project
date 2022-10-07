import React from "react";
import "./Phonetic.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <Row>
        <Col></Col>
        <Col>
          <ReactAudioPlayer
            src={props.phonetic.audio}
            autoPlay
            controls
            className="AudioPlayer"
          />
        </Col>
        <Col> {props.phonetic.text}</Col>
        <Col></Col>
      </Row>
    </div>
  );
}
