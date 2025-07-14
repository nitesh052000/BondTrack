import React from "react";
import InvestmentForm from "../components/InvestmentForm";
import { useNavigate } from "react-router-dom";

export default function InvestmentFormPage() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    sessionStorage.setItem("investment", JSON.stringify(data));
    navigate("/dashboard");
  };

  return <InvestmentForm onSubmit={handleSubmit} />;
}
