import React, { useEffect, useState } from "react";
import Input from "../common/input";
import AppButton from "../common/app-button";
import { submitContact } from "../../api/contact";

const ContactForm = ({ title = "" }) => {
  const [status, setStatus] = useState(null);

  const hideStatusMsg = () => setStatus(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e?.target?.elements?.name?.value ?? "",
      email: e?.target?.elements?.email?.value ?? "",
      company: e?.target?.elements?.company?.value ?? "",
      message: e?.target?.elements?.message?.value ?? "",
    };

    // Data submission API call
    submitContact(data)
      .then((res) => setStatus(true))
      .catch((err) => setStatus(false));
    console.log("Submtting form", data);
  };

  useEffect(() => {
    let timeout;
    if (status !== null && !timeout) setTimeout(hideStatusMsg, 5000);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [status]);

  return (
    <div>
      <div className="mb-6 bg-secondary-gradient-semi-dark bg-clip-text text-2xl font-extralight italic text-transparent md:mb-14">
        "{title}"
      </div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <Input placeholder="Name" type="text" name="name" required={true} />
        <Input placeholder="Email" type="email" name="email" required={true} />
        <Input
          placeholder="Company Name"
          type="text"
          name="company"
          required={true}
        />
        <Input placeholder="Message" type="textarea" name="message" />
        <AppButton type="submit" childClassName="!py-2.5">
          Send Message
        </AppButton>
      </form>
      <div className="mb-6 mt-2 h-4">
        {status !== null && (
          <>
            {status ? (
              <div className="text-secondary-dark">
                Message sent successfully!
              </div>
            ) : (
              <div className="text-red-500">
                Unable to send your message at the moment!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
