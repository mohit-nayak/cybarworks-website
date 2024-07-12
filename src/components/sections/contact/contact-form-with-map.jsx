import React from "react";
import Title from "../../common/title";
import ContactForm from "../../sections/contact-form";
import ContactMap from "../../sections/contact-map";

const ContactFormWithMap = () => {
  return (
    <section className="mx-auto max-w-6xl pb-28 pt-16 md:px-8 md:pt-0">
      <Title variant="secondary" className="mb-6 px-8 md:px-0 lg:mb-32">
        Get in touch with us however you wish to
      </Title>

      <div className="overflow-hidden p-[1px] md:rounded-3xl md:bg-primary-gradient">
        <div className="grid grid-cols-1 rounded-3xl bg-primary-dark md:grid-cols-2">
          <div className="px-8 md:py-8 md:!pb-2 lg:col-span-1 lg:px-12 lg:py-16">
            <ContactForm title="Reach out to us and get immediate response from our IT experts." />
          </div>
          <div className="bg-secondary-gradient-light px-4 py-6 md:px-6 lg:col-span-1">
            <ContactMap title="Reach out to us and get immediate response from our IT experts." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWithMap;
