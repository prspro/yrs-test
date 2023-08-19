import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "normalize.css";
import "./index.sass";

import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root")!;
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      {/* <PersistGate persistor={persistor}>
      </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
