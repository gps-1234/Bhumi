import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import reactga from "react-ga";
reactga.initialize("G-GXEWHM8W36");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// import * as React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import App from "./components/App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
