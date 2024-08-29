import { addTodo, removeTodo, markComplete, inputValue } from "./actions";

export const mapStateProps = (state) => ({
  todos: state.todoReducer.todos,
  input: state.todoReducer.inputValue,
});

export const mapDispatchProps = {
  addTodo,
  removeTodo,
  markComplete,
  inputValue,
};
