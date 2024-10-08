import React from "react";
// ReactDOM.createRoot is the new way to render the app and we import ReactDOM from react-dom/client from React 18
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { AuthProvider } from "./contexts/AuthContext";
// Redux Provider provides the global states to the app
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.VITE_NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
