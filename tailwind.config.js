/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["google", "sans-serif"],
      },
      colors: {
        primary: " #4d5156",
        "light-gray": "#f2f2f2",
        "middle-gray": "#70757a",
        "dark-blue": "#1a0dab"
      },
      width:{
        "nigthy-percent":"92%",
        "fourty-eigt":"48%"
      },
      fontSize: {
        thirteen: "13px",
        fifteen: "15px",
      },
      boxShadow: { "main-shadow": "0 1px 6px rgb(32 33 36 / 28%);" },
    },
  },
  plugins: [],
};
