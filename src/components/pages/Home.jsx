import React from "react";
import { Container } from "react-bootstrap";
import CardUi from "../ui/CardUi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Row>
      <Col>
        <CardUi />
      </Col>
      <Col>
        <CardUi />
      </Col>
      <Col>
        <CardUi />
      </Col>
      <Col>
        <CardUi />
      </Col>
    </Row>
  );
}

export default Home;
