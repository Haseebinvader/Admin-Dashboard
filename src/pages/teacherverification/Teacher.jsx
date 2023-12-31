/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TeacherVerification from "../../components/userverifications/TeacherVerification"
// eslint-disable-next-line no-unused-vars
import { Button } from "@mui/material"
const Teacher = () => {


    return (
        <div className="list"> 
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                
                <TeacherVerification />

            </div>
        </div>
    )
}

export default Teacher