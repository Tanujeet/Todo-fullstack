import React, { useState, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import Todo from "./Components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos); // Ensure your backend returns { todos: [...] }
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const toggleComplete = async (_id) => {
    const todoToUpdate = todos.find((todo) => todo._id === _id);
    if (!todoToUpdate) {
      console.error("Todo not found!");
      return;
    }

    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo._id === _id ? updatedTodo : todo))
    );

    try {
      const response = await fetch(`http://localhost:3000/todos/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: updatedTodo.completed }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <CreateTodo />
      <Todo todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
