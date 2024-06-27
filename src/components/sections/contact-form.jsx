import React from "react";
import Input from "../common/input";
import AppButton from "../common/app-button";

const ContactForm = ({ title = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submtting form", e.target.elements.name);
  };

  return (
    <div>
      <div className="mb-14 bg-secondary-gradient-semi-dark bg-clip-text text-2xl font-extralight italic text-transparent">
        "{title}"
      </div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <Input placeholder="Name" type="text" name="name" required={false} />
        <Input placeholder="Email" type="email" name="email" required={false} />
        <Input placeholder="Company Name" type="text" name="company" />
        <Input placeholder="Message" type="textarea" name="message" />
        <AppButton type="submit" childClassName="!py-2.5">
          Send Message
        </AppButton>
      </form>
    </div>
  );
};

export default ContactForm;
