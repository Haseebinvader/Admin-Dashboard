import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";

const StudentsTable = () => {
    const [data, setData] = useState(userRows);

    useEffect(() => {
      axios.get('url')
      .then((response) => {
        setData(response.data.data.docs);
      })
      .catch((error) => {
        console.error('Error while fetching students data')
      });
    }, [data])
    

    const handleDelete = (id) => { setData(data.filter((item) => item.id !== id)) };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}><div className="viewButton">View</div></Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                <div>
                    <Button variant="outlined" color="success" >Students</Button>
                    <Link to='/teachersrecord'><Button variant="outlined" color="success" sx={{ ml: '10px' }}>Teachers</Button></Link>
                    <Link to='/parentsrecord'><Button variant="outlined" color="success" sx={{ ml: '10px' }}>Parents</Button> </Link>
                </div>
                <Link to="/users/new" className="link">Add New</Link>
            </div>
            <Typography variant="h6" sx={{ color: 'lightgrey' }}>Students Record</Typography>
            <DataGrid className="datagrid" rows={data} columns={userColumns.concat(actionColumn)} pageSize={9} rowsPerPageOptions={[9]} checkboxSelection />
        </div>
    )
}

export default StudentsTable