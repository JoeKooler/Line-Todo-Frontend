import * as TYPE from "./TypeConstants";

const initialState = {
  user: {},
  token: "",
  loginSuccess: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case TYPE.GET_USER_PROFILE:
      console.log("Logging in " + JSON.stringify(payload));
      state.loginSuccess = true;
      state.user = payload;
      return { ...state };
    case TYPE.GET_USER_ACCESS_TOKEN:
      console.log("User token " + JSON.stringify(payload));
      state.token = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
