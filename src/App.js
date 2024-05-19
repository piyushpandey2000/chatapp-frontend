import './App.css';
import Homepage from './page/Homepage';
import ChatPage from './page/ChatPage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [ username, setUsername ] = useState('');
  const [ roomKey, setRoomKey ] = useState('');

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage
          setRoomKey={setRoomKey}
          setUsername={setUsername}
        />} />
        <Route path='/chat' element={<ChatPage
          username={username}
          roomKey={roomKey}
        />} />
      </Routes>
    </div>
  );
}

export default App;
