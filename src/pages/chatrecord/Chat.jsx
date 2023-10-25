import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ChatRecord from "../../components/chatrecord/ChatRecord"

const Chat = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <ChatRecord />
            </div>
        </div>
    )
}

export default Chat