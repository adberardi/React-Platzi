import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");

ReactDOM.render(
  <Badge
    firstName="Antonio"
    lastName="Berardi"
    biography="Estudiante de Ingenieria en UCAB sede Caracas"
    twitter="anto9_berar5"
  />,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
