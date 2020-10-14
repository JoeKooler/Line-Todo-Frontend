import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../Redux/User/Action";

import liff from "@line/liff";

function LiffLogin() {
  const { loginSuccess, user, error } = useSelector(
    (state) => state.UserReducer
  );
  const [userName, setUserName] = useState("");
  const LIFF_ID = "1655100279-x4wN2gY1";
  const dispatch = useDispatch();
  const loginAct = (user) => dispatch(LoginAction(user));

  useEffect(() => {
    const getLiff = async () => {
      await liff.init({ liffId: LIFF_ID });
      if (loginSuccess) {
        await liff.login();
        loginAct(await liff.getProfile());
        console.log(user);
        setUserName((await liff.getProfile()).displayName);
      } else {
        setUserName((await liff.getProfile()).displayName);
      }
    };
    getLiff();
  }, []);
  return (
    <div className="App">
      <h1>token: {userName}</h1>
    </div>
  );
}

export default LiffLogin;
