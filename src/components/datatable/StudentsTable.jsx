import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState, } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
const userColumns = [
  { field: "_id", headerName: "ID", flex: true },
  { field: "name", headerName: "Name", flex: true },
  { field: "email", headerName: "Email", flex: true },
   {
    field: "profile_completeion",
    headerName: "Profile Completion",
    flex: true,
  },
];
const StudentsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/students/all?page=1&limit=100")
      .then((response) => {
        console.log(response.data.data.docs)
        setData(response.data.data.docs);
      })
      .catch((error) => {
        console.error("Error while fetching students data",error);
      });
  }, [data]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
 
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>
          <Button variant="outlined" color="success">
            Students
          </Button>
          <Link to="/teachersrecord">
            <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
              Teachers
            </Button>
          </Link>
          <Link to="/parentsrecord">
            <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
              Parents
            </Button>{" "}
          </Link>
        </div>
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <Typography variant="h6" sx={{ color: "lightgrey" }}>
        Students Record
      </Typography>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default StudentsTable;
