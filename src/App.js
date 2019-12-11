import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Spec from "jest-jasmine2/build/jasmine/Spec";

function App() {
  const [displayState, setDisplayState] = useState("");
  const [inputState, setInputState] = useState("");
  
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
    if (isOperatorPending()) {
      setDisplayState(number);
    }
    else {
      setDisplayState(displayState + number);
    }
    
    setInputState(inputState + number);
  }

  function isOperatorPending() {
    return (inputState.match(/[+\-*/]$/) !== null);
  }

  function operatorPressed(operator) {
    if (inputState !== "") {
      switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*":
          operatorAction(operator);
          break;
        case "=":
          evaluateInput();
          break;
      }
    }
  }

  function operatorAction(operator) {
    setInputState(inputState + operator);
  }

  function evaluateInput() {
    if (inputState.length > 0) {
      const result = eval(inputState);
      setDisplayState(result);
      setInputState(String(result));
    }
  }

  function specialPressed(special) {
    switch (special) {
      case "C":
        setDisplayState("");
        setInputState("");
        break;
      case "+/-":
      case "%":
        break;
    }
  }
}

export default App;
