import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>

      <br />
    </div>
  );
};

export default CreateTodo;
