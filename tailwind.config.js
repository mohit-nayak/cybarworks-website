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
        "secondary-gradient": "linear-gradient(to right, #0F80F8, #3CCBEB)",
        "secondary-gradient-semi-dark":
          "linear-gradient(to right, rgba(15, 128, 248, 0.9), rgba(60, 203, 235, 0.9))",
        "secondary-gradient-light":
          "linear-gradient(to right, rgba(15, 128, 248, 0.1), rgba(60, 203, 235, 0.1))",
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
        "title-primary-lg": ["64px", "72px"],
        "title-primary-md": ["52px", "60px"],
        "title-primary-sm": ["40px", "46px"],
        "title-secondary-lg": ["56px", "67px"],
        "title-secondary-md": ["42px", "48px"],
        "title-secondary-sm": ["36px", "42px"],
      },
      maxWidth: {
        "8xl": "85rem",
      },
      animation: {
        "pulse-float-5s": "pulse 5s linear infinite, floating 5s infinite",
        "spin-pulse-2": "spin 120s linear infinite, pulse 8s linear infinite",
      },
      transitionTimingFunction: {
        primary: "cubic-beizer(.61,.04,.45,.96)",
      },
    },
  },
  plugins: [],
};
