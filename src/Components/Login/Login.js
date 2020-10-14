import React, { useState, useEffect } from "react";
import liff from "@line/liff";

function LiffLogin() {
  const [userName, setUserName] = useState("");
  const LIFF_ID = "1655100279-x4wN2gY1";

  useEffect(() => {
    const LiffInit = async () => {
      await liff.init({ liffId: LIFF_ID });
      if (!liff.isLoggedIn()) liff.login();
      else setUserName((await liff.getProfile()).displayName);
    };

    LiffInit();
  }, []);
  return (
    <div className="App">
      <h1>token: {userName}</h1>
    </div>
  );
}

export default LiffLogin;
