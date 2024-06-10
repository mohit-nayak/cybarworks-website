import * as React from "react";
import MainLayout from "../components/layouts/main-layout";
import HeroBanner from "../components/sections/hero-banner";
import HowWeHelp from "../components/sections/how-we-help";

const IndexPage = () => {
  return (
    <MainLayout>
      <HeroBanner
        title="Turning IT Concerns into Business Success"
        description="Welcome to CybarWorks, where we diligently provide effective and affordable IT assistance tailored for small to midsize businesses."
        ctaText="Contact Us Now"
      />
      <HowWeHelp />
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Cyber Works</title>;
