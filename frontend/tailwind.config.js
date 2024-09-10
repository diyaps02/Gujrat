/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors:{
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      orange:{
        50:"#FAF0E6",
        300:"#F47C00",
      },
      blue:{
        500:"#292F66",
      },
      grey:{
        100:"#D9D9D9",
        300:"#777777",
        400:"#444444",
        500:"#555555",
        600:"#666666",
        700:"#333333",
        900:"#242728",
      },
      green:{
        50:"#cefad0",
        100:"#abf7b1",
        300:"#83f28f",
        400:"#5ced73",
        500:"#39e75f",
        600:"#1fd655",
        700:"#00c04b",
        800:"#00ab41",
        900:"#008631",
      }
    },
    extend: {
      backgroundImage: {
        'homepage': "url('/src/Assets/Images/sihhomepage.jpg')",
        'chakra': "url('/src/Assets/Images/scheme3.jpg')",
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}