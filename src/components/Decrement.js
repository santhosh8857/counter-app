import React from "react";

const Decrement = (props) => {
  return (
    <div>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
