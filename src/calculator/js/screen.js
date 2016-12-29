import React, { PropTypes } from 'react';
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

Screen.propTypes = {
  value: PropTypes.string
}


export default Screen;