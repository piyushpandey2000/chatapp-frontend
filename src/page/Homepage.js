import '../style/Homepage.css';
import config from '../config.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = ({ setUsername, setRoomKey }) => {

    const CREATE_ROOM_API_URL = config.SERVER_URL + config.paths.CREATE_ROOM;

    const navigate = useNavigate();
    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputRoomKey, setInputRoomKey ] = useState('');

    const handleRoomCreate = (e) => {
        e.preventDefault();
        
        const createRoom = async () => {
            try {
                const response = await fetch(CREATE_ROOM_API_URL,
                    {
                        method: 'POST', 
                        body: JSON.stringify({
                            'creator': inputUsername
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }
                );
                const roomKey = await response.json();
                setInputRoomKey(roomKey);
                handleRoomJoin()
            } catch (e) {
                console.error(e.stack)
            }
        }

        createRoom();
    }

    const handleRoomJoin = (e) => {
        e.preventDefault();

        setRoomKey(inputRoomKey);
        setUsername(inputUsername);
        navigate('/chat');
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
                    <button type='submit' onSubmit={handleRoomJoin}>Join</button>
                </form>
                <button onClick={handleRoomCreate}>Create</button>
            </div>
        </div>
    );
}

export default Homepage;