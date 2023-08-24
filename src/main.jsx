import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import redux from "./redux";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <CssBaseline />
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);
