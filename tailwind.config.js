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
    },
  },
  plugins: [],
};
