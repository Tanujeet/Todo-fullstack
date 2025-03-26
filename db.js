const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://Harsh:yfespO74AE1tGTTq@cluster0.rfzqz.mongodb.net/"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
