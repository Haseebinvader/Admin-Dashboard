import "./record.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TeachersTable from "../../components/datatable/TeachersTable"

const TeachersRecord = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <TeachersTable />
            </div>
        </div>
    )
}

export default TeachersRecord