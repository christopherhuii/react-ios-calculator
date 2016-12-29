import React, { Component } from 'react';
import './../css/screen.css';

const Screen = (props) => {
  return (
    <div className="calculator-screen">
      <span className="screen-value">
        {props.value}
      </span>
    </div>
  );
}



export default Screen;