import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
//importing connect to connect TodoApp to resources it needs from Redux store
//which is available because the app is wrapped by <Provider> in app.js
import { connect } from 'react-redux';
//importing action creater for dispatch usage
import actions from '../actions/index' //brackets indicate object even though we only exported addTodo, this is helpful becasue we might export more than one action later on

const addTodo = actions.addTodo;
const toggleTodo = actions.toggleTodo;
const deleteTodo = actions.deleteTodo;
const filterTodo = actions.filterTodo;


let id = 0;

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { todos: [] };
//   }
//
//   toggleTodo(index) {
//     const newTodo = Object.assign(
//       {},
//       this.state.todos[index],
//       { completed: !this.state.todos[index].completed }
//     );
//     const newTodos = [
//       ...this.state.todos.slice(0, index),
//       newTodo,
//       ...this.state.todos.slice(index + 1)
//     ];
//     this.setState({ todos: newTodos });
//   }
//
//   addTodo(task) {
//     const newTodo = {
//       id: id++,
//       task: task,
//       completed: false
//     };
//     const newTodos = [ ...this.state.todos ]
//     newTodos.push(newTodo);
//     this.setState({ todos: newTodos });
//   }
//
//   render() {
//     return (
//       <div>
//         <InputLine
//           addTodo={(task) => this.addTodo(task)}
//         />
//         <TodoList
//           todos={this.state.todos}
//           toggleTodo={(index) => this.toggleTodo(index)}
//           removeTodo={(index) => this.removeTodo(index)}
//         />
//       </div>
//     );
//   }
// }

let TodoApp = ({todos, addTodoClick, toggleTodoClick, deleteTodoClick, filterTodoClick}) => {
  return (
    <div>
      <InputLine
        addTodo = {(text) => addTodoClick(id++, text)}
      />
      <button onClick={() => filterTodoClick()}>Filter Remaining Todos</button>
      <TodoList
        todos = {todos}
        handleToggleTodo = {(id) => toggleTodoClick(id)}
        handleDeleteTodo = {(id) => deleteTodoClick(id)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    deleteTodoClick: (id) => {
      dispatch(deleteTodo(id))
    },
    filterTodoClick: () => {
      dispatch(filterTodo())
    },
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
