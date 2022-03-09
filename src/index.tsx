import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import "./index.css";
import App from "./App";
import LoginContextProvider from "./context/LoginContext";
import UploadContextProvider from "./context/UploadContext";
import SearchContextProvider from "./context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <UploadContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </UploadContextProvider>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
