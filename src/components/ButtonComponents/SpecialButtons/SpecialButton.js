import React from "react";

const SpecialButton = ({ displayText, pressFn }) => {
  return (
    <button onClick={ (e) => pressFn(e.target.textContent) }>{displayText}</button>
  );
};

export default SpecialButton