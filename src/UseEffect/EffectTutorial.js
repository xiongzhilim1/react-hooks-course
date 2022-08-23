import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState(""); // initialised as empty string
  const [count, setCount] = useState(0); // initialised as integer 0

  // while usestate is like a variable + setter, usereducer is like a object + function, useeffect is a function that gets called on first rendering and on subsequent state changes
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
      // the response data is access via response.data -> with extra specification of index 0 and key email
        console.log("API WAS CALLED");
      });
  }, []);
  // can put within [] what kind of states you want to useeffect one, or for it to listen to reduce times of re-rendering when unnecessary e.g. ,[count]
  
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
