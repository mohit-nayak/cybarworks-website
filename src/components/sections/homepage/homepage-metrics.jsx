import React from "react";
import NumberMetrics from "../number-metrics";

const metricsData = [
  {
    label: "Years of experience",
    value: "28+",
  },
  {
    label: "IT issues resolved",
    value: "98%",
  },
  {
    label: "Clients served",
    value: "500+",
  },
  {
    label: "ROI of Clients",
    value: "35%",
  },
];

const HomepageMetrics = () => {
  return <NumberMetrics metrics={metricsData} />;
};

export default HomepageMetrics;
