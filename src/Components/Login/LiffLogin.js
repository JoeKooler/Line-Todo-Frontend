import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useSelector, useDispatch } from "react-redux";
import {
  GetUserProfileAction,
  GetUserAccessTokenAction,
} from "../../Redux/User/Action";

function LiffLogin(props) {
  const LIFF_ID = "1655100279-x4wN2gY1";
  const { loginSuccess } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const setLogin = (user) => dispatch(GetUserProfileAction(user));
  const setToken = (token) => dispatch(GetUserAccessTokenAction(token));
  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: LIFF_ID });
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        setLogin(await liff.getProfile());
        setToken(liff.getAccessToken());
      }
    };
    console.log(props);
    LiffInit();
  }, []);
  return <>{props.children}</>;
}

export default LiffLogin;
