import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerLogin } from "../../../api/WorkerApi";

const useLoginHandler = () => {
  // Custom hook definition
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const workerMutation = useMutation({
    mutationFn: (credentials) => workerLogin(credentials),
    onSuccess: (data) => {
      console.log("Worker login successful:", data);
      navigate("/homescreen");
    },
    onError: (error) => {
      console.log("Worker login failed:", error);
    },
  });

  return {
    navigate,
    formData,
    setFormData,
    workerMutation,
  };
};

export default useLoginHandler;
