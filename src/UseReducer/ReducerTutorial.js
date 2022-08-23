import React, { useReducer } from "react";

// similar to the usestate hook which is purposed for updating of variables / changing states of variables and re-rendering it
// but usereducer hook consolidates them, useful when you have a bunch of states being altered by a single action!

// defining the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

// where state is an object with the 2 fields, dispatch is a function, reducer is a function, {[the 2 fields and initial values]}
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
