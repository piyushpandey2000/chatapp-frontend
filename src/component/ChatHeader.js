import '../style/ChatHeader.css'
import { IoMdExit } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const ChatHeader = ({ username, roomKey }) => {

    return (
        <div className='chatheader-main'>
            <div className='chatheader-room-info'>
                <h1>
                    Room Name
                </h1>
                <h1>(XXXXX)</h1>
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