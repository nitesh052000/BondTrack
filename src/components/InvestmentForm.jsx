import React, { useState } from "react";

export default function InvestmentForm({ onSubmit }) {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount: +amount, rate: +rate, duration: +duration });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Amount (₹):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <label>Interest Rate (%):</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        required
      />

      <label>Duration (years):</label>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />

      <button type="submit">Start Tracking</button>
    </form>
  );
}
