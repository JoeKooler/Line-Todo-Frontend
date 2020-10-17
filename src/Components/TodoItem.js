import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, editTodoAction } from "../Redux/Todo/Actions";

function TodoItem({ todo }) {
  const [editTodoValue, setEditTodoValue] = useState("");
  const [editPanelClassName, setEditPanelClassName] = useState(
    "EditPanel Hide"
  );
  const [pencilClassName, setPencilClassName] = useState(
    "fa fa-pencil ToggleEdit Hide"
  );
  console.log("Rendering TodoItem");
  const UserReducer = useSelector((state) => state.UserReducer);
  const { token } = UserReducer;
  const dispatch = useDispatch();
  const deleteTodo = (token, todoID) =>
    dispatch(deleteTodoAction(token, todoID));
  const editTodo = (token, editTodoValue, todoID) => {
    if (todoContent !== "") {
      hideEditPanel();
      return dispatch(editTodoAction(token, editTodoValue, todoID));
    }
  };
  const setTodoHook = (event) => {
    setEditTodoValue(event.target.value);
  };

  const showPencil = () => {
    setPencilClassName("fa fa-pencil ToggleEdit");
  };

  const hidePencil = () => {
    setPencilClassName("fa fa-pencil ToggleEdit Hide");
  };

  const showEditPanel = () => {
    setEditPanelClassName("EditPanel");
  };

  const hideEditPanel = () => {
    setEditPanelClassName("EditPanel Hide");
  };

  return (
    <li key={todo._id} className="TodoList">
      <div
        className="TodoContent"
        onMouseEnter={showPencil}
        onMouseLeave={hidePencil}
      >
        <div className="TodoText">{todo.content}</div>
        <i
          className={pencilClassName}
          onClick={showEditPanel}
          style={{ color: "white" }}
        ></i>
        <form>
          <input
            className={editPanelClassName}
            value={editTodoValue}
            onChange={setTodoHook}
            style={{ color: "white" }}
          ></input>
        </form>
      </div>
      <div className="TodoButtonsGroup">
        <button
          onClick={(e) => editTodo(token, editTodoValue, todo._id)}
          className="EditButton TheButton"
        >
          EDIT
        </button>

        <button
          onClick={(e) => deleteTodo(token, todo._id)}
          className="DeleteButton TheButton"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
