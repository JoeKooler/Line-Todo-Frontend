import React, { useState, useEffect } from "react";
import liff from "@line/liff";

function LiffLogin() {
  const [userName, setUserName] = useState("");
  const LIFF_ID = "1655100279-x4wN2gY1";

  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: LIFF_ID });
      setUserName((await liff.getProfile()).displayName);
    };

    if (!liff.isLoggedIn()) {
      liff.login();
    }
    LiffInit();
  }, []);
  return (
    <div className="App">
      <h1>token: {userName}</h1>
    </div>
  );
}

export default LiffLogin;
