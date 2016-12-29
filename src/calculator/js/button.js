import React, { PropTypes } from 'react';
import './../css/button.css';

const Button = (props) => {
  return (
    <button className={["calc-base-btn", props.className].join(" ")} onClick={props.handleClick}>
      {props.displayValue}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button;