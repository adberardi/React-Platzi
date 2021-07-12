import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const element = React.createElement('a',{href:'https://www.platzi.com/'},'Hola React!');
let nombre = 'Manolo';
// const element = React.createElement('h1',{},`Hola soy ${nombre}`);

const jsx = <h1>Hola soy {2 + 2}</h1>
const container = document.getElementById('root');

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// ReactDOM.render(element,container);
ReactDOM.render(jsx,container);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
