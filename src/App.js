import './App.css';
import Homepage from './page/Homepage';
import ChatPage from './page/ChatPage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

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
          roomKey={roomKey}
          username={username}
        />} />
      </Routes>
    </div>
  );
}

export default App;
