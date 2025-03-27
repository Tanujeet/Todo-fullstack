import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  return (
    <div>
      <input type="text" placeholder="Title" />
      <br />
      <input type="text" placeholder="Description" />
      <br />
      <button>Add a Todo</button>
      
      <br />
    </div>
  );
};

export default CreateTodo;
