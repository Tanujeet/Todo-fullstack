const moongoose = require("moongoose");
const { boolean } = require("zod");

moongoose.connect(
  "mongodb+srv://Harsh:yfespO74AE1tGTTq@cluster0.rfzqz.mongodb.net/"
);

const todoSchema = new moongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = moongoose.model("todo", todoSchema);

module.exports({
  todo,
});
