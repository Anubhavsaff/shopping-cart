import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Shop } from './Components/Api';
import { store } from "./Components/Store";
import { Provider } from 'react-redux/es/exports';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <Shop/>
    </Provider>

  </React.StrictMode>
);


