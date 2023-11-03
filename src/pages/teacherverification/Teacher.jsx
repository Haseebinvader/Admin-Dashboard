import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TeacherVerification from "../../components/userverifications/TeacherVerification"
import { Button } from "@mui/material"
import { useState } from "react"
const Teacher = () => {
    const [isParent, setisParent] = useState(false)
    const [isTeacher, setisTeacher] = useState(false)

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div>
                    <Button variant="outlined" color="success" onClick={() => setisParent(true)}>Parents</Button>
                    <Button variant="outlined" color="success" sx={{ ml: '10px' }} onClick={() => setisTeacher(true)}>Teachers</Button>
                </div>
                {isParent ?
                    <TeacherVerification />
                    : "Hello"
                }
                {isTeacher ?
                    <TeacherVerification />
                    : ""
                }
            </div>
        </div>
    )
}

export default Teacher