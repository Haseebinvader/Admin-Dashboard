/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { userColumns } from "../../datatablesource";
import "./datatable.scss";
import axios from "axios";
const userColumns = [
    { field: "_id", headerName: "ID", flex: true },
    { field: "name", headerName: "Name", flex: true },
    { field: "email", headerName: "Email", flex: true },
    { field: "profileverify", headerName: "Profile Verification", flex: true },
    {
      field: "profile_completeion",
      headerName: "Profile Completion",
      flex: true,
    },
  ];
const TeachersTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/teachers/all?page=1&limit=100")
      .then((response) => {
        setData(response.data.data.docs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
        setIsLoading(false);
      });
  }, [data]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render the DataGrid when data is available
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>
          <Link to="/studentsrecord">
            <Button variant="outlined" color="success">
              Students
            </Button>
          </Link>
          <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
            Teachers
          </Button>
          <Link to="/parentsrecord">
            <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
              Parents
            </Button>
          </Link>
        </div>
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <Typography variant="h6" sx={{ color: "lightgrey" }}>
        Teachers Record
      </Typography>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />{" "}
    </div>
  );
};

export default TeachersTable;
