import "./record.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import StudentsTable from "../../components/datatable/StudentsTable"

const StudentsRecord = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <StudentsTable />
            </div>
        </div>
    )
}

export default StudentsRecord