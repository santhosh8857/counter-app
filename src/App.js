import React, { useState } from "react";
import "./App.css";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import ShowCount from "./components/ShowCount";

const App = () => {
  // we must use setCount to update the value.
  // and count to display the value.

  // the datatype of the state will be depends on the value we are passing in the useState function.

  // the state is responsible for re-rendering the component whenever there is a change in the value of the state.
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      {/* Importing components */}

      {/* passing function as props to the components */}
      <Increment increment={increment} />
      <Decrement decrement={decrement} />
      <Reset reset={reset} />
      <ShowCount count={count} />

      {/* handling click event: pointing the function instead of calling
      <button onClick={handleClick}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button> */}
    </div>
  );
};

export default App;
