import React from "react";
import { Link } from "gatsby";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";

const ContactMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.847178128184!2d-111.92260272390983!3d33.37505557341948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzMwLjIiTiAxMTHCsDU1JzEyLjEiVw!5e0!3m2!1sen!2sin!4v1720802551389!5m2!1sen!2sin"
        width="350"
        height="350"
        title="map location"
        allowfullscreen=""
        loading="lazy"
        className="aspect-square h-full max-h-[350px] w-full rounded-lg object-cover lg:rounded-none"
        referrerpolicy="no-referrer-when-downgrade"
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
