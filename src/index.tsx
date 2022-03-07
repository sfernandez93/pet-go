import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import "./index.css";
import App from "./App";
import LoginContextProvider from "./context/LoginContext";
import UploadContextProvider from "./context/UploadContext";

ReactDOM.render(
  <React.StrictMode>
    <UploadContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </UploadContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
