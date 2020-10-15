import * as TYPE from "./TypeConstants";

export const GetUserProfileAction = (user) => ({
  type: TYPE.GET_USER_PROFILE,
  payload: user,
});

export const GetUserAccessTokenAction = (token) => ({
  type: TYPE.GET_USER_ACCESS_TOKEN,
  payload: token,
});
