import mongoose, { Document } from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this todo."],
  },
  completed: {
    type: Boolean,
    required: [true, "Please provide the completion status of this todo."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for this todo."],
  },
  date: {
    type: Date,
    required: [true, "Please provide a date for this todo."],
    default: Date.now,
  },
});

const Todo = mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);
export default Todo;
