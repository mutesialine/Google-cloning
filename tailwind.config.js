/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { "light-gray": "rgb(242,242,242)" },
      boxShadow:{ 'main-shadow' :'0 1px 6px rgb(32 33 36 / 28%);'},
    },
  },
  plugins: [],
};
