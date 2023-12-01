/* eslint-disable react/no-unknown-property */
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

export default function AccountsComp() {
  const navigate = useNavigate();
  const [Allusers, setAllusers] = React.useState([]);
  const [isloading, setisloading] = React.useState(false);
  const [isloadingadd, setisloadingadd] = React.useState(false);
  const [isloadingdel, setisloadingdel] = React.useState(false);
  const [delId, setdelId] = React.useState("");
  const [accData, setaccData] = React.useState({
    bankName: "",
    title: "",
    accNumber: "",
  });
  const getAllusers = () => {
    setisloading(true);
    setaccData({
      bankName: "",
      title: "",
      accNumber: "",
    });
    axios
      .get("/bank/account")
      .then((res) => {
        console.log(res);
        setAllusers(res.data);
        setisloading(false);
      })
      .catch((err) => {
        console.log(err);
        setisloading(false);
        setAllusers([]);
      });
  };
  const AddAccount = (e) => {
    e.preventDefault();
    setisloadingadd(true);
    axios
      .post("/bank", accData)
      .then((res) => {
        console.log(res);
        alert("Account Added Successfully!");
        setisloadingadd(false);
        getAllusers();
      })
      .catch((err) => {
        console.log(err);
        setisloadingadd(false);
        alert(err.response.data.message);
      });
  };
  const DeleteAccount = (id) => {
    setisloadingdel(true);
    axios
      .delete(`/bank/account/remove/${id}`, accData)
      .then((res) => {
        console.log(res);
        alert("Account Deleted Successfully!");
        setisloadingdel(false);
        getAllusers();
      })
      .catch((err) => {
        console.log(err);
        setisloadingdel(false);
        alert(err.response.data.message);
      });
  };
  React.useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="p-5">
      <div className="datatableTitle"></div>
      <h1 className="mb-5 mt-3 text-blue-500 text-[15px]">Bank Accounts</h1>
      <div>
        <form class="max-w-sm mx-auto" onSubmit={AddAccount}>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
              value={accData?.title}
              onChange={(e) => {
                setaccData({ ...accData, title: e.target.value });
              }}
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bank Name
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="HBL"
              required
              value={accData?.bankName}

              onChange={(e) => {
                setaccData({ ...accData, bankName: e.target.value });
              }}
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Account Nummber
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xxxxxxxxxxx"
              required
              value={accData?.accNumber}

              onChange={(e) => {
                setaccData({ ...accData, accNumber: e.target.value });
              }}
            />
          </div>

          <button
            disabled={isloadingadd}
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isloadingadd ? "Adding..." : "Submit"}
          </button>
        </form>
      </div>
      {isloading ? (
        <small className="text-blue-500 text-[20px]">Loading...</small>
      ) : (
        <div className="flex justify-start gap-5 flex-wrap mt-4">
          {Allusers?.length > 0 ? (
            Allusers?.map((data) => (
              <Card sx={{ maxWidth: 345 }} key={data?._id}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="text-blue-500 font-semibold">
                      {data?.bankName}
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="text-green-500 font-bold text-[15px]">
                      {data?.accNumber}
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    disabled={isloadingdel}
                    onClick={() => {
                      setdelId(data?._id);
                      DeleteAccount(data?._id);
                    }}
                  >
                    {isloadingdel && delId === data?._id
                      ? "Deleting..."
                      : "Delete"}
                  </Button>
                </CardActions>
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
