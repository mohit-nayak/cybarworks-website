import React from "react";
import NumberMetrics from "../number-metrics";

const metrics = [
  {
    label: "Support Tickets Resolved",
    value: "300+",
  },
  {
    label: "System Uptime Percentage",
    value: "99.1%",
  },
  {
    label: "Successful Remote Sessions",
    value: "98%",
  },
  {
    label: "Systems Patched",
    value: "600+",
  },
];

const ItServicesMetrics = () => {
  return <NumberMetrics metrics={metrics} />;
};

export default ItServicesMetrics;
