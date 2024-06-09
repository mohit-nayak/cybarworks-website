/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, #9852C5, #8129F1, #007CFF, #239EDB)",
      },
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-semi-dark": "var(--primary-semi-dark)",
        "primary-dark": "var(--primary-dark)",
        "secondary-semi-light": "var(--secondary-semi-light)",
        "secondary-light": "var(--secondary-light)",
        "secondary-semi-dark": "var(--secondary-semi-dark)",
        "secondary-dark": "var(--secondary-dark)",
        "tertiary-semi-dark": "var(--tertiary-semi-dark)",
        "tertiary-dark": "var(--tertiary-dark)",
      },
      fontSize: {
        // "base-lg": "20px",
        "title-primary-lg": "64px",
        "title-primary-sm": "38px",
      },
      lineHeight: {
        "title-primary-lg": "72px",
        "title-primary-sm": "44px",
      },
      maxWidth: {
        "8xl": "85rem",
      },
    },
  },
  plugins: [],
};
