import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HWs/Redux-HW_2/App";
import { Provider } from "react-redux";
import { store } from "./app/store";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
