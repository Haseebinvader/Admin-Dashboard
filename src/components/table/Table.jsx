import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
 
  const apiData = {
    achievements: "nothing special.",
    address: "kjsagjkask askjd gks",
    awards: ['yes', 'no', 'ok', 'aSD'],
    dateOfBirth: "1997-06-10",
    degreeName: "BS cs",
    degreeYear: "2011",
    email: "teacher@gmail.com",
    instituteName: "Degree college haripur",
    name: "Teacher Registration",
    password: "$2b$10$qZj8CVeDwA/8YWWuSi6BEOXo71qr3/xgiSaNbWvFvw5v/i2o9fqNS",
    phone: "09007865557",
    position: "techorS",
    previousInstitute: "ok google schoolS",
    profile_completeion: true,
    profilepic_id: "1HuEA-fYuNTSt6hCywuoFHXLFxR0bOEq-",
    profilepicture: "https://drive.google.com/uc?id=1HuEA-fYuNTSt6hCywuoFHXLFxR0bOEq-&export=download",
    profileverify: "verified",
    rating: [],
    subjects: ['ok', 'yes', 'no', 'bye', 'S'],
    teachingsExperience: "15",
    userType: "teacher"
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" sx={{fontSize: '14px', textTransform: 'uppercase', fontWeight: '600'}}>Key</TableCell>
            <TableCell className="tableCell" sx={{fontSize: '14px', textTransform: 'uppercase', fontWeight: '600'}}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(apiData).map((key, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell" sx={{fontSize: '14px', textTransform: 'uppercase', fontWeight: '600'}}>{key}</TableCell>
              <TableCell className="tableCell" sx={{fontSize: '14px', textTransform: 'uppercase'}}>{apiData[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
