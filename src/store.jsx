import { combineReducers, createStore } from "redux";
import todoReducer from "./reducer";

const rootReducer = combineReducers({ todoReducer });

const store = createStore(rootReducer);

export default store;


// import { addTodo, inputValue } from "./actions";
// import { connect } from "react-redux";
// import { mapDispatchProps, mapStateProps } from "./reduxConnect";

// function App({ todos, addTodo, removeTodo, markComplete, inputValue, input }) {
//   // const [change, setChange] = useState("");

//   const handleChange = (e) => {
//     inputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo({ id: Date.now(), text: input, completed: false })
//     inputValue('')
//     };

//   return (
//     <>
//       <div>
//         <h3>To-Do App</h3>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={input} onChange={handleChange} />
//           <button type="submit">Add to-do</button>
//         </form>
//         <ul>
//           {todos.map((todo) => {
//             <li key={todo.id}>
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => markComplete(todo.id)}
//               />
//               <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
//               <button onClick={() => removeTodo(todo.id)}>Remove</button>
//             </li>
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default connect(mapStateProps, mapDispatchProps)(App);
