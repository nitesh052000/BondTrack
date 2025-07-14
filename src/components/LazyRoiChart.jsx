import React, { useEffect, useRef, useState } from "react";

export default function LazyRoiChart({ investment }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="lazy-chart">
      {visible ? (
        <p>
          📈 ROI:{" "}
          {(
            (Math.pow(1 + investment.rate / 100, investment.duration) - 1) *
            100
          ).toFixed(2)}
          %
        </p>
      ) : (
        <p>Loading ROI chart...</p>
      )}
    </div>
  );
}
