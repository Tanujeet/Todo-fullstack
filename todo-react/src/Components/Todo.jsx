import React from "react";

const Todo = ({ todos = [], toggleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id} style={{ marginBottom: "10px" }}>
          <h1
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </h1>
          <h2>{todo.description}</h2>
          <button onClick={() => toggleComplete(todo._id)}>
            {todo.completed ? "✅ Completed" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
