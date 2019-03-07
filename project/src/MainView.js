import React, { Component } from "react";
import Todo from "./Todo";
import todosData from "./todosData";
import Header from "./Header";
import Greeting from "./Greeting";

function MainView() {
  const todosComponent = todosData.map(todo => {
    return (
      <Todo
        key={todo.id}
        description={todo.description}
        completed={todo.completed}
      />
    );
  });

  return (
    <div>
      <Header userName="Grant" /> <Greeting />
      {todosComponent}
    </div>
  );
}

export default MainView;

// const jokeComponent = jokeData.map(joke => {
//   return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />;
// });

// return <div>{jokeComponent}</div>;
