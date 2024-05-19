import ChatHeader from '../component/ChatHeader';
import ChatWindow from '../component/ChatWindow';
import '../style/ChatPage.css'

const ChatPage = () => {
    

    return (
        <div className='chatpage-container'>
            <div className='chatpage-chatview'>
                <ChatHeader />
                <ChatWindow />
            </div>
            <div className='chatpage-userview'>

            </div>
        </div>
    );
}

export default ChatPage;