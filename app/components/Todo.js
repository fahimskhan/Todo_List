import React from 'react';

// class Todo extends React.Component {
//   render() {
//     return (
//       <li>
//         <span onClick={() => this.props.toggleTodo()}>
//           {this.props.completed ? <strike> {this.props.task}</strike> : this.props.task}
//         </span>
//       </li>
//     );
//   }
// }

const Todo = ({task, completed, handleOnClick, deleteOnClick}) => {
  return (
    <li>
      <button onClick={deleteOnClick} // same as (e) => deleteOnClick(e)
        style={{margin: 5, marginRight: 10}}>
        X
      </button>
      <span onClick={handleOnClick}>
        {completed ? <strike>{task}</strike> : task}
      </span>
    </li>
  );
}
export default Todo;
