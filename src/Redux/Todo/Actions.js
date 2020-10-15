import axios from "axios";
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

export const fetchTodoAction = (token) => {
  return (dispatch) => {
    dispatch({ type: TYPE.FETCH_TODO });
    return axios
      .post("http://localhost:8000/", { access_token: token })
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
