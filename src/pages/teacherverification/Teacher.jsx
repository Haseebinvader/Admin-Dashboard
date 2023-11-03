import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TeacherVerification from "../../components/userverifications/TeacherVerification"
import { Button } from "@mui/material"
const Teacher = () => {


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div>
                    <Link to='/parentsverification'>
                        <Button variant="outlined" color="success" >Parents</Button>
                    </Link>
                    <Button variant="outlined" color="success" sx={{ ml: '10px' }}>Teachers</Button>
                </div>
                <TeacherVerification />

            </div>
        </div>
    )
}

export default Teacher