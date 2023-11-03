import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ParentsVerification from '../../components/userverifications/ParentsVerification'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Parent = () => {


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div>
                    <Button variant="outlined" color="success" >Parents</Button>
                    <Link to='/teachersverification'>
                        <Button variant="outlined" color="success" sx={{ ml: '10px' }} >Teachers</Button>
                    </Link>
                </div>
                <ParentsVerification />
            </div>
        </div>
    )
}

export default Parent