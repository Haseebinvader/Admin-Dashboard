/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./index.scss";
import Swal from "sweetalert2";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DetailsRequestsPayout = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [isDoneEnroll, setisDoneEnroll] = useState(false);
  const [isRejectEnroll, setisRejectEnroll] = useState(false);
  const [studentId, setstudentId] = useState("");
  const [courseId, setcourseId] = useState("");
  const [payId, setpayId] = useState("");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { id } = useParams();
  const [reqdata, setreqdata] = useState([]);
  const [teachherdara, setteachherdara] = useState({
    amount: 0,
    tId: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getPayment = () => {
    axios
      .get(`http://localhost:8000/api/admin/getspecificpayment/${id}`)
      .then((response) => {
        console.log("res", response);
        setreqdata(response.data.data[0]);
        setpayId(response.data.data[0]?._id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getPayment();
  }, []);
  const EnrollCourse = () => {
    console.log(reqdata?._id);
    setisDoneEnroll(true);
    axios
      .post(`http://localhost:8000/api/admin/acceptpayment/${reqdata?._id}`)
      .then((res) => {
        console.log(res.data);
        EnrollCourseforuser();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err?.response.data.message}`,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        setisDoneEnroll(false);
      });
  };
  const EnrollCourseforuser = () => {
    console.log(reqdata?._id);
    setisDoneEnroll(true);
    axios
      .post(
        `http://localhost:8000/api/admin/acceptpaymentforuser/${reqdata?.instructor?._id}`,{

        }
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Payment CLeared Successfully",
          showConfirmButton: false,
          timer: 3500,
        });
        setisDoneEnroll(false);
        navigate("/PayoutRequest");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err?.response.data.message}`,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        setisDoneEnroll(false);
      });
  };

  const Rejectpayment = () => {
    setisRejectEnroll(true);
    axios
      .post(`http://localhost:8000/api/admin/rejectpayment/${id}`, {
        amount: reqdata?.amount,
      })
      .then((data) => {
        console.log(data);
        Rejectpaymentforuser();
      })
      .catch((err) => {
        setisRejectEnroll(false);
        console.log(err);
      });
  };
  const Rejectpaymentforuser = () => {
    setisRejectEnroll(true);
    axios
      .post(`http://localhost:8000/api/admin/rejectpaymentforuser/${id}`, {
        amount: reqdata?.amount,
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Payout Rejected Successfully",
          showConfirmButton: false,
          timer: 3500,
        });
        setisRejectEnroll(false);
        navigate("/PayoutRequest");
      })
      .catch((err) => {
        setisRejectEnroll(false);
        console.log(err);
      });
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="cardpayment">
          {" "}
          <Card sx={{ minWidth: 275 }} key={reqdata?._id}>
            <CardContent>
              <p>
                <span className="amount">$ {reqdata?.amount}</span>
              </p>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Requested&nbsp;By:
              </Typography>
              <Typography variant="h5" component="div">
                {reqdata?.instructor?.name}
              </Typography>
            </CardContent>
            {isDoneEnroll ? (
              <small>Processing...</small>
            ) : isRejectEnroll ? (
              <small>Rejecting...</small>
            ) : (
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    EnrollCourse();
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon color="success" />
                </IconButton>
                <IconButton aria-label="share" onClick={() => Rejectpayment()}>
                  <CancelOutlinedIcon color="error" />
                </IconButton>
              </CardActions>
            )}
          </Card>
        </div>{" "}
      </div>
    </div>
  );
};

export default DetailsRequestsPayout;
