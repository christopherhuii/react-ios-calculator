import React, { PropTypes } from 'react';
import './../css/button.css';

const Button = (props) => {
  return (
    <button className={["calc-base-btn", props.className].join(" ")} onClick={props.onBtnClick}>
      {props.displayValue}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onBtnClick: PropTypes.func
}

export default Button;