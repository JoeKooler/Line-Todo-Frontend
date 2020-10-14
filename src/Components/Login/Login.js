import React, { useState, useEffect } from "react";
import liff from "@line/liff";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginAction } from "../../Redux/User/Action";

function LiffLogin() {
  // const { loginSuccess, user, error } = useSelector(
  //   (state) => state.UserReducer
  // );
  const [userName, setUserName] = useState("");
  const LIFF_ID = "1655100279-x4wN2gY1";
  // const dispatch = useDispatch();
  // const loginAct = (user) => dispatch(LoginAction(user));

  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: LIFF_ID });
    };

    const setName = async () => {
      setUserName((await liff.getProfile()).displayName);
    };
    LiffInit();
    if (liff.isLoggedIn()) {
      setName();
    } else {
      liff.login();
    }
  }, []);
  return (
    <div className="App">
      <h1>token: {userName}</h1>
    </div>
  );
}

export default LiffLogin;
