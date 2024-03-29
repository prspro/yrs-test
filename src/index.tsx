import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "normalize.css";
import "./index.sass";

const container = document.getElementById("root")!;
const root = createRoot(container as HTMLElement);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
