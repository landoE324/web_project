import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthorPages from "./AuthorPages";
import { CurrentQuotesProvider } from "./CurrentQuotesContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentQuotesProvider>

  <BrowserRouter>
    <AuthorPages />
  </BrowserRouter>

  </CurrentQuotesProvider>
);