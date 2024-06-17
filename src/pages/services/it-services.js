import * as React from "react";
import MainLayout from "../../components/layouts/main-layout";
import ItServicesBanner from "../../components/sections/it-services/it-services-banner";
import ItServicesOverview from "../../components/sections/it-services/it-services-overview";
import ItServicesFeaturesList from "../../components/sections/it-services/it-services-features-list";
import ItServicesMetrics from "../../components/sections/it-services/it-services-metrics";
import ItServicesWhy from "../../components/sections/it-services/it-services-why";
import ItServicesTestimonials from "../../components/sections/it-services/it-services-testimonials";
import ItServicesCta from "../../components/sections/it-services/it-services-cta";

const ITServicesPage = () => {
  return (
    <MainLayout>
      <ItServicesBanner />
      <ItServicesOverview />
      <ItServicesFeaturesList />
      <ItServicesMetrics />
      <ItServicesWhy />
      <ItServicesTestimonials />
      <ItServicesCta />
    </MainLayout>
  );
};

export default ITServicesPage;

export const Head = () => <title>Cyber Works - IT Services</title>;
