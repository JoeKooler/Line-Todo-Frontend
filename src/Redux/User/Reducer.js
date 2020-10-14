import * as TYPE from "./TypeConstants";

const initialState = {
  user: {},
  loginSuccess: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case TYPE.USER_LOGIN:
      console.log("Logging in " + payload);
      state.loginSuccess = true;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
