import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

// importing the context object 
function Login() {
  // initialise setter from usecontext's created appcontext
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
