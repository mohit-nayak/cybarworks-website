import React from "react";
import Features2 from "../features-2";

const features = [
  "Cloud implementation",
  "Comprehensive Assessments",
  "System architecture design",
  "Project-based Solutions",
  "Network architecture design",
  "Other IT Consultancy",
];

const ConsultingServicesFeaturesList = () => {
  return (
    <Features2
      title="What does our Consulting services include?"
      featuresList={features}
      className="pb-10"
    />
  );
};

export default ConsultingServicesFeaturesList;
