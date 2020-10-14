import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.TodoReducer.todos);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
}
