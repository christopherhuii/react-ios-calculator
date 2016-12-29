import React, { Component } from 'react';
import './../css/button.css';

const Button = (props) => {
  return (
    <button className={["calc-base-btn", props.className].join(" ")} onClick={props.handleClick}>
      {props.displayValue}
    </button>
  );
}

export default Button;