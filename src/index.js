import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import "./styles.css";
import theme from "./theme/theme";
import { persistor, store } from "./store";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  rootElement
);
