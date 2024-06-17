import React from "react";
import Features2 from "../features-2";

const features = [
  "NIST compliance",
  "ISO implementation",
  "SOC support",
  "GDPR assistance",
  "PCI compliance",
  "HIPAA solutions",
];

const SecurityServicesFeaturesList = () => {
  return (
    <Features2
      title="What does our Security services include?"
      featuresList={features}
      className="pb-10"
    />
  );
};

export default SecurityServicesFeaturesList;
