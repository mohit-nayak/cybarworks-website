import React from "react";
import Title from "../../common/title";
import ContactForm from "../../sections/contact-form";
import ContactMap from "../../sections/contact-map";

const ContactFormWithMap = () => {
  return (
    <section className="mx-auto max-w-6xl pb-28">
      <Title variant="secondary" className="mb-32">
        Get in touch with us however you wish to
      </Title>

      <div className="overflow-hidden rounded-3xl bg-primary-gradient p-[1px]">
        <div className="rounded-3xl bg-primary-dark lg:grid lg:grid-cols-2">
          <div className="px-12 py-16 lg:col-span-1">
            <ContactForm title="Reach out to us and get immediate response from our IT experts." />
          </div>
          <div className="bg-secondary-gradient-light px-6 py-6 lg:col-span-1">
            <ContactMap title="Reach out to us and get immediate response from our IT experts." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWithMap;
