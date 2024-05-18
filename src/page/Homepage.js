import '../style/Homepage.css'
import { useEffect, useState } from 'react';

const Homepage = ({ setUsername, setRoomKey }) => {

    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputRoomKey, setInputRoomKey ] = useState('');

    const handleRoomCreate = (e) => {

    }

    const handleRoomJoin = (e) => {

    }

    return (
        <div className='homepage-container'>
            <div className='homepage-main'>
                <form>
                    <label>Room key</label>
                    <input required type='text' placeholder='XXXXXX' onChange={(e) => {
                        e.target.value = e.target.value.toUpperCase();
                        setInputRoomKey(e.target.value);
                    }}></input>
                    <label>Username</label>
                    <input required type='text' onChange={(e) => setInputUsername(e.target.value)}></input>
                    <button type='submit' onSubmit={handleRoomCreate}>Create</button>
                    <button type='submit' onSubmit={handleRoomJoin}>Join</button>
                </form>
            </div>
        </div>
    );
}

export default Homepage;