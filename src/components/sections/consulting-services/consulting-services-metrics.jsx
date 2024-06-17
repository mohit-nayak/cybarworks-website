import React from "react";
import NumberMetrics from "../number-metrics";

const metrics = [
  {
    label: "Technology Implementations",
    value: "1.7K+",
  },
  {
    label: "Tech Assessments Conducted",
    value: "1K+",
  },
  {
    label: "Strategic Roadmaps Developed",
    value: "900+",
  },
  {
    label: "Satisfied Clients",
    value: "89%",
  },
];

const ConsultingServicesMetrics = () => {
  return <NumberMetrics metrics={metrics} />;
};

export default ConsultingServicesMetrics;
