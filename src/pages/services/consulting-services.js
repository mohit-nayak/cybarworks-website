import * as React from "react";
import MainLayout from "../../components/layouts/main-layout";
import ConsultingServicesBanner from "../../components/sections/consulting-services/consulting-services-banner";
import ConsultingServicesOverview from "../../components/sections/consulting-services/consulting-services-overview";
import ConsultingServicesFeaturesList from "../../components/sections/consulting-services/consulting-services-features-list";
import ConsultingServicesMetrics from "../../components/sections/consulting-services/consulting-services-metrics";
import ConsultingServicesWhy from "../../components/sections/consulting-services/consulting-services-why";
import ConsultingServicesTestimonials from "../../components/sections/consulting-services/consulting-services-testimonials";
import ConsultingServicesCta from "../../components/sections/consulting-services/consulting-services-cta";

const ConsultingServicesPage = () => {
  return (
    <MainLayout>
      <ConsultingServicesBanner />
      <ConsultingServicesOverview />
      <ConsultingServicesFeaturesList />
      <ConsultingServicesMetrics />
      <ConsultingServicesWhy />
      <ConsultingServicesTestimonials />
      <ConsultingServicesCta />
    </MainLayout>
  );
};

export default ConsultingServicesPage;

export const Head = () => <title>Consulting Services - CybarWorks</title>;
