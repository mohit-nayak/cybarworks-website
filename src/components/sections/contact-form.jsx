import React from "react";
import Input from "../common/input";

const ContactForm = ({ title = "" }) => {
  return (
    <div>
      <div className="mb-14 bg-secondary-gradient-semi-dark bg-clip-text text-2xl font-extralight italic text-transparent">
        "{title}"
      </div>
      <form className="space-y-7">
        <Input placeholder="Name" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Company Name" type="text" name="company" />
        <Input placeholder="Message" type="textarea" name="message" />
      </form>
    </div>
  );
};

export default ContactForm;
