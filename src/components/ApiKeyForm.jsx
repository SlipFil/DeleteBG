import { observer } from "mobx-react-lite";
import User from "../store/userStore.js";
import React, { useState } from "react";

const ApiKeyForm = observer(() => {
  return (
    <>
      <sp-textfield
        style={{ marginBottom: 10 }}
        id="name-0"
        placeholder="Enter your API key"
      ></sp-textfield>
      <sp-button
        style={{ marginBottom: 20 , marginRight: 20}}
        variant="primary"
        onClick={() => User.loginUser()}
      >
        Login
      </sp-button>
      <sp-button
        style={{ marginBottom: 20 }}
        variant="primary"
        onClick={() => User.sendKey()}
      >
        Send Key
      </sp-button>
    </>
  );
});

export default ApiKeyForm;
