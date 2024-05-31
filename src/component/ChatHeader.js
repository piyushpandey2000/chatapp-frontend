import '../style/ChatHeader.css'
import { IoMdExit } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const ChatHeader = ({ roomName, roomKey }) => {

    return (
        <div className='chatheader-main'>
            <div className='chatheader-room-info'>
                <h1>
                    {roomName}
                </h1>
                <h1>({roomKey})</h1>
            </div>
            <div className='chatheader-actions'>
                <button>
                    <IoMdExit />
                </button>
                <button>
                    <IoSettingsOutline />
                </button>
            </div>
        </div>
    );
}

export default ChatHeader;