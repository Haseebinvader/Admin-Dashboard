import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Single = () => {
  const [teacherData, setTeacherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only on component mount

  const fetchData = () => {
    axios
      .get("https://tutor4u.vercel.app/api/admin/teachers/all?page=1&limit=10")
      .then((response) => {
        const teacherData = response.data.data.docs[0]; // Assuming you want the first teacher's data
        setTeacherData(teacherData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!teacherData) {
    return <div>Data not available.</div>;
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={teacherData.profilepicture} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{teacherData.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{teacherData.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{teacherData.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{teacherData.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">User Record</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
