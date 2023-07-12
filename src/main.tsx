import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "@/routes";
import { GlobalProvider } from "@/contexts/MainContext";
import CssBaseline from "@mui/material/CssBaseline";
import { AlertProvider } from "./contexts/AlertContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider>
      <AlertProvider>
        <CssBaseline />
        <Root />
      </AlertProvider>
    </GlobalProvider>
  </BrowserRouter>
);
