import './App.css';
import Homepage from './page/Homepage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [ username, setUsername ] = useState('');

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage
          setUsername={setUsername}
        />} />
      </Routes>
    </div>
  );
}

export default App;
