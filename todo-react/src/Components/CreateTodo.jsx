import React from "react";

const CreateTodo = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          padding: 10,
          margin: 10,
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
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Add a Todo
      </button>

      <br />
    </div>
  );
};

export default CreateTodo;
