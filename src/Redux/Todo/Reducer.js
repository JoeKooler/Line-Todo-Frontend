import * as TYPE from "./TypesConstant";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD_TODO_SUCCESS:
      state.todos = payload;
      return { ...state };
    case TYPE.DELETE_TODO_SUCCESS:
      state.todos = payload;
      return { ...state };
    case TYPE.EDIT_TODO_SUCCESS:
      state.todos = payload;
      return { ...state };
    case TYPE.FETCH_TODO_SUCCESS:
      state.todos = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
