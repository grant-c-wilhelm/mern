import React, { Component } from "react";
import Joke from "./Joke";
import jokeData from "./jokeData";


function MainView() {
  const jokeComponent = jokeData.map(joke => {
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />;
  });

  return <div>{jokeComponent}</div>;
}

export default MainView;
