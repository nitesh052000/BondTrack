import React, { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [networkInfo, setNetworkInfo] = useState(
    navigator.connection || { effectiveType: "unknown", downlink: "?" }
  );

  useEffect(() => {
    const updateStatus = () => setNetworkInfo(navigator.connection);
    navigator.connection?.addEventListener("change", updateStatus);

    return () =>
      navigator.connection?.removeEventListener("change", updateStatus);
  }, []);

  return (
    <div className="network">
      <strong>Network:</strong> {networkInfo.effectiveType?.toUpperCase()} (
      {networkInfo.downlink} Mbps)
    </div>
  );
}
