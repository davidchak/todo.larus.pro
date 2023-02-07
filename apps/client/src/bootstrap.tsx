import React from "react";
import Root from "./ui/root/Root";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';


// TODO: инициализировать все модули и процессы

export function renderApp (router: any, appLogic: any, errorCollector: any){

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      {/* TODO: добавить <AppLogicsProvider processes={} modules={} /> */}
      {/* TODO: добавить <AppRouterProvider router={} /> */}
      <Root />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};
