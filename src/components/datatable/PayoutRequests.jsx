/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./datatable.scss";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PayoutRequests() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/getallpayment")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="tablerequets">
      {data?.length > 0 ? (
        data?.map((data) => (
          <Card sx={{ minWidth: 275 }} key={data?._id}>
            <CardContent>
              <div className="carduper">
                <div>
                  <span className="amount">$ {data?.amount}</span>
                </div>
                <div>
                  <span
                    className={
                      data?.status === "pending"
                        ? "pamount "
                        : data?.status === "completed"
                        ? "camount "
                        : "ramount "
                    }
                  >
                    {data?.status}
                  </span>
                </div>
              </div>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Requested&nbsp;By:
              </Typography>
              <Typography variant="h5" component="div">
                {data?.instructor?.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => navigate(`/payoutrequestdetail/${data?._id}`)}
              >
                Show&nbsp;Details
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <small>No Data Found!</small>
      )}
    </div>
  );
}
