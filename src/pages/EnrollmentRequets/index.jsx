/* eslint-disable no-unused-vars */
import React from "react"
import EnrollmentRequets from "../../components/datatable/EnrollmentRequets"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const EnrollRequetsPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <EnrollmentRequets />
      </div>
    </div>
  )
}

export default EnrollRequetsPage
