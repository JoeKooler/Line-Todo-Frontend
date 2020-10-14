import * as TYPE from "./TypesConstant";

const initialState = {
  todos: [],
  id: 0,
};

const deleteTodo = (todos, todoID) => {
  return todos.filter((todo) => todo.id !== todoID);
};

const editTodo = (todos, { todoContent, todoID }) => {
  todos.forEach((todo) => {
    if (todo.id === todoID) {
      todo.content = todoContent;
    }
  });
  return [...todos];
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case TYPE.DELETE_TODO:
      return { ...state, todos: deleteTodo(state.todos, payload) };
    case TYPE.EDIT_TODO:
      return { ...state, todos: editTodo(state.todos, payload) };
    case TYPE.INCREMENT_ID:
      return { ...state, id: state.id + 1 };
    default:
      return state;
  }
};

export default reducer;
