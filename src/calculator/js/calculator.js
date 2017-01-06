import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Screen from './screen.js';
import Button from './button.js';
import './../css/calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevValue: null, 
      displayValue: "0",
      prevOperator: null,
      activeOperator: null,
      operationComplete: false,
      waitingForOperand: false
    }
  }

  handleClearScreen = () => {
    this.setState({
      prevValue: null, 
      displayValue: "0",
      prevOperator: null,
      activeOperator: null,
      operationComplete: false,
      waitingForOperand: false
    });
  }

  handlePlusMinusClick = () => {
    const { displayValue } = this.state;
    const isNegativeNum = displayValue.charAt(0) === "-";

    this.setState({
      displayValue: isNegativeNum ? displayValue.substr(1) : "-" + displayValue
    });
  }

  handlePercentClick = () => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(parseFloat(displayValue) / 100)
    })
  }

  handleOperatorClick = (operation) => {
    const { prevValue, displayValue, prevOperator, operationComplete } = this.state;
    const operationMap = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue
    }

    if (prevValue && !operationComplete) {
      const arithmeticOutput = operationMap[prevOperator](parseFloat(prevValue), parseFloat(displayValue));
      this.setState({
        displayValue: String(arithmeticOutput),
        activeOperator: operation,
        operationComplete: true,
        waitingForOperand: true
      })
    } else {
      this.setState({
        activeOperator: operation,
        waitingForOperand: true
      });
    }
  }

  handleDigitClick = (digit) => {
    const { displayValue, activeOperator, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        prevValue: displayValue,
        displayValue: String(digit),
        prevOperator: activeOperator,
        activeOperator: null,
        operationComplete: false,
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue: displayValue === "0" ? String(digit) : displayValue + String(digit)
      });
    }
  }

  handleDecimalClick = () => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: "0.",
        waitingForOperand: false
      });
    } else if (displayValue.indexOf(".") === -1) {
      this.setState({
        displayValue: displayValue + "."
      })
    }
  }
  
  activeOperatorClassName = (operator) => {
    return this.state.activeOperator === operator ? "active-operator" : ""
  }

  formatScreen = (displayValue) => {
    return displayValue.length > 9 ? displayValue.substr(0,9) : displayValue;
  }

  render () {
    return (
      <div className="calculator-container">
        <Row>
          <Screen value={this.formatScreen(this.state.displayValue)} />
        </Row>
        <Row>
          <Button className="misc-btn" displayValue="AC" onBtnClick={this.handleClearScreen} />
          <Button className="misc-btn" displayValue="&#177;" onBtnClick={this.handlePlusMinusClick} />
          <Button className="misc-btn" displayValue="&#37;" onBtnClick={this.handlePercentClick} />
          <Button className={`math-operation-btn ${this.activeOperatorClassName("/")}`} displayValue="&#247;" onBtnClick={() => this.handleOperatorClick("/")} />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="7" onBtnClick={() => this.handleDigitClick(7)} />
          <Button className="num-btn" displayValue="8" onBtnClick={() => this.handleDigitClick(8)} />
          <Button className="num-btn" displayValue="9" onBtnClick={() => this.handleDigitClick(9)} />
          <Button className={`math-operation-btn ${this.activeOperatorClassName("*")}`} displayValue="&#215;" onBtnClick={() => this.handleOperatorClick("*")} />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="4" onBtnClick={() => this.handleDigitClick(4)} />
          <Button className="num-btn" displayValue="5" onBtnClick={() => this.handleDigitClick(5)} />
          <Button className="num-btn" displayValue="6" onBtnClick={() => this.handleDigitClick(6)} />
          <Button className={`math-operation-btn ${this.activeOperatorClassName("-")}`} displayValue="&#8722;" onBtnClick={() => this.handleOperatorClick("-")} />
        </Row>
        <Row>
          <Button className="num-btn" displayValue="1" onBtnClick={() => this.handleDigitClick(1)} />
          <Button className="num-btn" displayValue="2" onBtnClick={() => this.handleDigitClick(2)} />
          <Button className="num-btn" displayValue="3" onBtnClick={() => this.handleDigitClick(3)} />
          <Button className={`math-operation-btn ${this.activeOperatorClassName("+")}`} displayValue="&#43;" onBtnClick={() => this.handleOperatorClick("+")} />
        </Row>
        <Row>
          <Button className="num-btn--zero" displayValue="0" onBtnClick={() => this.handleDigitClick(0)} />
          <Button className="num-btn" displayValue="." onBtnClick={this.handleDecimalClick} />
          <Button className="math-operation-btn" displayValue="&#61;" onBtnClick={() => this.handleOperatorClick("=")} />
        </Row>
      </div>
    )
  }
}

export default Calculator;