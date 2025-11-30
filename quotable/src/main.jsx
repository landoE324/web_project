import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPages from "./AuthorPages";
import { CurrentQuotesProvider } from "./CurrentQuotesContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CurrentQuotesProvider>
      <Routes>
        <Route path= "/" element={<App />} />
        <Route path= "/quotes" element={<AuthorPages />} />
      </Routes> 
    </CurrentQuotesProvider>
  </BrowserRouter>

 
);