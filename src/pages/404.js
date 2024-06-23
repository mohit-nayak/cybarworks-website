import React from "react";
import MainLayout from "../components/layouts/main-layout";
import ContactUsBanner from "../components/sections/contact/contact-banner";
import ContactFormWithMap from "../components/sections/contact/contact-form-with-map";
import ContactSocialBanner from "../components/sections/contact/contact-social-banner";
import ContactFAQ from "../components/sections/contact/contact-faq";
import NotFoundBanner from "../components/sections/not-found-banner";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFoundBanner />
    </MainLayout>
  );
};

export default NotFoundPage;
