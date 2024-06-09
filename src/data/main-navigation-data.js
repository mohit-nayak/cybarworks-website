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
          url: "/services/managed-it",
        },
        {
          name: "Security Services",
          url: "/services/security",
        },
        {
          name: "IT Consulting",
          url: "/services/it-consulting",
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
