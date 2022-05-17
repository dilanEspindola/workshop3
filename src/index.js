import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Material Ui
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/Material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </Provider>
  </ThemeProvider>
);
