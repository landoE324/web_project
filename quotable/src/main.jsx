import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPages from "./AuthorPages";
import FolderPage from "./FolderPage";
import { CurrentQuotesProvider } from "./CurrentQuotesContext";
import { RecentProvider } from "./RecentContext";
import { FolderProvider } from "./FolderContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FolderProvider>
      <RecentProvider>
        <CurrentQuotesProvider>
          <Routes>
            <Route path= "/" element={<App />} />
            <Route path= "/quotes" element={<AuthorPages />} />
            <Route path= "/folders" element={<FolderPage />} />
          </Routes> 
        </CurrentQuotesProvider>
      </RecentProvider>
    </FolderProvider>
  </BrowserRouter>

 
);