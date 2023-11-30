/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";

export default function DetailsTeacher({ id, type }) {
  const navigate = useNavigate();

  const [Allusers, setAllusers] = React.useState([]);
  const [isloading, setisloading] = React.useState(false);
  const [isloadingac, setisloadingac] = React.useState(false);
  const [isloadingre, setisloadingre] = React.useState(false);

  const getAllusers = () => {
    setisloading(true);

    axios
      .get("/admin/teachers/all")
      .then((res) => {
        console.log(res);
        setAllusers(res.data.data.docs);
        setisloading(false);
      })
      .catch((err) => {
        console.log(err);
        setisloading(false);
        setAllusers([]);
      });
  };
  const AcceptRequest = () => {
    setisloadingac(true);

    axios
      .post(`/admin/users-accept/${id}`)
      .then((res) => {
        console.log(res);
        alert("Request Accepted Successfully!");
        setisloadingac(false);
        navigate("/teachersverification");
      })
      .catch((err) => {
        console.log(err);
        setisloadingac(false);
      });
  };
  const Rejectrequest = () => {
    setisloadingre(true);

    axios
      .post(`/admin/users-reject/${id}`)
      .then((res) => {
        console.log(res);
        alert("Request Rejected Successfully!");
        setisloadingre(false);
        navigate("/teachersverification");
      })
      .catch((err) => {
        console.log(err);
        setisloadingre(false);
      });
  };
  React.useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="p-5">
      

      {isloading ? (
        <small className="text-blue-500 text-[20px]">Loading...</small>
      ) : (
        <div className="flex justify-start gap-3 flex-wrap">
          {Allusers?.length > 0 ? (
            Allusers?.filter((data) => data?._id === id)?.map((data) => (
              <Card sx={{ maxWidth: 500 }} key={data?._id}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={data?.profilepicture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.name}
                  </Typography>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Email:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.email}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Address:&nbsp;
                      </span>
                      <span className="text-green-500 font-bold text-[15px]">
                        {data?.address}
                      </span>
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Degree:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.degreeName}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Experience:&nbsp;
                      </span>
                      <span className="text-green-500 font-bold text-[15px]">
                        {data?.teachingsExperience} Years
                      </span>
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Phone#:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.phone}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Passing&nbsp;Year:&nbsp;
                      </span>
                      <span className="text-green-500 font-bold text-[15px]">
                        {data?.degreeYear}
                      </span>
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Subjects:&nbsp;
                      </span>
                      {data?.subjects?.map((data) => (
                        <span
                          className="text-blue-500 font-semibold pl-3 text-[15px]"
                          key={data}
                        >
                          {data},
                        </span>
                      ))}
                    </Typography>
                  </div>
                </CardContent>
                {type === "verify" && <CardActions>
                  {( isloadingac) || isloadingre ? (
                    <small>Processing...</small>
                  ) : (
                    <>
                      {" "}
                      <Button size="small" onClick={() => AcceptRequest()}>
                        <span className="text-green-500">Accept</span>
                      </Button>
                      <Button size="small" onClick={() => Rejectrequest()}>
                        <span className="text-red-500">Reject</span>
                      </Button>{" "}
                    </>
                  )}
                </CardActions>}
              </Card>
            ))
          ) : (
            <small className="text-red-500">No Request Found!</small>
          )}
        </div>
      )}
    </div>
  );
}
