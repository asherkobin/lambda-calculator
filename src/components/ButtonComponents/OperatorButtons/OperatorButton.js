import React from "react";

const OperatorButton = ({ displayText, mathOperator, pressFn }) => {
  return (
    <button onClick={ (e) => pressFn(e.target.value) } value={mathOperator}>{displayText}</button>
  );
};

export default OperatorButton;
