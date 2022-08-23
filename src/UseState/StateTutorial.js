import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
    // on change, call the function onchange and pass in the event as parameter, where event is the input field. 
    // the onchange function above, access the event.target.value and uses the state setter function to assign to state (variable) which is rendered in the line below {inputValue}
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

// functions as variables 
