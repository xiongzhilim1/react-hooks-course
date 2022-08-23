import React, { useRef } from "react";

// if you want to focus on an input to clear it or highlight it whenever you click a button or trigger an action, useref hook is useful
// easiest way to access dom element, sort of equivalent to document.getElementById("")

function RefTutorial() {
  
  // declare a name for the ref and set it to useref
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
    //inputRef.current.focus();
  };
  
  
  return (
    <div>
      <h1>Pedro</h1>
    // to access the ref, got to set a property called ref and pass in the inputRef variable in
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
