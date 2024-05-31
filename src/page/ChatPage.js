import '../style/ChatPage.css';
import config from '../config.json';
import ChatHeader from '../component/ChatHeader';
import ChatWindow from '../component/ChatWindow';
import { useEffect } from 'react';

const ChatPage = ({ roomKey, username }) => {
    let socket;

    const initsocket = () => {
        socket = new WebSocket("ws://" + config.SERVER_URL + config.paths.WEBSOCKET_PATH + "?username=" + username + "&roomKey=" + roomKey);

        socket.onmessage = (e) => {
            console.log("msg: " + e.data);
        }

        socket.onerror = (e) => {
            console.error("error: " + e.data);
        }

        socket.onopen = (e) => {
            console.log("open: " + e.data);
        }

        socket.onclose = (e) => {
            console.log("close: " + e.data);
        }
    }

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <div className='chatpage-container'>
            <div className='chatpage-chatview'>
                <ChatHeader
                    roomName='Default Roomname'
                    roomKey={roomKey}
                />
                <ChatWindow />
            </div>
            <div className='chatpage-userview'>

            </div>
        </div>
    );
}

export default ChatPage;