import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzaProvider>
  </React.StrictMode>
);
