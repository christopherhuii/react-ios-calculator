import React, { Component } from 'react';
import Calculator from './calculator/js/calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <Calculator />
      </div>
    );
  }
}

export default App;
