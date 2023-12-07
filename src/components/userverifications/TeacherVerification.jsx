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

export default function TeacherVerification() {
  const navigate = useNavigate();
  const [Allusers, setAllusers] = React.useState([]);
  const [isloading, setisloading] = React.useState(false)
  const getAllusers = () => {
    setisloading(true)
    axios
      .get("/admin/teachers/all")
      .then((res) => {
        console.log(res);
        setAllusers(res.data.data.docs);
            setisloading(false)

      })
      .catch((err) => {
        console.log(err);
            setisloading(false)
            setAllusers([])

      });
  };
  React.useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="mb-5 text-blue-500 text-[15px]">
        Users Profile Verification
      </h1>
      {isloading ? <small className="text-blue-500 text-[20px]">Loading...</small> : <div className="flex justify-start gap-3 flex-wrap">
        {Allusers?.filter((data) => data?.profileverify === "pending")?.length > 0 ? (
          Allusers?.filter((data) => data?.profileverify === "pending")?.map(
            (data) => (
              <Card sx={{ maxWidth: 345 }} key={data?._id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={data?.profilepicture || "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="text-blue-500 font-semibold">
                      {data?.email}
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="text-green-500 font-bold text-[15px]">
                      {data?.address}
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate(`/TeacherDetails/${data?._id}/verify`)}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            )
          )
        ) : (
          <small className="text-red-500">No Request Found!</small>
        )}
      </div>}
    </div>
  );
}
