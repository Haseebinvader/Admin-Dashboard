/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./index.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ChatDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dataone, setdataone] = useState({});
  const getConversations = () => {
    axios
      .get(`/message/conversation/message/${id}`)
      .then((response) => {
        console.log(response);
        setdataone({
          oneimg: response?.data[0]?.conversationId?.members[0]?.profilepicture,
          twoimg: response?.data[1]?.conversationId?.members[1]?.profilepicture,
          onename: response?.data[0]?.conversationId?.members[0]?.name,
          twoname: response?.data[1]?.conversationId?.members[1]?.name,
        });
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
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {isLoading ? (
          <small className="text-blue-500 font-bold text-2xl">Loading...</small>
        ) : data?.length > 0 ? (
          <div>
            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
              <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div className="relative flex items-center space-x-4">
                  <div className="flex  ">
                    <img
                      src={
                        dataone?.oneimg ||
                        "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      }
                      alt=""
                      className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                    />
                    <div className="ml-[-1rem]">
                      <img
                        src={
                          dataone?.twoimg ||
                          "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                        }
                        alt=""
                        className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center">
                      <span className="text-gray-700 mr-3">
                        {dataone?.onename} ,{dataone?.twoname}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="messages"
                className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                {/* grey  */}
                {data?.map((message) =>
                  message?.conversationId?.members[0]?._id === message?.senderId?._id ? (
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                              {message?.message}
                            </span>
                          </div>
                        </div>
                        <img
                          src={
                            message?.conversationId?.members[0]?.profilepicture ||
                            "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          }
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                              {message?.message}
                            </span>
                          </div>
                        </div>
                        <img
                          src={
                            message?.conversationId?.members[1]?.profilepicture ||
                            "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          }
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <small>No Messages Found!</small>
        )}
      </div>
    </div>
  );
};

export default ChatDetails;
