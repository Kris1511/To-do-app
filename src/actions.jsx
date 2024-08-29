export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const INPUT_VALUE = 'INPUT_VALUE'

export const addTodo = (todo) => ({
    type: ADD_TODO,      //Action Type: The type is a constant, ADD_TODO.
    todo                 // Payload: The payload is passed as todo. This example uses shorthand object notation, where todo is both the key and the value.
}) 

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})

export const markComplete = (id) => ({
    type: MARK_COMPLETED,
    id
})

export const inputValue = (value) => ({
    type : INPUT_VALUE,
    value
})

// const addTodo = text => {
//     return {
//       type: 'todos/todoAdded',
//       payload: text
//     };
//   }

// Action Type: The type is a string literal 'todos/todoAdded'.
// Payload: The payload is passed as text, but it is explicitly assigned to a key named payload.