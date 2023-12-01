// import Chart from "../../components/chart/Chart";
// import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import Table from "../../components/table/Table";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/admin/analytics")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
           <Widget type="user" dataanl={data?.allstudentsanl} />
          <Widget type="order" dataanl={data?.allteachersanl} />
          <Widget type="earning" dataanl={data?.allparentsanl} /> 
          {/* <Widget type="balance" /> */}
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Recent Users</div>
          <Table dataanl={data?.docs} />
        </div>
      </div>
    </div>
  );
};

export default Home;
