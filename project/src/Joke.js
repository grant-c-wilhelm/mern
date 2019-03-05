import React from "react";
import jokeData from "./jokeData";

function Joke(props) {
  return (
    <div>
      <h3 >
        Question: {props.question}
      </h3>
      <h3 style={{ display: !props.punchLine && "none" }}>
        Answer: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
