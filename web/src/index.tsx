import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./component/Navigation";
import App from "./App";
import Footer from "./component/Footer";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Rendering Error!!");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <>
        <NavBar />
        <App />
        <Footer />
      </>
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
