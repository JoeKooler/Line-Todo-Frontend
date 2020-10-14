import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../Redux/User/Action";

function LiffLogin() {
  const LIFF_ID = "1655100279-x4wN2gY1";
  const { loginSuccess } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const setLogin = (user) => dispatch(LoginAction(user));
  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: LIFF_ID });
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        setLogin(liff.getProfile());
      }
    };

    LiffInit();
  }, []);
  return <></>;
}

export default LiffLogin;
