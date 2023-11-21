/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import axios from 'axios';
import { Link } from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

// import { userColumns } from "../../datatablesource";
import "./datatable.scss";

const TeachersTable = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run only on component mount

    const fetchData = () => {
        axios.get('https://tutor4u.vercel.app/api/admin/teachers/all?page=1&limit=10')
            .then((response) => {
                const teacherData = response.data.data.docs;
                setData(teacherData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching teacher data:', error);
                setIsLoading(false);
            });
    };

    console.log(data);

    const columns = [
        { field: "name", headerName: "Subjects", flex: true, },
        { field: "email", headerName: "Email", flex: true },
        { field: "profileverify", headerName: "Profile Verification", flex: true },
        { field: "phone", headerName: "Phone", flex: true },
        { field: "profile_completeion", headerName: "Profile Completion", flex: true },
        { field: "profilepicture", headerName: "Profile Picture", flex: true },
        { field: "teachingsExperience", headerName: "Teaching Experience", flex: true },
    ];


    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item._id !== id);
        setData(updatedData);
        setOriginalData(updatedData);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="datatable">
            <div className="datatableTitle">
                <div>
                    <Link to='/studentsrecord'><Button variant="outlined" color="success">Students</Button></Link>
                    <Button variant="outlined" color="success" sx={{ ml: '10px' }}>Teachers</Button>
                    <Link to='/parentsrecord'><Button variant="outlined" color="success" sx={{ ml: '10px' }}>Parents</Button></Link>
                </div>
                <Link to="/users/new" className="link">Add New</Link>
            </div>
            <Typography variant="h6" sx={{ color: 'lightgrey' }}>Teachers Record</Typography>
            <TableContainer>
                <Table >
                    <TableHead sx={{}}>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell key={index}>{column.headerName}</TableCell>
                            ))}
                            <TableCell>Actions</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, rowIndex) => (
                            <TableRow key={rowIndex} >
                                {columns.map((column, columnIndex) => (
                                    <TableCell key={columnIndex}>
                                        {item[column.field]}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <div className="cellAction">
                                        <Link to={`/users/${item._id}`} style={{ textDecoration: "none" }}>
                                            <div className="viewButton">View</div>
                                        </Link>
                                        <div className="deleteButton" onClick={() => handleDelete(item._id)}>Delete</div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}
export default TeachersTable;
