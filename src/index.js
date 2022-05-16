import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Material Ui
// import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/Material";

// Auth Context
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
