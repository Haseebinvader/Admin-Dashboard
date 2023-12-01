 import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Allchats from "./Allchats"
 
const ChatPage = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Allchats />
            </div>
        </div>
    )
}

export default ChatPage