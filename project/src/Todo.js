import React from "react";
import todosData from "./todosData";

function Todo(props) {
  return (
    <div className="todo-list">
      <div>Todo Description:: {props.description} </div>
      <div>
        <input type="checkbox" checked= {props.completed} />
        <p>{props.completed}</p>
      </div>
    </div>
  );
}

export default Todo; 
{
  /*   <h3 >
        Question: {props.question}
      </h3>
      <h3 style={{ display: !props.punchLine && "none" }}>
        Answer: {props.punchLine}
      </h3> */
}
