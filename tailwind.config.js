/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#FF8A00", // Orange
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "6.25rem",
          lg: "41rem",
        },
      },
    },
  },
  plugins: [],
};
