import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

// createcontext (i.e. contexthooks) are a collection of states and setstates function that can be accessed as long as the wrapper brings in the states and setters

// declaring the context object, and export so that it can be used by other components
export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    // wrapping it and indicate which state / setter can be accessed 
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
