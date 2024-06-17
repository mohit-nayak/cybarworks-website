import React from "react";
import NumberMetrics from "../number-metrics";

const metrics = [
  {
    label: "Malware Blocked",
    value: "2K+",
  },
  {
    label: "Vulnerabilities Patched",
    value: "1K+",
  },
  {
    label: "Security Incidents Detected",
    value: "700+",
  },
  {
    label: "Threats Neutralized",
    value: "600+",
  },
];

const SecurityServicesMetrics = () => {
  return <NumberMetrics metrics={metrics} />;
};

export default SecurityServicesMetrics;
