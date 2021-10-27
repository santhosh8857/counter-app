import React from "react";
import ChildComp from "./ChildComp";

const ShowCount = (props) => {
  return <ChildComp count={props.count} />;
};

export default ShowCount;
