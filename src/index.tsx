import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
import FilterProvider from "./components/context/FilterContect";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      colors: {
        background: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      colors?: {
        background: string;
      };
    };
  }
}

const theme = createTheme({
  custom: {
    colors: {
      background: "#fff7f4",
    },
  },
  palette: {
    primary: {
      main: "#f26a36",
    },
    secondary: {
      main: "#f5875c",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
