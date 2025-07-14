import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CanvasChart from "../components/CanvasChart";
import NetworkStatus from "../components/NetworkStatus";
import MaturityTimer from "../components/MaturityTimer";
import LazyRoiChart from "../components/LazyRoiChart";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("investment");
    if (data) {
      setInvestment(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!investment) return null;

  return (
    <section className="results-card">
      <CanvasChart investment={investment} />
      <NetworkStatus />
      <MaturityTimer investment={investment} />
      <LazyRoiChart investment={investment} />
    </section>
  );
}
