/* eslint-disable react/prop-types */
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ dataanl }) => {
  return (
    <div className="h-[50rem] overflow-auto">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User Role</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Phone</TableCell>

            <TableCell className="tableCell">Profile Completion</TableCell>
            <TableCell className="tableCell">Profile Verification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataanl.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row?.profilepicture} alt="" className="image" />
                  {row.userType}
                </div>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
           
              <TableCell className="tableCell">
                <span
                  className={`status ${row.profile_completeion ? "Approved" : "Pending"
                    }`}
                >
                  {row.profile_completeion ? "Completed" : "Pending"}
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span
                  className={`status ${row.profileverify ? "Approved" : "Pending"
                    }`}
                >
                  {row.profileverify ? "Verified" : "Unverified"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;
