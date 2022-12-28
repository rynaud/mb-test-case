import React from 'react';
import './App.css';
import Form from './components/form';
import { io } from 'socket.io-client';

function App() {
  let socket = io('https://localhost:3000/')

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
