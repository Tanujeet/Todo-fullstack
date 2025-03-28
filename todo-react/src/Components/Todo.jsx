import React from "react";

const Todo = ({ todos = [], toggleComplete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button
            onClick={() => {
              toggleComplete(index);
            }}
          >
            {todo.completed ? "Completed" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
