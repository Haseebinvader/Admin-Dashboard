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

const DetailsRequests = () => {
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

  const getPayment = (cid, sid) => {
    axios
      .post("/course/getpaymentbyuser", {
        studentId: sid,
        courseId: cid,
      })
      .then((response) => {
        console.log(response);
        setreqdata(response.data.data);
        setpayId(response.data.data[0]?._id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    axios
      .post(`/course/requestforcourse/${id}`)
      .then((response) => {
        console.log(response);
        setstudentId(response.data.data.docs?.studentId?._id);
        setcourseId(response.data.data.docs?.courseId?._id);
        getPayment(
          response.data.data.docs?.courseId?._id,
          response.data.data.docs?.studentId?._id
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  const EnrollCourse = () => {
    setisDoneEnroll(true);
    axios
      .patch(`/course/enroll/${courseId}`, {
        studentId: studentId,
      })
      .then((res) => {
        console.log(res.data);
        AcceptRequest();
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
  const AcceptRequest = () => {
    axios
      .post(`/course/acceptRequest/${id}`)
      .then((data) => {
        console.log(data);
        completepayment();
      })
      .catch((err) => console.log(err));
  };
  const completepayment = () => {
    axios
      .post(`/course/completepayment/${payId}`)
      .then((data) => {
        console.log(data);
        AddEarningTeacher();
      })
      .catch((err) => console.log(err));
  };
  const AddEarningTeacher = () => {
    axios
      .post(
        `/teacher/addearnings/${reqdata[0]?.instructor}`,
        {
          earnings: parseInt(
            reqdata[0]?.instructorAmount ? reqdata[0]?.instructorAmount : 0
          ),
        }
      )
      .then((data) => {
        console.log(data);
        AddEarningTeacherforwidthdraw();
      })
      .catch((err) => console.log(err));
  };
  const AddEarningTeacherforwidthdraw = () => {
    axios
      .post(
        `/teacher/addearningsforwithdraw/${reqdata[0]?.instructor}`,
        {
          earnings: parseInt(
            reqdata[0]?.instructorAmount ? reqdata[0]?.instructorAmount : 0
          ),
        }
      )
      .then((data) => {
        console.log(data);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Student Enrolled Successfully",
          showConfirmButton: false,
          timer: 3500,
        });
        setisDoneEnroll(false);
        navigate("/EnrollRequest");
      })
      .catch((err) => console.log(err));
  };
  const Rejectpayment = () => {
    axios
      .post(`/course/rejectpayment/${payId}`)
      .then((data) => {
        console.log(data);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Student Enrollment Rejected Successfully",
          showConfirmButton: false,
          timer: 3500,
        });
        setisRejectEnroll(false);
        navigate("/EnrollRequest");
      })
      .catch((err) => console.log(err));
  };
  const RejectRequest = () => {
    setisRejectEnroll(true);
    axios
      .post(`/course/rejectRequest/${id}`)
      .then((data) => {
        console.log(data);
        Rejectpayment();
      })
      .catch((err) => {
        console.log(err);
        setisRejectEnroll(false);
      });
  };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="cardpayment">
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Payment Details"
              subheader={reqdata[0]?.createdAt?.slice(0, 10)}
            />
            <CardMedia
              component="img"
              height="auto"
              image={reqdata[0]?.paymentFile}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <span className="recptId">Reciept Id:</span>{" "}
                {reqdata[0]?.recieptId}
              </Typography>
            </CardContent>
            {isDoneEnroll ? (
              <small>Enrolling...</small>
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
                <IconButton aria-label="share" onClick={() => RejectRequest()}>
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

export default DetailsRequests;
