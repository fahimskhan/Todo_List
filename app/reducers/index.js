const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      //copy new state so no mutations to old state
      const newState = [...state];
      //create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
      };
      //mutating our own copy
      newState.push(newTodo);
      return newState;
    case 'TOGGLE_TODO':
      const newToggleState = [...state];
      for (let i=0; i<newToggleState.length; i++) {
        if (newToggleState[i].id === action.id) {
          newToggleState[i].completed = !newToggleState[i].completed;
        }
      };
      return newToggleState;
    case 'DELETE_TODO':
      const newDeleteState = [...state];
      for (let i=0; i<newDeleteState.length; i++) {
        if (newDeleteState[i].id === action.id) {
          newDeleteState.splice(i, 1);
        }
      };
      return newDeleteState;
    case 'FILTER_TODO':
      const newFilterState = [...state];
      let n=0;
      for (let i=0; i<newFilterState.length; i++) {
        if (newFilterState[n].completed === true) {
          newFilterState.push(newFilterState[n]);
          newFilterState.splice(n, 1);
        } else {
          n++;
        }
      }
      return newFilterState;
    default:
      return state;
  }
};

export default reducer;
