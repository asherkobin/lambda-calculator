import React, { useState } from "react";
import { specials } from "../../../data"
import SpecialButton from "./SpecialButton"

const Specials = ({ pressFn }) => {
  const [specialsState, setSpecialsState] = useState(specials);
  
  return (
    <div>
      { specialsState.map(s => <SpecialButton displayText={s} key={s} pressFn={pressFn} />) }
    </div>
  );
};

export default Specials;
