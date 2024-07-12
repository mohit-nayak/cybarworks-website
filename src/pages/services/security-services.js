import * as React from "react";
import MainLayout from "../../components/layouts/main-layout";
import SecurityServicesBanner from "../../components/sections/security-services/security-services-banner";
import SecurityServicesOverview from "../../components/sections/security-services/security-services-overview";
import SecurityServicesFeaturesList from "../../components/sections/security-services/security-services-features-list";
import SecurityServicesMetrics from "../../components/sections/security-services/security-services-metrics";
import SecurityServicesWhy from "../../components/sections/security-services/security-services-why";
import SecurityServicesTestimonials from "../../components/sections/security-services/security-services-testimonials";
import SecurityServicesCta from "../../components/sections/security-services/security-services-cta";

const SecurityServicesPage = () => {
  return (
    <MainLayout>
      <SecurityServicesBanner />
      <SecurityServicesOverview />
      <SecurityServicesFeaturesList />
      <SecurityServicesMetrics />
      <SecurityServicesWhy />
      <SecurityServicesTestimonials />
      <SecurityServicesCta />
    </MainLayout>
  );
};

export default SecurityServicesPage;

export const Head = () => <title>Security Services - CybarWorks</title>;
