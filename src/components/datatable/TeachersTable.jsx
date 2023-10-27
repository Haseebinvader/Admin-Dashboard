import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

const TeachersTable = () => {
    const [data, setData] = useState(userRows);

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
                    <Link to='/studentsrecord'> <Button variant="outlined" color="success" >Students</Button> </Link>
                    <Button variant="outlined" color="success" sx={{ ml: '10px' }}>Teachers</Button>
                    <Link to='/parentsrecord'> <Button variant="outlined" color="success" sx={{ ml: '10px' }}>Parents</Button></Link>
                </div>
                <Link to="/users/new" className="link"> Add New </Link>
            </div>
            <Typography variant="h6" sx={{ color: 'lightgrey' }}>Teachers Record</Typography>
            <DataGrid className="datagrid" rows={data} columns={userColumns.concat(actionColumn)} pageSize={9} rowsPerPageOptions={[9]} checkboxSelection />
        </div>
    )
}

export default TeachersTable