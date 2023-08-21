import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import redux from "./redux";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
