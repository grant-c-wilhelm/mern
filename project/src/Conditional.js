import React from "react";

function Conditional(props) {
  return props.isLoading === true ? (
    <h1>Loading...</h1>
  ) : (
    <h1> Welcome to our page</h1>
  );
}

export default Conditional;
