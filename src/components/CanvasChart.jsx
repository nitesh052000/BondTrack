import React, { useEffect, useRef } from "react";

export default function CanvasChart({ investment }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { amount, rate, duration } = investment;
    const finalAmount = amount * Math.pow(1 + rate / 100, duration);

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#198754";
    const barHeight = (finalAmount - amount) * 0.03;
    ctx.fillRect(50, canvas.height - barHeight, 100, barHeight);

    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    ctx.fillText(`Return: ₹${finalAmount.toFixed(2)}`, 50, 20);
  }, [investment]);

  return <canvas ref={canvasRef} width={300} height={150} className="canvas" />;
}
