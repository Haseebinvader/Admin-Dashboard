import { Button } from "@mui/material"

const parentsverifytable = () => {
    return (
        <div>
            <h1>NEW REQUESTS</h1>
            <img src="" alt="ID CARD FRONT" />
            <img src="" alt="ID CARD BACK" />
            <Button variant="contained">APPROVE</Button>
            <Button variant="contained">REJECT</Button>
            <h1>Approved/Rejected</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID Number</th>
                        <th>Contact</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Child Name</th>
                        <th>Child Cnic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Haseeb Ur Rehman</td>
                        <td>12345678</td>
                        <td>+92 1235676543</td>
                        <td>12-04-2000</td>
                        <td>Male</td>
                        <td>Danyal</td>
                        <td>76543234567</td>
                    </tr>
                    <tr>
                        <td>Haseeb Ur Rehman</td>
                        <td>12345678</td>
                        <td>+92 1235676543</td>
                        <td>12-04-2000</td>
                        <td>Male</td>
                        <td>Danyal</td>
                        <td>76543234567</td>
                    </tr>
                    <tr>
                        <td>Haseeb Ur Rehman</td>
                        <td>12345678</td>
                        <td>+92 1235676543</td>
                        <td>12-04-2000</td>
                        <td>Male</td>
                        <td>Danyal</td>
                        <td>76543234567</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default parentsverifytable