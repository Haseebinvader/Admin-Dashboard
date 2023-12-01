/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Allchats = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getConversations = () => {
    axios
      .get("/message/allconversations")
      .then((response) => {
        console.log(response);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getConversations();
  }, []);
  return (
    <div className="p-5">
      <div className="pb-8 pt-2">
        <h2 className="text-blue-500 font-bold text-2xl">Allchats</h2>
      </div>
      {isLoading ? (
        <small className="text-blue-500 font-bold text-2xl">Loading...</small>
      ) : data?.length > 0 ? (
        data?.map((cover) => (
          <div
            key={cover._id}
            className="w-1/2 border shadow-lg cursor-pointer rounded-lg px-4 my-2"
            onClick={() => navigate(`/ChatDetails/${cover?._id}`)}
          >
            <div className="flex gap-2">
              <div className="items-center align-middle pt-4">
                <AvatarGroup total={2}>
                  <Avatar
                    alt={cover?.members[0]?.name}
                    src={cover?.members[0]?.profilepicture}
                  />
                  <Avatar
                    alt={cover?.members[1]?.name}
                    src={cover?.members[1]?.profilepicture}
                  />
                </AvatarGroup>
              </div>
              <div className="items-center align-middle pt-5 pl-4">
                <div className="flex gap-1">
                  <p className="text-green-500 font-bold text-2xl">
                    {cover?.members[0]?.name?.split(" ")[0]}
                  </p>
                  <span className="text-blue-500 font-bold text-2xl">,</span>
                  <p className="text-green-500 font-bold text-2xl">
                    {cover?.members[1]?.name?.split(" ")[0]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-auto items-end">
              <p className="text-blue-500 font-semibold text-lg flex justify-end w-full items-end">
                CreatedAt: {cover?.createdAt?.slice(0, 10)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <small>No Data Found!</small>
      )}
    </div>
  );
};

export default Allchats;
