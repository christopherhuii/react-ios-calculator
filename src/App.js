import React, { Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';
import Calculator from './calculator/js/calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Col xs={10} xsOffset={1} sm={4} smOffset={4} md={4} mdOffset={4}>
        <PageHeader>ReactJS iOS Calculator</PageHeader>
        <Calculator />
      </Col>
    );
  }
}

export default App;
