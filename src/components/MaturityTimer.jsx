import React, { useEffect, useState } from "react";

export default function MaturityTimer({ investment }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Calculate the maturity date from today
    const maturityDate = new Date();
    maturityDate.setFullYear(maturityDate.getFullYear() + investment.duration);

    const updateTime = () => {
      const now = new Date();
      const diff = maturityDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [investment]);

  return (
    <div className="timer">
      <strong>Maturity Date:</strong>{" "}
      {new Date().getFullYear() + investment.duration}-
      {new Date().getMonth() + 1}-{new Date().getDate()}
      <br />
      <strong>Time till Maturity:</strong>{" "}
      {timeLeft.expired
        ? "✅ Investment Matured"
        : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </div>
  );
}
