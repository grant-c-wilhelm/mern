import React, { Component } from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";

function MainView() {
  return (
    <div>
      <ContactCard
        contact={{
          city: "Salt Lake city",
          name: "Grant",
          lName: "Wilhelm",
          hobby: "Skiiing",
          age: 28
        }}
      />
    </div>
  );
}

export default MainView;
