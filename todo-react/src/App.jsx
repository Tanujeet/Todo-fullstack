import React, { useState, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import Todo from "./Components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  );
};

export default App;
