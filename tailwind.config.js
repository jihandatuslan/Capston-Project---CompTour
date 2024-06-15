/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      spacing: {
        98: "400px",
        100: "450px",
        110: "500px",
        115: "550px",
        120: "600px",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      screens: {
        mobile: "360px", // breakpoint untuk mobile
        tablet: "640px", // Breakpoint untuk tablet
        laptop: "1024px", // Breakpoint untuk laptop
        desktop: "1280px", // Breakpoint untuk desktop
      },
    },
  },
  plugins: [],
};
