const addTodo = (id, task) => {
  return {
    type: 'ADD_TODO',
    id, //in ES5 this just means id: id,
    task, // task: task,
    completed: false,
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

const filterTodo = () => {
  return {
    type: 'FILTER_TODO',
  };
};

export default { addTodo, toggleTodo, deleteTodo, filterTodo };
