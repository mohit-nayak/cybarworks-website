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
    location: "",
    email: "",
    call: "",
  },
};

export default mainNavigationData;
