import React, { useState } from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton";

const Operators = ({ pressFn }) => {
  const [operatorState, setOperatorState] = useState(operators);
  
  return (
    <div>
      { operatorState.map(o => <OperatorButton displayText={o.char} mathOperator={o.value} key={o.char} pressFn={pressFn} />) }
    </div>
  );
};

export default Operators;