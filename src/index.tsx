import React from "react";
import ReactDOM from "react-dom";
import { theme, client } from "./utils/utils";
import "./index.css";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./utils/axios.config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rtl from "jss-rtl";
import { create } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StylesProvider>
      <span dir="ltr">
        <ReactQueryDevtools />
      </span>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
