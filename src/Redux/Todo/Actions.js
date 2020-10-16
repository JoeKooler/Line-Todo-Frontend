import axios from "axios";
import * as TYPE from "./TypesConstant";

export const addTodoAction = (token, todo) => {
  return (dispatch) => {
    dispatch({ type: TYPE.ADD_TODO });
    return axios
      .post("https://joe-line-todo.herokuapp.com/addTodo", {
        access_token: token,
        todo: todo,
      })
      .then((response) => {
        const resData = response.data;
        return dispatch({
          type: TYPE.ADD_TODO_SUCCESS,
          payload: resData,
        });
      })
      .catch((error) => {
        return dispatch({
          type: TYPE.ADD_TODO_FAILED,
          error: error,
        });
      });
  };
};

export const deleteTodoAction = (id) => ({
  type: TYPE.DELETE_TODO,
  payload: id,
});

export const editTodoAction = (todoContent, todoID) => ({
  type: TYPE.EDIT_TODO,
  payload: { todoContent: todoContent, todoID: todoID },
});

export const fetchTodoAction = (token) => {
  return (dispatch) => {
    dispatch({ type: TYPE.FETCH_TODO });
    return axios
      .post("https://joe-line-todo.herokuapp.com/", { access_token: token })
      .then((response) => {
        const resData = response.data;
        return dispatch({
          type: TYPE.FETCH_TODO_SUCCESS,
          payload: resData,
        });
      })
      .catch((error) => {
        return dispatch({
          type: TYPE.FETCH_TODO_FAILED,
          error: error,
        });
      });
  };
};
