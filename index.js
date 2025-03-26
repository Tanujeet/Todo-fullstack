const express = require("express");
const { createTodo, updatedTodo } = require("./type");

const app = express();
app.use(express.json());

// GET route
app.get("/todo", function (req, res) {
  const createPayLoad = req.body;
  const parsedPlayLoad = createTodo.safeParse(createPayLoad);

  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
    return;
  }

  res.json({
    message: "Your new todo has been created",
  });
});

// POST route
app.post("/todos", function (req, res) {
  const updatePayload = req.body;
  const parsedPlayLoad = updatedTodo.safeParse(updatePayload);

  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
    return;
  }

  res.json({
    message: "Todo updated successfully",
  });
});

// PUT route
app.put("/completed", function (req, res) {
  res.json({
    message: "Todo marked as completed",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
