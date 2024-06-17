import React from "react";
import Features2 from "../features-2";

const features = [
  "Network management",
  "Server management",
  "Patch management",
  "Antivirus protection for endpoints",
  "On-Demand services",
  "Spam filtering for email systems",
];

const ItServicesFeaturesList = () => {
  return (
    <Features2
      title="What does our Managed IT services include?"
      featuresList={features}
      className="pb-10"
    />
  );
};

export default ItServicesFeaturesList;
