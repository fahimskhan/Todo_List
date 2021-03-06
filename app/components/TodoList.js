import React from 'react';
import Todo from './Todo';

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {
//           this.props.todos.map((todo, index) => (
//             <Todo
//               key={todo.id}
//               task={todo.task}
//               completed={todo.completed}
//               toggleTodo={() => this.props.toggleTodo(index)}
//             />
//           ))
//         }
//       </ul>
//     )
//   }
// }

const TodoList = ({todos, handleToggleTodo, handleDeleteTodo}) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key = {todo.id}
            task = {todo.task}
            completed = {todo.completed}
            //We will use matching by id's instead of index
            handleOnClick = {() => handleToggleTodo(todo.id)}
            deleteOnClick = {() => handleDeleteTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
