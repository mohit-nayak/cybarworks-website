import React from "react";
import MainLayout from "../components/layouts/main-layout";
import SupportBanner from "../components/sections/support/support-banner";
import SupportCTA from "../components/sections/support/support-cta";
import SupportOptions from "../components/sections/support/support-options";

const SupportPage = () => {
  return (
    <MainLayout>
      <SupportBanner />
      <SupportOptions />
      <SupportCTA />
    </MainLayout>
  );
};

export default SupportPage;
