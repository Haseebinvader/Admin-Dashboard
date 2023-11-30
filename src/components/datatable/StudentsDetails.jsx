/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TeacherVerification from "../../components/userverifications/TeacherVerification"
// eslint-disable-next-line no-unused-vars
import { Button } from "@mui/material"
import DetailsStudents from "./StudentsDetailscard"
 const StudentDetails = () => {
const {id} = useParams()

    return (
        <div className="list"> 
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                
                <DetailsStudents id={id} />

            </div>
        </div>
    )
}

export default StudentDetails