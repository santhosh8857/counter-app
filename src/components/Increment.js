import React from "react";

const Increment = (props) => {
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
};

export default Increment;
