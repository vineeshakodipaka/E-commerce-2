// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Content from "./components/Registerpage/Content";
import Register from "./components/Registerpage/Register";

function App() {
  // Effect hook to add custom class to the body
  useEffect(() => {
    document.body.classList.add("donarcustom-body");
    return () => {
      document.body.classList.remove("donarcustom-body");
    };
  }, []);
  return (
    <div className="App">
      <Row className="flex-column-reverse flex-lg-row">
        <Col lg={7} className="order-lg-1">
          <Content />
        </Col>
        <Col lg={5} className="order-lg-2">
          <Register />
        </Col>
      </Row>
    </div>
  );
}

export default App;
