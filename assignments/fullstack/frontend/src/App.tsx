import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import { io, Socket } from 'socket.io-client';
import { FormTypes } from './components/form/form';
import ChatBox from './components/chatbox';

interface App {
  socket: Socket
}

function App({ socket }: App) {
  const [data, setData] = useState<FormTypes[]>([]);

  useEffect(() => {
    socket.on('listener', (data: FormTypes) => {
      setData(prev => ([
        ...prev,
        data
      ]))
    })

    return () => {
      socket.off('listener');
    };
  }, [])

  return (
    <div className="App">
      <ChatBox data={data} />
      <Form setData={setData} socket={socket} />
    </div>
  );
}

export default App;
