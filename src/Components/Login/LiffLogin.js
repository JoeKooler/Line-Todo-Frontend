import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useDispatch } from "react-redux";

function LiffLogin() {
  const LIFF_ID = "1655100279-x4wN2gY1";
  const dispatch = useDispatch();
  const setLogin = (user) => dispatch(user);
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
