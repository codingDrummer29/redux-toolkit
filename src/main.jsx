import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./assets/styles/main.scss";
import App from "./App";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
