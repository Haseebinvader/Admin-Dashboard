/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TeacherVerification from "../../components/userverifications/TeacherVerification"
// eslint-disable-next-line no-unused-vars
import { Button } from "@mui/material"
import DetailsTeacher from "../../components/userverifications/DetailVerify"
const TeacherDetails = () => {
const {id, type} = useParams()

    return (
        <div className="list"> 
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                
                <DetailsTeacher id={id} type={type} />

            </div>
        </div>
    )
}

export default TeacherDetails