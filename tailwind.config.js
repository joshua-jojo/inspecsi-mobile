/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        "poppins-bold": ['poppins-bold'],
        "poppins-semibold": ['poppins-bold'],
        fugazone: ['fugaz-one'],
      },
    },
  },
  plugins: [require('daisyui'),require("tailwind-scrollbar-hide")],
}