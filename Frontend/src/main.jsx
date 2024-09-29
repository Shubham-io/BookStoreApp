import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="dark:bg-slate-900 dark:text-white ">
    <AuthProvider>
      <App />
    </AuthProvider>
  </div>
);
