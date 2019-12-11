import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = ({ pressFn }) => {
  const [numbersState, setNumbersState] = useState(numbers);
  
  return (
    <div>
      { numbersState.map(n => <NumberButton displayText={n} key={n} pressFn={pressFn} />) }
    </div>
  );
};

export default Numbers;