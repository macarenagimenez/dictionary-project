import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <Row>
          {" "}
          {props.photos.map(function (photo, index) {
            return (
              <Col key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="photoNoun"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  } else {
    return null;
  }
}
