/* eslint-disable react/no-unescaped-entities */
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

export default function DetailsStudents({ id }) {
  const navigate = useNavigate();

  const [Allusers, setAllusers] = React.useState([]);
  const [isloading, setisloading] = React.useState(false);
  const [isloadingac, setisloadingac] = React.useState(false);
  const [isloadingre, setisloadingre] = React.useState(false);

  const getAllusers = () => {
    setisloading(true);

    axios
      .get("/admin/students/all")
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
      <h1 className="mb-5 text-blue-500 text-[15px]">
        Student Profile  
      </h1>

      {isloading ? (
        <small className="text-blue-500 text-[20px]">Loading...</small>
      ) : (
        <div className="flex justify-start gap-3 flex-wrap">
          {Allusers?.length > 0 ? (
            Allusers?.filter((data) => data?._id === id)?.map((data) => (
              <Card sx={{ maxWidth: 600 }} key={data?._id}>
                
                <CardMedia
                className="h-[20rem]"
                  component="img"
                  alt="green iguana"
                  height={40}
                  image={data?.profilepicture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.name}
                  </Typography>
                  <div className="mt-3 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Email:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.email}
                      </span>
                    </Typography>
                   
                  </div>
                  <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Address:&nbsp;
                      </span>
                      <span className="text-green-500 font-bold text-[15px]">
                        {data?.address}
                      </span>
                    </Typography>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Grade:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.grade}
                      </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                      Category:&nbsp;
                      </span>
                      <span className="text-green-500 font-bold text-[15px]">
                        {data?.Category}  
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
                    
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Institute:&nbsp;
                      </span>
                       
                        <span
                          className="text-blue-500 font-semibold pl-3 text-[15px]"
                          key={data}
                        >
                          {data?.instituteName},
                        </span>
                      
                    </Typography>
                  </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                  <Typography gutterBottom variant="h5" component="div">
                    Parent's Details
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Name:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.parentName}
                      </span>
                    </Typography><Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Email:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.parentEmail}
                      </span>
                    </Typography><Typography variant="body2" color="text.secondary">
                      <span className="text-black font-semibold text-lg">
                        Phone#:&nbsp;
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {data?.parentphone}
                      </span>
                    </Typography>
                  </div>
                </CardContent>
                
              </Card>
            ))
          ) : (
            <small className="text-red-500">No Data Found!</small>
          )}
        </div>
      )}
    </div>
  );
}
