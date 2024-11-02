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
        white: "#fff",
        green: "#3FA72F",
        lightGreen: "#3FC66E",
        textColor: "#311F09",
      },

      fontFamily: {
        Poppins: "Poppins",
        PoppinsSemiBold: "Poppins SemiBold",
        TinosBold: "Tinos Bold",
        RalewayBold: "Raleway Bold",
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
