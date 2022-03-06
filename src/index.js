import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
