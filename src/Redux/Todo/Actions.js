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

export const deleteTodoAction = (token, todoID) => {
  return (dispatch) => {
    dispatch({ type: TYPE.DELETE_TODO });
    return axios
      .post("https://joe-line-todo.herokuapp.com/deleteTodo", {
        access_token: token,
        todoID: todoID,
      })
      .then((response) => {
        const resData = response.data;
        return dispatch({
          type: TYPE.DELETE_TODO_SUCCESS,
          payload: resData,
        });
      })
      .catch((error) => {
        return dispatch({
          type: TYPE.DELETE_TODO_FAILED,
          error: error,
        });
      });
  };
};

export const editTodoAction = (token, editedTodo, todoID) => {
  return (dispatch) => {
    dispatch({ type: TYPE.EDIT_TODO });
    return axios
      .post("https://joe-line-todo.herokuapp.com/editTodo", {
        access_token: token,
        editedTodo: editedTodo,
        todoID: todoID,
      })
      .then((response) => {
        const resData = response.data;
        return dispatch({
          type: TYPE.EDIT_TODO_SUCCESS,
          payload: resData,
        });
      })
      .catch((error) => {
        return dispatch({
          type: TYPE.EDIT_TODO_FAILED,
          error: error,
        });
      });
  };
};

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
