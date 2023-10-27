import "./record.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ParentsTable from "../../components/datatable/ParentsTable"

const ParentsRecord = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <ParentsTable />
            </div>
        </div>
    )
}

export default ParentsRecord