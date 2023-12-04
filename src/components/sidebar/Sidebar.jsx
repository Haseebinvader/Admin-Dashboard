import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"
import { funcisAuthorized } from "../../Redux/loginslice"
import { useDispatch } from "react-redux"

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  const dispatchs = useDispatch()
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Tutor 4u</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/studentsrecord" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/EnrollRequest" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Enroll Requests</span>
            </li>
          </Link>
          <Link to="/PayoutRequest" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>PayOut Requests</span>
            </li>
          </Link>
          <Link to="/Chats" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Chat Record</span>
            </li>
          </Link>
          <Link to="/teachersverification" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Verifications</span>
            </li>
          </Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">USEFUL</p>
          <Link to="/BankAccounts" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Bank Accounts</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}
          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={() => dispatchs(funcisAuthorized(false))}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
