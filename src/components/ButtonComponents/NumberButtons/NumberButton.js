import React from "react";

const NumberButton = ({ displayText, pressFn }) => {
  return (
    <button onClick={ (e) => pressFn(e.target.textContent) }>{displayText}</button>
  );
};

export default NumberButton;
