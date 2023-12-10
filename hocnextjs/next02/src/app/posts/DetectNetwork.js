"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DetectNetwork = () => {
  useEffect(() => {
    window.addEventListener("online", () => {
      toast.success("Đã kết nối Internet");
    });
    window.addEventListener("offline", () => {
      toast.error("Mất kết nối Internet");
    });
  }, []);
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default DetectNetwork;
