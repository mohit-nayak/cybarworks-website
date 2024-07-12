import React from "react";
import MainLayout from "../components/layouts/main-layout";
import ContactUsBanner from "../components/sections/contact/contact-banner";
import ContactFormWithMap from "../components/sections/contact/contact-form-with-map";
import ContactSocialBanner from "../components/sections/contact/contact-social-banner";
import ContactFAQ from "../components/sections/contact/contact-faq";

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactUsBanner />
      <ContactFormWithMap />
      <ContactFAQ />
      <ContactSocialBanner />
    </MainLayout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact - CybarWorks</title>;
