/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#054C73",
        Secondary: "#F2F5FF",
        primaryText: "#333333",
        SecondaryText: "#666666",
        footer: "#03344F",
      },
    },
  },
  plugins: [],
};
