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
      console.log("Logging in " + JSON.stringify(payload));
      state.loginSuccess = true;
      state.user = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
