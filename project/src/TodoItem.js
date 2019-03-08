import React from "react";
import todosData from "./todosData";

function TodoItem(props) {
  return (
    <div className="todo-list">
      <div>Todo Description:: {props.description} </div>
      <div>
        <input type="checkbox" checked={props.completed} />
        <p>{props.completed}</p>
      </div>
    </div>
  );
}

export default TodoItem;
