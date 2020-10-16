import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, fetchTodoAction } from "../Redux/Todo/Actions";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");

  //Redux
  // const id = useSelector((state) => state.TodoReducer.id);
  const state = useSelector((state) => state);
  const { UserReducer, TodoReducer } = state;
  const { id } = TodoReducer;
  const { user, token } = UserReducer;
  const dispatch = useDispatch();
  const addNewTodo = (todo) => dispatch(addTodoAction(todo));
  const fetchTodo = (token) => dispatch(fetchTodoAction(token));
  const setTodoHook = (event) => {
    setNewTodo(event.target.value);
  };

  useEffect(() => {
    if (token !== "") fetchTodo(token);
  }, [token]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      addNewTodo({ content: newTodo, id: id });
      setNewTodo("");
    }
  };

  return (
    <div className="TodosContainer">
      <form onSubmit={onSubmit} className="TodosForm">
        <label htmlFor="newTodo" style={{ color: "white" }}>
          New Todo:
          <input
            name="newTodo"
            id="newTodo"
            value={newTodo}
            onChange={setTodoHook}
            type="text"
            className="TodoInput"
            placeholder="Enter New Todo here"
            style={{
              color: "white",
              marginLeft: "1em",
              marginRight: "1em",
              borderColor: "white",
            }}
          />
        </label>
        <button className="SubmitButton TheButton">ADD</button>
      </form>
      <ul>
        <Todos />
      </ul>
    </div>
  );
}
