import React from 'react';
import ReactDOM from 'react-dom/client';
import './03.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //
root.render(
  <React.StrictMode>               
    <App/>
  </React.StrictMode>
);
//리액트가 가지고 있는 기본적인 컴포넌트 <React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
