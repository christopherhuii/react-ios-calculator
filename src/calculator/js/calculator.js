import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Screen from './screen.js';
import Button from './button.js';
import './../css/calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }
  render () {
    return (
      <div className="calculator-container">
        <Row>
          <Screen value={this.state.value} />
        </Row>
        <Row>
          <Button className="misc-btn" displayValue="AC" />
          <Button className="misc-btn" displayValue="&#177;" />
          <Button className="misc-btn" displayValue="&#37;" />
          <Button className="math-operation-btn" displayValue="&#247;" />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="7" />
          <Button className="num-btn" displayValue="8" />
          <Button className="num-btn" displayValue="9" />
          <Button className="math-operation-btn" displayValue="&#215;" />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="4" />
          <Button className="num-btn" displayValue="5" />
          <Button className="num-btn" displayValue="6" />
          <Button className="math-operation-btn" displayValue="&#8722;" />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="1" />
          <Button className="num-btn" displayValue="2" />
          <Button className="num-btn" displayValue="3" />
          <Button className="math-operation-btn" displayValue="&#43;" />
        </Row>
        <Row>
          <Button className="num-btn--zero" displayValue="0" />
          <Button className="num-btn" displayValue="." />
          <Button className="math-operation-btn" displayValue="&#61;" />
        </Row>
      </div>
    )
  }
}

export default Calculator;