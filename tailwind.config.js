const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1280px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(315deg, #130f40 0%, #000000 74%)',
          'button-gradient': "bg-gradient-to-r from-blue-800 to-gray-900"

      },
      colors: {
        'custom-dark': '#130f40',
        gold:{
          25:"#FFF2D7",
          50:'#FFEC9E',
          100:'#FFBB70',
          200:'#ED9455'
        },
        dark:{
          50: "#EEEEEE",
          100: "#00ADB5",
          200: "#393E46",
          300 : "#222831"
        },
        neon:{
          300: "#27005D",
          200: "#9400FF",
          150: "#9430fF",
          100: "#AED2FF",
          50: "#E4F1FF"
        }
      },
    },
  },
  plugins: [nextui()],
};
