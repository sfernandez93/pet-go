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
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <FavoriteContextProvider>
          <SearchContextProvider>
            <DetailsContextProvider>
              <UploadContextProvider>
                <App />
              </UploadContextProvider>
            </DetailsContextProvider>
          </SearchContextProvider>
        </FavoriteContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

serviceWorkerRegistration.register();
