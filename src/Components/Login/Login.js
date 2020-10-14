import React, { useState, useEffect } from "react";
import liff from "@line/liff";

function LiffLogin() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LIFF_ID = "1655100279-x4wN2gY1";
  useEffect(() => {
    const getLiff = async () => {
      await liff.init({ liffId: LIFF_ID });
      setIsLoggedIn(liff.isLoggedIn());
      if (!isLoggedIn) {
        liff.login();
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
