/* eslint-disable no-unused-vars */

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function ParentsTable() {
  const navigate = useNavigate();
  const [Allusers, setAllusers] = React.useState([]);
  const [isloading, setisloading] = React.useState(false);
  const getAllusers = () => {
    setisloading(true);
    axios
      .get("/admin/parents/all")
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
  React.useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="p-5">
      <div className="datatableTitle">
        <div>
          <Link to="/studentsrecord">
            <Button variant="outlined" color="success">
              Students
            </Button>
          </Link>
          <Link to="/teachersrecord">
            <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
              Teachers
            </Button>
          </Link>
          <Link to="/parentsrecord">
            <Button variant="outlined" color="success" sx={{ ml: "10px" }}>
              Parents
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="mb-5 mt-3 text-blue-500 text-[15px]">Parents</h1>
      {isloading ? (
        <small className="text-blue-500 text-[20px]">Loading...</small>
      ) : (
        <div className="flex justify-start gap-5 flex-wrap">
          {Allusers?.length > 0 ? (
            Allusers?.map((data) => (
              <Card sx={{ maxWidth: 345 }} key={data?._id}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={
                    data?.profilepicture ||
                    "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.name}
                  </Typography>
                  <div className="mt-3 flex flex-col gap-2">
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
                        Phone#:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.phone}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Phone2:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.phone2}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Address:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.address}
                      </span>
                    </Typography>
                  </div>
                </CardContent>
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
