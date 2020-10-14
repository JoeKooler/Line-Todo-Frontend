import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, incrementIDAction } from "../Redux/Todo/Actions";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");

  //Redux
  const id = useSelector((state) => state.TodoReducer.id);
  const dispatch = useDispatch();
  const incrementID = () => dispatch(incrementIDAction());
  const addNewTodo = (todo) => dispatch(addTodoAction(todo));

  const setTodoHook = (event) => {
    setNewTodo(event.target.value);
  };

  useEffect(() => {
    console.log("RFC Did mount");
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      incrementID();
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
