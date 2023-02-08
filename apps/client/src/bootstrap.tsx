import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { router } from "./router";
import './assets/styles/index.css';


// TODO: инициализировать все модули и процессы, пробросить пропсами
export function renderApp (){

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      {/* TODO: добавить <AppLogicsProvider processes={} modules={} /> */}
      <RouterProvider router={ router } />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};
