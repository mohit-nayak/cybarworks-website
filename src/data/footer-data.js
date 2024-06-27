import logo from "../assets/images/logo-secondary.png";

const footerData = {
  logo,
  logoAlt: "Cyber Works",
  tagline: "Making IT work for you",
  navigation: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Support",
      url: "/support",
    },
  ],
  services: [
    {
      name: "Managed IT Services",
      url: "/services/it-services",
    },
    {
      name: "Security Services",
      url: "/services/security-services",
    },
    {
      name: "IT Consulting",
      url: "/services/consulting-services",
    },
  ],
  contact: {
    location: ["5440 S Lakeshore Drive, Suite 102", "Tempe, AZ 85283029"],
    email: "info@cybarworks.com",
    call: "(480) 948-8029",
  },
  socialLinks: {
    facebook: "https://google.com",
    x: "https://google.com",
    googlePlus: "https://google.com",
    instagram: "https://google.com",
  },
  copyright: "Copyright © 2024 — All Rights Reserved @CybarWorks, INC",
};

export default footerData;
