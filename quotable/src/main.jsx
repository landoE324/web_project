import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPages from "./AuthorPages";
import { CurrentQuotesProvider } from "./CurrentQuotesContext";
import { RecentProvider } from "./RecentContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecentProvider>
      <CurrentQuotesProvider>
        <Routes>
          <Route path= "/" element={<App />} />
          <Route path= "/quotes" element={<AuthorPages />} />
        </Routes> 
      </CurrentQuotesProvider>
    </RecentProvider>
  </BrowserRouter>

 
);