import React from 'react';
import ReactDOM from "react-DOM/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);


