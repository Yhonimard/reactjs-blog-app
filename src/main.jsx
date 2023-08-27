import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import redux from "./redux/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={2000}
        preventDuplicate
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);
