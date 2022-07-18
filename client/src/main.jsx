import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css/normalize.css";
import "./index.css";
import { AppProvider } from "./context/appContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
