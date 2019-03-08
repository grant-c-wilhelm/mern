import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Header from "./Header";
import State from "./State";
import Counter from "./Counter";

class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todosData
    }
  }
  render() {
    function handleClick(){

    }
    const todosComponent = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      );
    });

    return (
      <div>
        <Header userName="Grant" />
        {todosComponent}
        <State />
        <Counter/>
      </div>
    );
  }
}

export default MainView;

// const jokeComponent = jokeData.map(joke => {
//   return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />;
// });

// return <div>{jokeComponent}</div>;
