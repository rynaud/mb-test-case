import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="App">
      <form onSubmit={onSubmit}></form>
    </div>
  );
}

export default App;
