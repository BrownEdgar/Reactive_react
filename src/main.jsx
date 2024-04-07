import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HWs/React-HW_15/App";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
