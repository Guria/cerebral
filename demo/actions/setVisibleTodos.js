function setVisibleTodos (args, state) {

  let todos = state.get('todos');
  let filter = state.get('filter');
  let visibleTodosRefs = Object.keys(todos).filter(function(key) {

    let todo = todos[key];
    return (
      filter === 'all' ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'active' && !todo.completed)
    );

  });
  state.set(['visibleTodosRefs'], visibleTodosRefs);

};

export default setVisibleTodos;
