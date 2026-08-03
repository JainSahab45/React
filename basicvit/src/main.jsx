import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const anotheruser = "Vrinda"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Vist ',
  anotheruser
);
createRoot(document.getElementById("root")).render(
  reactElement,
  // <App />
);
