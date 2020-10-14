import * as TYPE from "./TypesConstant";

export const addTodoAction = (todo) => ({
  type: TYPE.ADD_TODO,
  payload: todo,
});

export const deleteTodoAction = (id) => ({
  type: TYPE.DELETE_TODO,
  payload: id,
});

export const editTodoAction = (todoContent, todoID) => ({
  type: TYPE.EDIT_TODO,
  payload: { todoContent: todoContent, todoID: todoID },
});

export const incrementIDAction = () => ({
  type: TYPE.INCREMENT_ID,
});
