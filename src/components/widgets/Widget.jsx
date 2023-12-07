/* eslint-disable react/prop-types */
import "./widget.scss"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import { useNavigate } from "react-router-dom"

const Widget = ({ type, dataanl }) => {
  let data
  const navigate = useNavigate()
  //temporary

  switch (type) {
    case "user":
      data = {
        title: "VERIFIED STUDENTS",
        isMoney: false,
        link: "See all students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      }
      break
    case "order":
      data = {
        title: "VERIFIED TEACHERS",
        isMoney: false,
        link: "View all teachers",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      }
      break
    case "earning":
      data = {
        title: "VERIFIED Parents",
        isMoney: true,
        link: "View all parents",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      }
      break
    case "balance":
      data = {
        title: "Earnings",
        isMoney: true,

        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      }
      break
    default:
      break
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {type === "balance" ? "$" : ""}
          {dataanl}
        </span>
        <span
          className="link"
          onClick={() =>
            navigate(
              `/${
                type === "user"
                  ? "studentsrecord"
                  : type === "order"
                  ? "teachersrecord"
                  : "parentsrecord"
              }`
            )
          }
        >
          {data.link}
        </span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  )
}

export default Widget
