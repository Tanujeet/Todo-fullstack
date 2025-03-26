const express = require("express");
const { createTodo, updatedTodo } = require("./type");
const { todo } = require("./db");

const app = express();
app.use(express.json());

// GET route
app.post("/todos", async function (req, res) {
  const createPayLoad = req.body;
  const parsedPlayLoad = createTodo.safeParse(createPayLoad);

  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
    return;
  }
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    message: "Todo is created successfully",
  });
});

// POST route
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPlayLoad = updatedTodo.safeParse(updatePayload);

  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    message: "Todo updated successfully",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
