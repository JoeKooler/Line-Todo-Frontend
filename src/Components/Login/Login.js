import React, { useState, useEffect } from "react";
import liff from "@line/liff";

function LiffLogin() {
  const [userName, setUserName] = useState("");
  const LIFF_ID = "1655100279-x4wN2gY1";

  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: "1655100279-x4wN2gY1" });
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
