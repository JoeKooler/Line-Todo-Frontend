import * as TYPE from "./TypeConstants";

export const LoginAction = (user) => ({
  type: TYPE.USER_LOGIN,
  payload: user,
});
