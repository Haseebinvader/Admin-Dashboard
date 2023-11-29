/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import PayoutRequests from "../../components/datatable/PayoutRequests";

const PayoutRequestPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <PayoutRequests />
      </div>
    </div>
  );
};

export default PayoutRequestPage;
