import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import "./index.css";
import App from "./App";
import LoginContextProvider from "./context/LoginContext";
import UploadContextProvider from "./context/UploadContext";
import SearchContextProvider from "./context/SearchContext";
import FavoriteContextProvider from "./context/FavoriteContext";
import DetailsContextProvider from "./context/DetailsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DetailsContextProvider>
        <FavoriteContextProvider>
          <SearchContextProvider>
            <UploadContextProvider>
              <LoginContextProvider>
                <App />
              </LoginContextProvider>
            </UploadContextProvider>
          </SearchContextProvider>
        </FavoriteContextProvider>
      </DetailsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
