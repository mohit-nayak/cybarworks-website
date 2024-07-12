import logo from "../assets/images/logo.png";

const mainNavigationData = {
  logo,
  logoAlt: "Cyber Works",
  navLinks: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      children: [
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
    },
    {
      name: "Contact us",
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
  contact: {
    location: {
      googleMapLink: "https://maps.app.goo.gl/HkWtFJ4p1q4367pf8",
      address: ["5440 S Lakeshore Drive, Suite 102", "Tempe, AZ 85283029"],
    },
    email: "info@cybarworks.com",
    call: "(480) 948-8029",
  },
};

export default mainNavigationData;
