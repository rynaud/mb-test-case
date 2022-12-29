import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Socket, io } from 'socket.io-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let socket: Socket = io('http://localhost:8000/');

root.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>
);
reportWebVitals();
