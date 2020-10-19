import * as TYPE from "./TypesConstant";

const initialState = {
  todos: [],
  fetching: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD_TODO:
      state.fetching = true;
      return { ...state };
    case TYPE.ADD_TODO_SUCCESS:
      state.todos = payload;
      state.fetching = false;
      return { ...state };
    case TYPE.DELETE_TODO_SUCCESS:
      state.todos = payload;
      state.fetching = false;
      return { ...state };
    case TYPE.EDIT_TODO_SUCCESS:
      state.todos = payload;
      state.fetching = false;
      return { ...state };
    case TYPE.FETCH_TODO_SUCCESS:
      state.todos = payload;
      state.fetching = false;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
