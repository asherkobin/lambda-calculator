import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Spec from "jest-jasmine2/build/jasmine/Spec";

function App() {
  const [displayState, setDisplayState] = useState(0);
  
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayText={displayState} />
        <Numbers pressFn={numberPressed} />
        <Operators pressFn={operatorPressed} />
        <Specials pressFn={specialPressed} />
      </div>
    </div>
  );

  function numberPressed(number) {
    console.log("Got Number Press!: " + number);
    setDisplayState(number);
  }

  function operatorPressed(operator) {
    console.log("Got Operator Press!: " + operator);
    setDisplayState(operator);
  }

  function specialPressed(special) {
    console.log("Got Special Press!: " + special);
    setDisplayState(special);
  }

}

export default App;
