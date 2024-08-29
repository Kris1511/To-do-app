import { ADD_TODO, REMOVE_TODO, MARK_COMPLETED, INPUT_VALUE } from "./actions";

const initialState = {
  todos: [],
  inputValue: ''
};
console.log('initialState',initialState);


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
      case INPUT_VALUE: 
      return {
        ...state,
        inputValue: action.value
      }
    default:
      return state;
  }
};

export default todoReducer;