import React from "react";
import { Link } from "gatsby";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";

const ContactMap = () => {
  return (
    <div>
      <img
        src="https://www.joomtut.com/images/extensions/plugin-jt-contact-maps/plugin-jt-contact-maps-your-image.png"
        width={350}
        height={350}
        className="aspect-square h-full max-h-[350px] w-full object-cover"
        alt="Google maps"
      />
      <div className="mt-10 space-y-4 px-4">
        <Link
          to={`callto:(480) 948-8029`}
          className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
        >
          <CallIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
          (480) 948-8029
        </Link>
        <Link
          to={`mailto:info@cybarworks.com`}
          className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
        >
          <EmailIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
          info@cybarworks.com
        </Link>
        <div className="flex items-center gap-3 font-light text-secondary-semi-light">
          <LocationIcon className="aspect-square h-5 w-5 fill-secondary-semi-light" />
          <div>
            <div>5440 S Lakeshore Drive, Suite 102</div>
            <div>Tempe, AZ 85283029</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
